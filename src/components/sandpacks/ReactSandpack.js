import React from 'react';
import PropTypes from 'prop-types';
import BaseSandpack from './base/BaseSandpack';

function ReactSandpack({ files, options }) {
  return (
    <BaseSandpack template="react" files={files} options={options} />
  );
}

ReactSandpack.propTypes = {
  files: PropTypes.any,
  options: PropTypes.any,
};

ReactSandpack.defaultProps = {
  files: {},
  options: {},
};

export default ReactSandpack;
