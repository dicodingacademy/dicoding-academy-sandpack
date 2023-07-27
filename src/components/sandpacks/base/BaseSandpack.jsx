import React from 'react';
import PropTypes from 'prop-types';
import { Sandpack } from '@codesandbox/sandpack-react';
import { useSearchParams } from 'react-router-dom';
import { githubLight, sandpackDark } from '@codesandbox/sandpack-themes';

function BaseSandpack({ template, files, options }) {
  const [searchParams] = useSearchParams();
  const height = searchParams.get('height') || '99vh';
  const console = Boolean(searchParams.get('console')) || false;
  const themeName = searchParams.get('theme') || 'light';

  const theme = {
    light: { ...githubLight, font: { ...githubLight.font, size: '14.4px' } },
    dark: { ...sandpackDark, font: { ...sandpackDark.font, size: '14.4px' } },
  };

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
        editorWidthPercentage: 65,
        resizablePanels: true,
        ...options,
      }}
    />
  );
}

BaseSandpack.propTypes = {
  template: PropTypes.oneOf(['react', 'vue', 'svelte', 'angular', 'vanilla', 'node', 'static']).isRequired,
  files: PropTypes.any.isRequired,
  options: PropTypes.any,
};

BaseSandpack.defaultProps = {
  options: {},
};

export default BaseSandpack;
