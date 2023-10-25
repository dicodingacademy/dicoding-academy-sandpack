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
    <div class="content"></div>
    <p>
      Elemen menerapkan <code>box-sizing: content-box;</code> Ukuran box secara keseluruhan akan
      menjadi 260px lebar, 260px tinggi; 260 = 200 + 20 + 20 + 10 + 10
    </p>
    <br />
    <div class="box"></div>
    <p>
      Elemen menerapkan <code>box-sizing: border-box;</code> Ukuran box akan tetap 200px lebar,
      200px tinggi meskipun menerapkan padding dan border
    </p>
  </body>
</html>
`,
  },
  'styles.css': {
    code: `\
div {
  height: 200px;
  width: 200px;
  background-color: lightgreen;
  border: 10px solid cornflowerblue;
  padding: 20px;
}

.content {
  box-sizing: content-box;
}

.box {
  box-sizing: border-box;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function BoxSizing66() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default BoxSizing66;
