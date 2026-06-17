import './style.css';

import React from 'react';
import PropTypes from 'prop-types';
import ActivitiesContainer from '../commons/ActivitiesContainer';
import { TABS, DEFAULT_SETUP_SQL, DEFAULT_QUERY } from './constants';
import useSqlPlayground from './useSqlPlayground';
import ResultView from './ResultView';

// Re-exported so the create page can seed its form with the same defaults.
export { DEFAULT_SETUP_SQL, DEFAULT_QUERY };

export default function SqlPlayground({ setupSql, defaultQuery, instructionsText }) {
  const {
    query, setQuery, activeTab, selectedTable, setSelectedTable,
    content, isResetting, run, selectTab, reset,
  } = useSqlPlayground({ setupSql, defaultQuery });

  const handleEditorKeyDown = (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      event.preventDefault();
      run();
      return;
    }

    if (event.key === 'Tab') {
      event.preventDefault();
      const textarea = event.target;
      const { selectionStart, selectionEnd, value } = textarea;
      setQuery(`${value.substring(0, selectionStart)}  ${value.substring(selectionEnd)}`);
      requestAnimationFrame(() => {
        textarea.selectionStart = selectionStart + 2;
        textarea.selectionEnd = selectionStart + 2;
      });
    }
  };

  return (
    <ActivitiesContainer title="SQL Playground">
      {instructionsText ? <p className="activities__instructions">{instructionsText}</p> : null}

      <div className="sql-playground">
        <div className="sql-playground__tabs">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`sql-playground__tab${activeTab === tab.id ? ' sql-playground__tab--active' : ''}`}
              onClick={() => selectTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'query' && (
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
                onClick={reset}
                disabled={isResetting}
              >
                Reset
              </button>
              <div className="sql-playground__actions-right">
                <button
                  type="button"
                  className="sql-playground__btn sql-playground__btn--primary"
                  onClick={run}
                >
                  Run
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="sql-playground__tab-content">
          <ResultView
            content={content}
            selectedTable={selectedTable}
            onSelectTable={setSelectedTable}
          />
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
