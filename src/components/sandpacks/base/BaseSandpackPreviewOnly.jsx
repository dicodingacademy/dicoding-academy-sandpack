import React from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import {
  SandpackLayout, SandpackPreview, SandpackProvider,
} from '@codesandbox/sandpack-react';
import { githubLight, monokaiPro, sandpackDark } from '@codesandbox/sandpack-themes';

function BaseSandpackPreviewOnly({ template, files, options }) {
  import('../styles/SandpackPreviewOnly.css');

  const [searchParams] = useSearchParams();
  const height = searchParams.get('height') || '99.838vh';
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
        editorHeight: height,
        showConsoleButton: true,
        ...options,
      }}
    >
      <SandpackLayout>
        <SandpackPreview
          showRefreshButton
        />
      </SandpackLayout>
    </SandpackProvider>
  );
}

BaseSandpackPreviewOnly.propTypes = {
  template: PropTypes.oneOf(['react', 'vue', 'svelte', 'angular', 'vanilla', 'node', 'static']).isRequired,
  files: PropTypes.any.isRequired,
  options: PropTypes.any,
};

BaseSandpackPreviewOnly.defaultProps = {
  options: {},
};

export default BaseSandpackPreviewOnly;
