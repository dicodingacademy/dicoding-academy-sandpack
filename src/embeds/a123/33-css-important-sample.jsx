import React from 'react';
import StaticWebSandpack from '../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Judul Dokumen</title>

    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <p>
      Sesuai dengan namanya cascading yang artinya <q>mengalir</q>, alur kerja CSS dalam membaca
      kode pun seperti itu. Mengalir dari atas ke bawah sehingga kita harus memperhatikan urutan
      dalam penulisan rules <i>styling</i>
    </p>
  </body>
</html>
`,
  },
  'styles.css': {
    code: `\
p {
  color: red !important;
}

p {
  color: blue;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function CSSImportantSample33() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default CSSImportantSample33;
