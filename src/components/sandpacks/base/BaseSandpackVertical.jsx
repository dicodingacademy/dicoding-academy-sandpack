import React from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import {
  SandpackCodeEditor,
  SandpackLayout, SandpackPreview, SandpackProvider,
} from '@codesandbox/sandpack-react';
import { githubLight, sandpackDark, monokaiPro } from '@codesandbox/sandpack-themes';

function BaseSandpackVertical({ template, files, options }) {
  import('../styles/SandpackVertical.css');

  const [searchParams] = useSearchParams();
  const themeName = searchParams.get('theme') || 'light';

  const theme = {
    light: { ...githubLight, font: { ...githubLight.font, size: '14.4px' } },
    dark: { ...sandpackDark, font: { ...sandpackDark.font, size: '14.4px' } },
    monokai: { ...monokaiPro, font: { ...monokaiPro.font, size: '14.4px' } },
  };

  return (
    <SandpackProvider
      template={template}
      theme={theme[themeName]}
      files={files}
      options={{
        showLineNumbers: true,
        showConsoleButton: true,
        ...options,
      }}
    >
      <SandpackLayout>
        <SandpackCodeEditor
          showTabs
          showLineNumbers
        />
        <SandpackPreview
          showRefreshButton
        />
      </SandpackLayout>
    </SandpackProvider>
  );
}

BaseSandpackVertical.propTypes = {
  template: PropTypes.oneOf(['react', 'vue', 'svelte', 'angular', 'vanilla', 'node', 'static']).isRequired,
  files: PropTypes.any.isRequired,
  options: PropTypes.any,
};

BaseSandpackVertical.defaultProps = {
  options: {},
};

export default BaseSandpackVertical;
