import React from 'react';
import PropTypes from 'prop-types';
import BaseSandpack from './base/BaseSandpack';

function TestSandpack({ files, options }) {
  return (
    <BaseSandpack
      template="test-ts"
      files={files}
      options={options}
    />
  );
}

TestSandpack.propTypes = {
  files: PropTypes.any,
  options: PropTypes.any,
};

TestSandpack.defaultProps = {
  files: {},
  options: {},
};

export default TestSandpack;
