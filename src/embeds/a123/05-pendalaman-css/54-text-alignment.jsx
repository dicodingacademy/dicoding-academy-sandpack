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
      <p class="tl-left">
        text-align menetapkan peletakkan secara horizontal terhadap konten/elemen yang bersifat
        inline yang berada dalam elemen block.
      </p>

      <p class="tl-right">
        text-align menetapkan peletakkan secara horizontal terhadap konten/elemen yang bersifat
        inline yang berada dalam elemen block.
      </p>

      <p class="tl-center">
        text-align menetapkan peletakkan secara horizontal terhadap konten/elemen yang bersifat
        inline yang berada dalam elemen block.
      </p>

      <p class="tl-justify">
        text-align menetapkan peletakkan secara horizontal terhadap konten/elemen yang bersifat
        inline yang berada dalam elemen block.
      </p>
    </main>
  </body>
</html>
`,
  },
  'styles.css': {
    code: `\
main {
  width: 80%;
  margin: 0 auto;

  border: 1px solid black;
}

p {
  border: 1px solid black;
}

.tl-left {
  text-align: left;
}

.tl-right {
  text-align: right;
}

.tl-center {
  text-align: center;
}

.tl-justify {
  text-align: justify;
}

`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function TextAlignment54() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default TextAlignment54;
