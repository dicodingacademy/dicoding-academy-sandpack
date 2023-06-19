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
    <div class="box"></div>
  </body>
</html>
`,
    hidden: false,
    active: true,
  },
  'style.css': {
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
    code: '',
    hidden: true,
  },
};

function BorderStyle67() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default BorderStyle67;
