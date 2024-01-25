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
    <span>
      Ini merupakan sebuah teks yang berada pada elemen span. Seharusnya elemen
      ini ditampilkan dengan warna teks merah.
    </span>
    <p>
      Ini merupakan sebuah teks yang berada pada elemen paragraf, teks ini tidak
      seharusnya tidak akan terpengaruh oleh rule.
    </p>
    <span>
      Ini merupakan sebuah teks yang berada pada elemen span lainnya. Seharusnya
      elemen ini ditampilkan dengan warna teks merah juga.
    </span>
  </body>
</html>
`,
  },
  'styles.css': {
    code: `\
/* Semua elemen span */
span {
  color: red;
}
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function TypeSelector34() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default TypeSelector34;
