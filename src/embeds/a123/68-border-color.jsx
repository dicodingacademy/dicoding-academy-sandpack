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
  width: 200px;

  border-width: 8px;
  border-style: solid;

  border-top-color: #919191;
  border-right-color: #111111;
  border-bottom-color: #4ee717;
  border-left-color: #00c8eb;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function BorderColor68() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default BorderColor68;
