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
  <title>Bad Focus Order with tabindex</title>
  
  <link rel="stylesheet" href="styles.css" >
</head>
<body>
  <p>Klik &lt;input&gt; apa pun, lalu tekan tombol Tab.</p>
  
  <ol>
    <li><input tabindex="3"></li>
    <li><input tabindex="6"></li>
    <li><input tabindex="2"></li>
    <li><input tabindex="0"></li>
    <li><input tabindex="0"></li>
    <li><input tabindex="-1"></li>
    <li><input tabindex="0"></li>
    <li><input tabindex="8"></li>
    <li><input tabindex="1"></li>
    <li><input tabindex="5"></li>
    <li><input tabindex="7"></li>
    <li><input tabindex="4"></li>
  </ol>
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

ol {
  columns: 4 7rem;
  font-size: 2rem;
}

input {
  width: 5rem;
  font-size: 2rem;
}
input:focus-visible {
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

export default function BadFocusOrderWithTabindex02() {
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
