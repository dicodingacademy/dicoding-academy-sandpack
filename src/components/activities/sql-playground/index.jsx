import './style.css';

import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { PGlite } from '@electric-sql/pglite';
import ActivitiesContainer from '../commons/ActivitiesContainer';

export const DEFAULT_SETUP_SQL = `
  CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    enrollment_date DATE DEFAULT CURRENT_DATE,
    gpa NUMERIC(3,2)
  );

  CREATE TABLE IF NOT EXISTS courses (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    credits INT NOT NULL DEFAULT 3,
    category VARCHAR(50)
  );

  CREATE TABLE IF NOT EXISTS enrollments (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id),
    course_id INT REFERENCES courses(id),
    grade VARCHAR(2),
    enrolled_at TIMESTAMP DEFAULT NOW()
  );

  INSERT INTO students (name, email, enrollment_date, gpa) VALUES
    ('Andi Pratama', 'andi@example.com', '2024-01-15', 3.75),
    ('Budi Santoso', 'budi@example.com', '2024-02-01', 3.50),
    ('Citra Dewi', 'citra@example.com', '2024-01-20', 3.90),
    ('Dian Sari', 'dian@example.com', '2024-03-10', 3.20),
    ('Eko Wijaya', 'eko@example.com', '2024-02-15', 3.65);

  INSERT INTO courses (title, credits, category) VALUES
    ('Belajar Dasar SQL', 3, 'Database'),
    ('Belajar Backend dengan Node.js', 4, 'Backend'),
    ('Belajar Membuat Aplikasi Android', 4, 'Mobile'),
    ('Cloud Practitioner Essentials', 3, 'Cloud'),
    ('Belajar Dasar Pemrograman Web', 3, 'Frontend');

  INSERT INTO enrollments (student_id, course_id, grade) VALUES
    (1, 1, 'A'),
    (1, 2, 'B+'),
    (2, 1, 'A-'),
    (2, 3, 'B'),
    (3, 1, 'A'),
    (3, 4, 'A'),
    (3, 5, 'A-'),
    (4, 2, 'B'),
    (4, 3, 'B+'),
    (5, 5, 'A');
`;

export const DEFAULT_QUERY = `-- Try running some queries!
-- Example: List all students and their courses

SELECT
  s.name AS student,
  c.title AS course,
  e.grade
FROM enrollments e
JOIN students s ON s.id = e.student_id
JOIN courses c ON c.id = e.course_id
ORDER BY s.name, c.title;`;

const TABS = [
  { id: 'output', label: 'Output' },
  { id: 'schema', label: 'Schema' },
  { id: 'data', label: 'Data' },
];

