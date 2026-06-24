import { useEffect, useRef, useState } from 'react';
import {
  createDatabase, runQuery, fetchSchema, fetchData,
} from './database';

const PLACEHOLDER = {
  initial: 'Run a query to see results here.',
  emptyQuery: 'Write a query and click Run.',
  afterReset: 'Database reset. Run a query to see results.',
  noTables: 'No tables found.',
};

// Keep the current table selection if it still exists, otherwise pick the first.
function pickTableName(tables, current) {
  return tables.some((table) => table.name === current) ? current : (tables[0]?.name ?? null);
}

function toErrorContent(error) {
  return {
    type: 'status',
    variant: 'error',
    message: error instanceof Error ? error.message : String(error),
  };
}

// Owns all SQL playground state and the database lifecycle. The component stays
// purely presentational and reads everything it needs from the returned object.
export default function useSqlPlayground({ setupSql, defaultQuery }) {
  const [query, setQuery] = useState(defaultQuery);
  const [activeTab, setActiveTab] = useState('query');
  const [selectedTable, setSelectedTable] = useState(null);
  const [content, setContent] = useState({ type: 'placeholder', text: PLACEHOLDER.initial });
  const [isResetting, setIsResetting] = useState(false);

  // Holds the in-progress/ready PGlite promise so concurrent callers share one instance.
  const dbRef = useRef(null);

  const getDb = () => {
    if (!dbRef.current) {
      dbRef.current = createDatabase(setupSql);
    }
    return dbRef.current;
  };

  const run = async () => {
    setActiveTab('query');

    if (!query.trim()) {
      setContent({ type: 'placeholder', text: PLACEHOLDER.emptyQuery });
      return;
    }

    setContent({ type: 'loading' });

    try {
      const result = await runQuery(await getDb(), query);

      if (result.kind === 'rows') {
        setContent({ type: 'table', columns: result.columns, rows: result.rows });
      } else if (result.kind === 'affected') {
        setContent({
          type: 'status',
          variant: 'success',
          message: `Query executed successfully. ${result.affectedRows} row(s) affected.`,
        });
      } else {
        setContent({
          type: 'status',
          variant: 'success',
          message: 'Query executed successfully. No rows returned.',
        });
      }
    } catch (error) {
      setContent(toErrorContent(error));
    }
  };

  const showTables = async (type, fetcher) => {
    setContent({ type: 'loading' });

    try {
      const tables = await fetcher(await getDb());

      if (tables.length === 0) {
        setContent({ type: 'placeholder', text: PLACEHOLDER.noTables });
        return;
      }

      setContent({ type, tables });
      setSelectedTable((prev) => pickTableName(tables, prev));
    } catch (error) {
      setContent(toErrorContent(error));
    }
  };

  const selectTab = (tabId) => {
    setActiveTab(tabId);

    if (tabId === 'schema') {
      showTables('schema', fetchSchema);
    } else if (tabId === 'data') {
      showTables('data', fetchData);
    } else {
      run();
    }
  };

  const reset = async () => {
    setIsResetting(true);
    try {
      dbRef.current = createDatabase(setupSql);
      await dbRef.current;
      setQuery(defaultQuery);
      setActiveTab('query');
      setContent({ type: 'placeholder', text: PLACEHOLDER.afterReset });
    } finally {
      setIsResetting(false);
    }
  };

  useEffect(() => {
    // (Re)build the database whenever the setup SQL changes. This warms it up on
    // mount and keeps the live preview in sync while authoring on the create page.
    dbRef.current = createDatabase(setupSql);
  }, [setupSql]);

  useEffect(() => {
    // Keep the editor in sync with the authored default query.
    setQuery(defaultQuery);
  }, [defaultQuery]);

  return {
    query,
    setQuery,
    activeTab,
    selectedTable,
    setSelectedTable,
    content,
    isResetting,
    run,
    selectTab,
    reset,
  };
}
