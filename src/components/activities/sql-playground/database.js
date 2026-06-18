import { PGlite } from '@electric-sql/pglite';
import { SCHEMA_COLUMNS, DATA_ROW_LIMIT } from './constants';

// Creates a fresh in-browser Postgres instance seeded with the given setup SQL.
// Returns the pending promise so concurrent callers share a single instance.
export function createDatabase(setupSql) {
  return (async () => {
    const db = await PGlite.create();
    await db.exec(setupSql);
    return db;
  })();
}

async function listTableNames(db) {
  const result = await db.exec(`
    SELECT table_name
    FROM information_schema.tables
    WHERE table_schema = 'public'
    ORDER BY table_name;
  `);
  return (result[0]?.rows ?? []).map((row) => row.table_name);
}

// Runs arbitrary user SQL and normalizes the outcome into one of:
//   { kind: 'empty' }                         — no result sets
//   { kind: 'affected', affectedRows }        — write with no returned rows
//   { kind: 'rows', columns, rows }           — a result set to tabulate
export async function runQuery(db, sql) {
  const result = await db.exec(sql);

  if (result.length === 0) {
    return { kind: 'empty' };
  }

  // Show the last result set in case of multiple statements.
  const last = result[result.length - 1];

  if (!last.fields || last.fields.length === 0) {
    return { kind: 'affected', affectedRows: last.affectedRows ?? 0 };
  }

  return {
    kind: 'rows',
    columns: last.fields.map((field) => field.name),
    rows: last.rows,
  };
}

// Builds a lookup of "table.column" -> human-readable key constraints
// (e.g. "PK", "UNIQUE", "FK → courses.id"). NOT NULL is omitted here since
// the Schema tab already shows it via the is_nullable column.
async function fetchConstraints(db) {
  const result = await db.exec(`
    SELECT
      tc.table_name,
      kcu.column_name,
      string_agg(
        CASE tc.constraint_type
          WHEN 'PRIMARY KEY' THEN 'PK'
          WHEN 'UNIQUE' THEN 'UNIQUE'
          WHEN 'FOREIGN KEY' THEN 'FK → ' || ccu.table_name || '.' || ccu.column_name
        END || ' (' || tc.constraint_name || ')',
        ', '
      ) AS constraints
    FROM information_schema.table_constraints tc
    JOIN information_schema.key_column_usage kcu
      ON tc.constraint_name = kcu.constraint_name
      AND tc.table_schema = kcu.table_schema
    LEFT JOIN information_schema.constraint_column_usage ccu
      ON tc.constraint_type = 'FOREIGN KEY'
      AND tc.constraint_name = ccu.constraint_name
      AND tc.table_schema = ccu.table_schema
    WHERE tc.table_schema = 'public'
      AND tc.constraint_type IN ('PRIMARY KEY', 'FOREIGN KEY', 'UNIQUE')
    GROUP BY tc.table_name, kcu.column_name;
  `);

  const rows = result[0]?.rows ?? [];
  return new Map(rows.map((row) => [`${row.table_name}.${row.column_name}`, row.constraints]));
}

// Returns each table's column definitions: [{ name, columns, rows }].
export async function fetchSchema(db) {
  const [names, constraints] = await Promise.all([listTableNames(db), fetchConstraints(db)]);

  return Promise.all(names.map(async (name) => {
    const result = await db.exec(`
      SELECT
        column_name,
        CASE
          WHEN data_type = 'character varying'
            THEN 'VARCHAR' || COALESCE('(' || character_maximum_length || ')', '')
          WHEN data_type = 'character'
            THEN 'CHAR' || COALESCE('(' || character_maximum_length || ')', '')
          WHEN data_type = 'numeric'
            THEN 'NUMERIC' || COALESCE('(' || numeric_precision || ',' || numeric_scale || ')', '')
          WHEN data_type = 'timestamp without time zone' THEN 'TIMESTAMP'
          WHEN data_type = 'timestamp with time zone' THEN 'TIMESTAMPTZ'
          ELSE upper(data_type)
        END AS data_type,
        is_nullable,
        CASE
          WHEN column_default LIKE 'nextval(%' THEN 'AUTO_INCREMENT'
          ELSE regexp_replace(column_default, '::[a-zA-Z ]+', '', 'g')
        END AS column_default
      FROM information_schema.columns
      WHERE table_schema = 'public' AND table_name = '${name}'
      ORDER BY ordinal_position;
    `);
    const rows = (result[0]?.rows ?? []).map((row) => ({
      ...row,
      constraints: constraints.get(`${name}.${row.column_name}`) ?? '',
    }));
    return { name, columns: SCHEMA_COLUMNS, rows };
  }));
}

// Returns each table's rows (capped): [{ name, columns, rows }].
export async function fetchData(db) {
  const names = await listTableNames(db);

  return Promise.all(names.map(async (name) => {
    const result = await db.exec(`SELECT * FROM "${name}" LIMIT ${DATA_ROW_LIMIT};`);
    return {
      name,
      columns: result[0]?.fields?.map((field) => field.name) ?? [],
      rows: result[0]?.rows ?? [],
    };
  }));
}
