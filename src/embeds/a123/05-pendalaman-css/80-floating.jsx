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
    <div class="container">
      <div class="left-content">
        <h3>Left Content</h3>
      </div>
      <div class="right-content">
        <h3>Right Content</h3>
      </div>
    </div>
  </body>
</html>
`,
  },
  'styles.css': {
    code: `\
* {
  /* digunakan untuk menghapus seluruh padding dan margin standar yang diberikan browser pada elemen */
  margin: 0;
  padding: 0;

  /* Menggunakan border-box dalam perhitungan dimensi box-nya */
  box-sizing: border-box;
}

.container {
  width: 800px;
  height: 400px;
  border: 1px solid black;
  margin: 0 auto;
}

.left-content {
  text-align: center;
  line-height: 400px;
  width: 30%;
  height: 100%;
  background-color: #00c7ed;

  /* digunakan untuk memindahkan posisi elemen ke sisi kiri container */
  float: left;
}

.right-content {
  text-align: center;
  line-height: 400px;
  width: 70%;
  height: 100%;
  background-color: #60d0a8;

  /* digunakan untuk memindahkan posisi elemen ke sisi kanan container */
  float: right;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function Floating80() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default Floating80;
