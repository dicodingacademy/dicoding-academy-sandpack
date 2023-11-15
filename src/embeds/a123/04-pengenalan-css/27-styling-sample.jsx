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

    <!-- Impor berkas CSS Anda -->
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Kota Bandung</h1>
  </body>
</html>
`,
  },
  'styles.css': {
    code: `\
h1 {
  color: green;
  text-decoration: underline;
}
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function StyleSample27() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default StyleSample27;
