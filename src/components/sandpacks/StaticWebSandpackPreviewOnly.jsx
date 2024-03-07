import React from 'react';
import PropTypes from 'prop-types';
import BaseSandpackPreviewOnly from './base/BaseSandpackPreviewOnly';

function StaticWebSandpackPreviewOnly({ files, options }) {
  return (
    <BaseSandpackPreviewOnly
      template="static"
      files={files}
      options={options}
    />
  );
}

StaticWebSandpackPreviewOnly.propTypes = {
  files: PropTypes.any,
  options: PropTypes.any,
};

StaticWebSandpackPreviewOnly.defaultProps = {
  files: {},
  options: {},
};

export default StaticWebSandpackPreviewOnly;
