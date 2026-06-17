import React from 'react';
import PropTypes from 'prop-types';

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

// Renders one table out of a Schema/Data result, with a row of table sub-tabs.
function TableView({
  content, selectedTable, onSelectTable,
}) {
  const { tables } = content;
  const active = tables.find((table) => table.name === selectedTable) ?? tables[0];

  return (
    <div className="sql-playground__table-view">
      <div className="sql-playground__subtabs">
        {tables.map((table) => (
          <button
            key={table.name}
            type="button"
            className={`sql-playground__subtab${active?.name === table.name ? ' sql-playground__subtab--active' : ''}`}
            onClick={() => onSelectTable(table.name)}
          >
            {table.name}
          </button>
        ))}
      </div>

      {active && (
        <div className="sql-playground__schema-table">
          {content.type === 'data' && (
            <div className="sql-playground__schema-title">{`${active.rows.length} rows`}</div>
          )}
          {active.columns.length > 0
            ? <ResultTable columns={active.columns} rows={active.rows} />
            : <p>Empty table</p>}
        </div>
      )}
    </div>
  );
}

TableView.propTypes = {
  content: PropTypes.object.isRequired,
  selectedTable: PropTypes.string,
  onSelectTable: PropTypes.func.isRequired,
};

// Maps the playground's `content` state to the matching view.
export default function ResultView({ content, selectedTable, onSelectTable }) {
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
      return (
        <TableView
          content={content}
          selectedTable={selectedTable}
          onSelectTable={onSelectTable}
        />
      );
    case 'placeholder':
    default:
      return <div className="sql-playground__placeholder">{content.text}</div>;
  }
}

ResultView.propTypes = {
  content: PropTypes.object.isRequired,
  selectedTable: PropTypes.string,
  onSelectTable: PropTypes.func.isRequired,
};
