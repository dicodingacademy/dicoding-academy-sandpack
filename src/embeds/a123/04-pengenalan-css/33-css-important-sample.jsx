import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    hidden: false,
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Judul Dokumen</title>

    <link rel="stylesheet" href="styles.css">
    
    <style>
      p {
        color: blue;
      }
    </style>
  </head>
  <body>
    <p>
      Sesuai dengan namanya cascading yang artinya <q>mengalir</q>, alur kerja CSS dalam membaca
      kode pun seperti itu. Mengalir dari atas ke bawah sehingga kita harus memperhatikan urutan
      dalam penulisan rules <i>styling</i>.
    </p>
  </body>
</html>
`,
  },
  'styles.css': {
    active: true,
    code: `\
p {
  color: red !important;
}
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function CSSImportantSample33() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default CSSImportantSample33;