function ResultTable({ columns, rows }) {
  return (
    <div className="sql-playground__table-wrapper">
      <table className="sql-playground__table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            // eslint-disable-next-line react/no-array-index-key
            <tr key={rowIndex}>
              {columns.map((col) => {
                const value = row[col];
                return (
                  <td key={col}>
                    {value === null ? <em>NULL</em> : String(value)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

ResultTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const SCHEMA_COLUMNS = ['column_name', 'data_type', 'is_nullable', 'column_default'];

export default function SqlPlayground({ setupSql, defaultQuery, instructionsText }) {
  const [query, setQuery] = useState(defaultQuery);
  const [activeTab, setActiveTab] = useState('output');
  const [content, setContent] = useState({ type: 'placeholder', text: 'Run a query to see results here.' });
  const [isResetting, setIsResetting] = useState(false);

  // Holds the in-progress/ready PGlite promise so concurrent callers share one instance.
  const dbRef = useRef(null);

  // Builds a fresh in-browser Postgres seeded with the given setup SQL.
  const createDb = (sql) => (async () => {
    const db = await PGlite.create();
    await db.exec(sql);
    return db;
  })();

  const getDb = () => {
    if (!dbRef.current) {
      dbRef.current = createDb(setupSql);
    }
    return dbRef.current;
  };

  const executeQuery = async (sql) => {
    setActiveTab('output');

    if (!sql.trim()) {
      setContent({ type: 'placeholder', text: 'Write a query and click Run.' });
      return;
    }

    setContent({ type: 'loading' });

    try {
      const db = await getDb();
      const result = await db.exec(sql);

      if (result.length === 0) {
        setContent({ type: 'status', variant: 'success', message: 'Query executed successfully. No rows returned.' });
        return;
      }

      // Show the last result set in case of multiple statements.
      const lastResult = result[result.length - 1];

      if (!lastResult.fields || lastResult.fields.length === 0) {
        const affectedRows = lastResult.affectedRows ?? 0;
        setContent({
          type: 'status',
          variant: 'success',
          message: `Query executed successfully. ${affectedRows} row(s) affected.`,
        });
        return;
      }

      const columns = lastResult.fields.map((field) => field.name);
      setContent({ type: 'table', columns, rows: lastResult.rows });
    } catch (error) {
      setContent({ type: 'status', variant: 'error', message: error instanceof Error ? error.message : String(error) });
    }
  };

  const listTables = async (db) => {
    const result = await db.exec(`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
      ORDER BY table_name;
    `);
    return (result[0]?.rows ?? []).map((row) => row.table_name);
  };

  const showSchema = async () => {
    setContent({ type: 'loading' });

    try {
      const db = await getDb();
      const tableNames = await listTables(db);

      if (tableNames.length === 0) {
        setContent({ type: 'placeholder', text: 'No tables found.' });
        return;
      }

      const tables = await Promise.all(tableNames.map(async (name) => {
        const colResult = await db.exec(`
          SELECT column_name, data_type, is_nullable, column_default
          FROM information_schema.columns
          WHERE table_schema = 'public' AND table_name = '${name}'
          ORDER BY ordinal_position;
        `);
        return { name, columns: SCHEMA_COLUMNS, rows: colResult[0]?.rows ?? [] };
      }));

      setContent({ type: 'schema', tables });
    } catch (error) {
      setContent({ type: 'status', variant: 'error', message: error instanceof Error ? error.message : String(error) });
    }
  };

  const showData = async () => {
    setContent({ type: 'loading' });

    try {
      const db = await getDb();
      const tableNames = await listTables(db);

      if (tableNames.length === 0) {
        setContent({ type: 'placeholder', text: 'No tables found.' });
        return;
      }

      const tables = await Promise.all(tableNames.map(async (name) => {
        const dataResult = await db.exec(`SELECT * FROM "${name}" LIMIT 50;`);
        const rows = dataResult[0]?.rows ?? [];
        const columns = dataResult[0]?.fields?.map((field) => field.name) ?? [];
        return {
          name,
          columns,
          rows,
          label: `${name} (${rows.length} rows)`,
        };
      }));

      setContent({
        type: 'data',
        tables,
      });
    } catch (error) {
      setContent({
        type: 'status',
        variant: 'error',
        message: error instanceof Error ? error.message : String(error),
      });
    }
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);

    if (tabId === 'schema') {
      showSchema();
    } else if (tabId === 'data') {
      showData();
    } else {
      executeQuery(query);
    }
  };

  const handleReset = async () => {
    setIsResetting(true);
    try {
      dbRef.current = createDb(setupSql);
      await dbRef.current;
      setQuery(defaultQuery);
      setActiveTab('output');
      setContent({ type: 'placeholder', text: 'Database reset. Run a query to see results.' });
    } finally {
      setIsResetting(false);
    }
  };

  const handleEditorKeyDown = (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      event.preventDefault();
      executeQuery(query);
      return;
    }

    if (event.key === 'Tab') {
      event.preventDefault();
      const textarea = event.target;
      const { selectionStart, selectionEnd, value } = textarea;
      const nextValue = `${value.substring(0, selectionStart)}  ${value.substring(selectionEnd)}`;
      setQuery(nextValue);
      requestAnimationFrame(() => {
        textarea.selectionStart = selectionStart + 2;
        textarea.selectionEnd = selectionStart + 2;
      });
    }
  };

  useEffect(() => {
    // (Re)build the database whenever the setup SQL changes. This warms it up on
    // mount and keeps the live preview in sync while authoring on the create page.
    dbRef.current = createDb(setupSql);
  }, [setupSql]);

  useEffect(() => {
    // Keep the editor in sync with the authored default query.
    setQuery(defaultQuery);
  }, [defaultQuery]);

  const renderContent = () => {
    switch (content.type) {
      case 'loading':
        return <div className="sql-playground__loading">Executing...</div>;
      case 'status':
        return (
          <div className={`sql-playground__status sql-playground__status--${content.variant}`}>
            {content.message}
          </div>
        );
      case 'table':
        return <ResultTable columns={content.columns} rows={content.rows} />;
      case 'schema':
      case 'data':
        return content.tables.map((table) => (
          <div key={table.name} className="sql-playground__schema-table">
            <div className="sql-playground__schema-title">{table.label ?? table.name}</div>
            {table.columns.length > 0
              ? <ResultTable columns={table.columns} rows={table.rows} />
              : <p>Empty table</p>}
          </div>
        ));
      case 'placeholder':
      default:
        return <div className="sql-playground__placeholder">{content.text}</div>;
    }
  };

  return (
    <ActivitiesContainer title="SQL Playground">
      {instructionsText ? <p className="activities__instructions">{instructionsText}</p> : null}

      <div className="sql-playground">
        <div className="sql-playground__editor-panel">
          <textarea
            className="sql-playground__editor"
            spellCheck="false"
            placeholder={'-- Write your SQL query here...\n-- Press Ctrl+Enter to run'}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleEditorKeyDown}
          />

          <div className="sql-playground__actions">
            <button
              type="button"
              className="sql-playground__btn sql-playground__btn--secondary"
              onClick={handleReset}
              disabled={isResetting}
            >
              Reset
            </button>
            <div className="sql-playground__actions-right">
              <button
                type="button"
                className="sql-playground__btn sql-playground__btn--primary"
                onClick={() => executeQuery(query)}
              >
                Run
              </button>
            </div>
          </div>
        </div>

        <div className="sql-playground__results-panel">
          <div className="sql-playground__tabs">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`sql-playground__tab${activeTab === tab.id ? ' sql-playground__tab--active' : ''}`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="sql-playground__tab-content">
            {renderContent()}
          </div>
        </div>
      </div>
    </ActivitiesContainer>
  );
}

SqlPlayground.propTypes = {
  setupSql: PropTypes.string,
  defaultQuery: PropTypes.string,
  instructionsText: PropTypes.string,
};

SqlPlayground.defaultProps = {
  setupSql: DEFAULT_SETUP_SQL,
  defaultQuery: DEFAULT_QUERY,
  instructionsText: '',
};
