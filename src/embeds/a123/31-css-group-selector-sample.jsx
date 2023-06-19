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

    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h2>Judul dengan Heading 2</h2>
    <h3>Judul dengan Heading 3</h3>
  </body>
</html>
`,
    hidden: false,
    active: true,
  },
  'style.css': {
    code: `\
h2, h3 {
  color: #00A2C6;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function CSSGroupSelectorSample31() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default CSSGroupSelectorSample31;