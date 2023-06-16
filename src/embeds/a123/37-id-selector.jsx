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
    <div id="special">
      <p>Ini merupakan konten di dalam sebuah div yang diberi id special.</p>
    </div>
    <div>
      <p>Ini merupakan konten di dalam sebuah div biasa.</p>
    </div>
  </body>
</html>
`,
    hidden: false,
    active: true,
  },
  'style.css': {
    code: `\
#special {
  background-color: skyblue;
}`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function IdSelector37() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default IdSelector37;
