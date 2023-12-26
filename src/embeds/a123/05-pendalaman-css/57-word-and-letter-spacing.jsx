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
      <p class="letter-spacing">Bandung, Kota metropolitan terbesar di Provinsi Jawa Barat.</p>
      <p class="word-spacing">Bandung, Kota metropolitan terbesar di Provinsi Jawa Barat.</p>
    </main>
  </body>
</html>
`,
  },
  'styles.css': {
    code: `\
main {
  font-family: sans-serif;
}

.letter-spacing {
  letter-spacing: 4px;
}

.word-spacing {
  word-spacing: 1.5em;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function WordAndLetterSpacing57() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default WordAndLetterSpacing57;
