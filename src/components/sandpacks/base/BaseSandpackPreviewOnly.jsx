import React from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import {
  SandpackLayout, SandpackPreview, SandpackProvider,
} from '@codesandbox/sandpack-react';
import { githubLight, monokaiPro, sandpackDark } from '@codesandbox/sandpack-themes';

function BaseSandpackPreviewOnly({
  template,
  files,
  options,
  showRefreshButton,
  showOpenInCodeSandbox,
}) {
  import('../styles/SandpackPreviewOnly.css');

  const [searchParams] = useSearchParams();
  const height = searchParams.get('height') || '99.5vh';
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
          showRefreshButton={showRefreshButton}
          showOpenInCodeSandbox={showOpenInCodeSandbox}
        />
      </SandpackLayout>
    </SandpackProvider>
  );
}

BaseSandpackPreviewOnly.propTypes = {
  template: PropTypes.oneOf(['react', 'vue', 'svelte', 'angular', 'vanilla', 'node', 'static']).isRequired,
  files: PropTypes.any.isRequired,
  options: PropTypes.any,
  showRefreshButton: PropTypes.bool,
  showOpenInCodeSandbox: PropTypes.bool,
};

BaseSandpackPreviewOnly.defaultProps = {
  options: {},
  showRefreshButton: true,
  showOpenInCodeSandbox: true,
};

export default BaseSandpackPreviewOnly;
