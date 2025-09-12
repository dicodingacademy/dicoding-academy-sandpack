import React from 'react';
import PropTypes from 'prop-types';
import BaseSandpack from './base/BaseSandpack';

function ReactSandpack({ files, options, consoleOnly }) {
  if (consoleOnly) {
    import('./styles/ReactSandpackConsoleOnly.css');
  }

  return (
    <BaseSandpack template="react" files={files} options={options} />
  );
}

ReactSandpack.propTypes = {
  files: PropTypes.any,
  options: PropTypes.any,
  consoleOnly: PropTypes.bool,
};

ReactSandpack.defaultProps = {
  files: {},
  options: {},
  consoleOnly: false,
};

export default ReactSandpack;
