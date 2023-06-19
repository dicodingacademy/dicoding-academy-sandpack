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
    
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Ini Merupakan Teks Dengan Huruf Kapital Kecil</h1>
  </body>
</html>
`,
    hidden: false,
    active: true,
  },
  'style.css': {
    code: `\
p {
  font-variant: small-caps;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function FontVariant51() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default FontVariant51;
