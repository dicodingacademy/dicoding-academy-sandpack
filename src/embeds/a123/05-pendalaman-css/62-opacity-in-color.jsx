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
    <main>
      <div class="box-1">Box 1</div>
      <div class="box-2">Box 2</div>
      <div class="box-3">Box 3</div>
    </main>
  </body>
</html>
`,
  },
  'styles.css': {
    code: `\
body {
  font-family: sans-serif;
}

div {
  width: 50%;
  height: 200px;

  line-height: 200px;
  text-align: center;
}

.box-1 {
  background-color: rgb(255, 255, 0, 0.75);

  float: left;
}

.box-2 {
  background-color: hsl(120, 100%, 25%, 0.75);

  float: left;
  margin-left: -25%;
}

.box-3 {
  background-color: #0000ffaa;

  float: left;
  margin-left: -25%;
}
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function OpacityInColor62() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default OpacityInColor62;
