import React from 'react';
import PropTypes from 'prop-types';
import BaseSandpack from './base/BaseSandpack';

function ReactSandpack({ files }) {
  return (
    <BaseSandpack template="react" files={files} />
  );
}

ReactSandpack.propTypes = {
  files: PropTypes.any,
};

ReactSandpack.defaultProps = {
  files: {},
};

export default ReactSandpack;
