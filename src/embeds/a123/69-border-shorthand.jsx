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
    <div class="box">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
  </body>
</html>
`,
    hidden: false,
    active: true,
  },
  'style.css': {
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
