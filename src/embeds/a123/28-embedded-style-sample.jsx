import React from 'react';
import StaticWebSandpack from '../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
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
    hidden: false,
    active: true,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function EmbeddedStyleSample28() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default EmbeddedStyleSample28;
