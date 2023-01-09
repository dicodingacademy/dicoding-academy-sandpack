import React from 'react';
import PropTypes from 'prop-types';
import { Sandpack } from '@codesandbox/sandpack-react';
import { useSearchParams } from 'react-router-dom';
import theme from './theme';

function BaseSandpack({ template, files }) {
  const [searchParams] = useSearchParams();
  const height = searchParams.get('height') || '98vh';
  const console = Boolean(searchParams.get('console')) || false;
  const themeName = searchParams.get('theme') || 'light';

  return (
    <Sandpack
      template={template}
      theme={theme[themeName]}
      files={files}
      options={{
        editorHeight: height,
        showLineNumbers: true,
        showConsole: console,
        showConsoleButton: true,
      }}
    />
  );
}

BaseSandpack.propTypes = {
  template: PropTypes.oneOf(['react', 'vue', 'svelte', 'angular', 'vanilla']).isRequired,
  files: PropTypes.any.isRequired,
};

export default BaseSandpack;