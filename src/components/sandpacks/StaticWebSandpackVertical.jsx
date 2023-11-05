import React from 'react';
import PropTypes from 'prop-types';
import BaseSandpackVertical from './base/BaseSandpackVertical';

function StaticWebSandpackVertical({ files, options }) {
  return (
    <BaseSandpackVertical
      template="static"
      files={files}
      options={options}
    />
  );
}

StaticWebSandpackVertical.propTypes = {
  files: PropTypes.any,
  options: PropTypes.any,
};

StaticWebSandpackVertical.defaultProps = {
  files: {},
  options: {},
};

export default StaticWebSandpackVertical;
