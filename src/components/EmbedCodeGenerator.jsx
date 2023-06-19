import React, { useState } from 'react';
import useInput from '../hooks/useInput';
import { generateIframe } from '../utils';

function EmbedCodeGenerator() {
  const [src, onSrcChange] = useInput();
  const [width, onWidthChange] = useInput('100%');
  const [height, onHeightChange] = useInput('600px');
  const [theme, onThemeChange] = useInput('dark');
  const [iframeCode, setIframeCode] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const trimmedSrc = src.replace('https://academy-sandpack.dicoding.dev', '');
    const generatedIframe = generateIframe(`https://academy-sandpack.dicoding.dev${trimmedSrc}?theme=${theme}`, 'Dicoding Sandpack', height, width);
    setIframeCode(generatedIframe);
  };

  return (
    <form onSubmit={onSubmitHandler} className="embed-code-generator">
      <label htmlFor="src">
        Source
        <input
          value={src}
          onChange={onSrcChange}
          type="text"
        />
      </label>
      <label htmlFor="width">
        Width
        <input
          value={width}
          onChange={onWidthChange}
          type="text"
        />
      </label>
      <label htmlFor="height">
        Height
        <input
          value={height}
          onChange={onHeightChange}
          type="text"
        />
      </label>
      <label htmlFor="theme">
        Theme
        <select
          value={theme}
          onChange={onThemeChange}
        >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </label>

      <button type="submit">Generate</button>

      <div>
        <h3>Generated Iframe</h3>
        <textarea value={iframeCode} readOnly />
      </div>
    </form>
  );
}

export default EmbedCodeGenerator;
