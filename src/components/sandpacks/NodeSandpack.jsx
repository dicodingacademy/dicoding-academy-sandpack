import React from 'react';
import PropTypes from 'prop-types';
import BaseSandpack from './base/BaseSandpack';

const defaultFiles = {
  'index.js': {
    code: 'console.log(\'Hello, World\');',
  },
};

function NodeSandpack({ files, options, consoleOnly }) {
  if (consoleOnly) {
    import('./styles/NodeSandpackConsoleOnly.css');
  }

  return (
    <BaseSandpack
      template="node"
      files={{
        ...defaultFiles,
        ...files,
      }}
      options={{
        showConsole: true,
        ...options,
      }}
    />
  );
}

NodeSandpack.propTypes = {
  files: PropTypes.any,
  options: PropTypes.any,
  consoleOnly: PropTypes.bool,
};

NodeSandpack.defaultProps = {
  files: {},
  options: {},
  consoleOnly: true,
};

export default NodeSandpack;
