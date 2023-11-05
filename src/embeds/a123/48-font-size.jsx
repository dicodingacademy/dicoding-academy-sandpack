import React from 'react';
import StaticWebSandpack from '../../components/sandpacks/StaticWebSandpack';

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
    <h1>Bandung</h1>
  </body>
</html>
`,
  },
  'styles.css': {
    code: `\
h1 {
  font-size: 1.5em;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function FontSize48() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default FontSize48;
