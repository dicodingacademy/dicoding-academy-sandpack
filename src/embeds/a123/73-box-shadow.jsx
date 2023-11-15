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
    <div class="box"></div>
  </body>
</html>
`,
  },
  'styles.css': {
    code: `\
.box {
  width: 200px;
  height: 200px;

  background-color: greenyellow;

  box-shadow: 6px 6px 5px 10px #666666;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function BoxShadow73() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default BoxShadow73;
