import React from 'react';
import PropTypes from 'prop-types';
import BaseSandpackPreviewOnly from './base/BaseSandpackPreviewOnly';

function StaticWebSandpackPreviewOnly({
  files, options, showRefreshButton, showOpenInCodeSandbox,
}) {
  return (
    <BaseSandpackPreviewOnly
      template="static"
      files={files}
      options={options}
      showRefreshButton={showRefreshButton}
      showOpenInCodeSandbox={showOpenInCodeSandbox}
    />
  );
}

StaticWebSandpackPreviewOnly.propTypes = {
  files: PropTypes.any,
  options: PropTypes.any,
  showRefreshButton: PropTypes.bool,
  showOpenInCodeSandbox: PropTypes.bool,
};

StaticWebSandpackPreviewOnly.defaultProps = {
  files: {},
  options: {},
  showRefreshButton: true,
  showOpenInCodeSandbox: true,
};

export default StaticWebSandpackPreviewOnly;
