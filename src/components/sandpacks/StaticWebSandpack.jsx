import React from 'react';
import PropTypes from 'prop-types';
import BaseSandpack from './base/BaseSandpack';

function StaticWebSandpack({ files }) {
  return (
    <BaseSandpack template="static" files={files} />
  );
}

StaticWebSandpack.propTypes = {
  files: PropTypes.any,
};

StaticWebSandpack.defaultProps = {
  files: {},
};

export default StaticWebSandpack;
