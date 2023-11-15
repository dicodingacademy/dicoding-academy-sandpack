import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack.jsx';

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

    <style>
      h1 {
        color: green;
      }
    </style>
  </head>
  <body>
    <h1>Kota Bandung</h1>
  </body>
</html>
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function EmbeddedStyleSample28() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default EmbeddedStyleSample28;
