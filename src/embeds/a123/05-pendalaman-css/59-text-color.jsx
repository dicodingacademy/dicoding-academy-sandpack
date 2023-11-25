import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Judul Dokumen</title>
    
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <main>
      <h1>Header</h1>
      <p>Sebuah paragraf.</p>

      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
      </ul>
    </main>
  </body>
</html>
`,
  },
  'styles.css': {
    code: `\
body {
  color: steelblue;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function TextColor59() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default TextColor59;
