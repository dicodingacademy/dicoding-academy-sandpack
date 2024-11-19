import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Bad Focus Order with Styling</title>
  
  <link rel="stylesheet" href="styles.css" >
</head>
<body>
  <p>
    <label for="temp">Letakkan cursor Anda ke kolom input, lalu tekan tombol Tab beberapa kali:</label>
    <input id="temp">
  </p>

  <div>
    <span tabindex="0">flexbox.</span>
    <span tabindex="0">CSS</span>
    <span tabindex="0">with</span>
    <span tabindex="0">styled</span>
    <span tabindex="0">then</span>
    <span tabindex="0">This</span>
    <span tabindex="0">order</span>
    <span tabindex="0">reverse</span>
    <span tabindex="0">in</span>
    <span tabindex="0">written</span>
    <span tabindex="0">was</span>
    <span tabindex="0">sentenced</span>
  </div>
</body>
</html>
`,
  },
  'styles.css': {
    hidden: false,
    code: `\
:root {
  font-family: segoe UI, system-ui, -apple-system, sans-serif;
}

div {
  display: inline-flex;
  flex-flow: row-reverse; 
  gap: 0.5em; 
}

span {
  border: 1px dashed;
}
span:nth-of-type(6) {
  order: 3;
}
span:focus-visible {
  background-color: palegoldenrod;
  border-color: green;
  outline: 2px solid red;
}
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

export default function BadFocusOrderWithStyling03() {
  return (
    <StaticWebSandpack
      files={files}
      options={{
        editorWidthPercentage: 55,
        showConsole: false,
      }}
    />
  );
}
