import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

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
  border-top-style: solid;
  border-right-style: dotted;
  border-bottom-style: groove;
  border-left-style: double;

  border-width: 4px;
  border-color: red;
  width: 200px;
  height: 50px;
}
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function BorderStyle67() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default BorderStyle67;
