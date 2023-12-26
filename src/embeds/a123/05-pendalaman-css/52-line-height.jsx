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
    <p class="ln2">
      Properti line-height digunakan untuk mengatur jarak minimal teks pada garis dasar ke garis
      dalam menampilkannya pada halaman web.
    </p>
    <p class="ln200">
      Properti line-height digunakan untuk mengatur jarak minimal teks pada garis dasar ke garis
      dalam menampilkannya pada halaman web.
    </p>
    <p class="ln2em">
      Properti line-height digunakan untuk mengatur jarak minimal teks pada garis dasar ke garis
      dalam menampilkannya pada halaman web.
    </p>
  </body>
</html>
`,
  },
  'styles.css': {
    code: `\
.ln2 {
  line-height: 2;
}

.ln200 {
  line-height: 200%;
}

.ln2em {
  line-height: 2em;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function LineHeight52() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default LineHeight52;
