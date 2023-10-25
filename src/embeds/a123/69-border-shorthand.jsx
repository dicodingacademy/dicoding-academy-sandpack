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
    <div class="box">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
  </body>
</html>
`,
  },
  'styles.css': {
    code: `\
.box {
  border: 4px dashed #00a2c6;
  width: 200px;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function BorderShorthand69() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default BorderShorthand69;
