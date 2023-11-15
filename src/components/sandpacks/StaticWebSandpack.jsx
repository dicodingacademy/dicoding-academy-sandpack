import React from 'react';
import PropTypes from 'prop-types';
import BaseSandpack from './base/BaseSandpack';

function StaticWebSandpack({ files, options }) {
  return (
    <BaseSandpack template="static" files={files} options={options} />
  );
}

StaticWebSandpack.propTypes = {
  files: PropTypes.any,
  options: PropTypes.any,
};

StaticWebSandpack.defaultProps = {
  files: {},
  options: {},
};

export default StaticWebSandpack;
