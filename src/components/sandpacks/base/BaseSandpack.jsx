import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { Sandpack } from '@codesandbox/sandpack-react';
import { githubLight, monokaiPro, sandpackDark } from '@codesandbox/sandpack-themes';
import { Maximize, Minimize } from 'lucide-react';
import '../styles/BaseSandpack.css';

function BaseSandpack({ template, files, options }) {
  const [searchParams] = useSearchParams();
  const height = searchParams.get('height') || '99.5vh';
  const console = Boolean(searchParams.get('console')) || false;
  const themeName = searchParams.get('theme') || 'light';

  const containerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === containerRef.current);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  const theme = {
    light: { ...githubLight, font: { ...githubLight.font, size: '14.4px' } },
    dark: { ...sandpackDark, font: { ...sandpackDark.font, size: '14.4px' } },
    monokai: { ...monokaiPro, font: { ...monokaiPro.font, size: '14.4px' } },
  };

  return (
    <div ref={containerRef} className="base-sandpack-container">
      <button
        type="button"
        className="base-sandpack-fullscreen-btn"
        onClick={toggleFullscreen}
        aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
        title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
      >
        {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
      </button>
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
    </div>
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
