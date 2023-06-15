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

    <!-- Impor berkas CSS Anda -->
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Kota Bandung</h1>
  </body>
</html>
`,
    hidden: false,
    active: true,
  },
  'style.css': {
    code: `\
h1 {
  color: green;
  text-decoration: underline;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function StyleSample27() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default StyleSample27;
