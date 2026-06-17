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

// Returns each table's column definitions: [{ name, columns, rows }].
export async function fetchSchema(db) {
  const names = await listTableNames(db);

  return Promise.all(names.map(async (name) => {
    const result = await db.exec(`
      SELECT column_name, data_type, is_nullable, column_default
      FROM information_schema.columns
      WHERE table_schema = 'public' AND table_name = '${name}'
      ORDER BY ordinal_position;
    `);
    return { name, columns: SCHEMA_COLUMNS, rows: result[0]?.rows ?? [] };
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
