import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack.jsx';

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
    <p>
      Ini merupakan paragraf pertama. Rule styling tidak akan diterapkan pada
      elemen paragraf ini.
    </p>
    <img
      src="https://raw.githubusercontent.com/dicodingacademy/a123-webdasar-labs/099-shared-files/shared-media/g-dicoding-logo.png"
      alt="g Dicoding Logo"
      width="400px"
    />
    <p>
      Ini merupakan paragraf kedua dan ditetapkan setelah elemen gambar. Maka
      paragraf ini seharusnya menerapkan rule dengan menampilkan teks berwarna
      hijau.
    </p>
    <p>
      Ini merupakan paragraf ketiga. Letaknya memang setelah elemen gambar,
      Namun, tidak diletakkan persis setelahnya, sehingga rule tidak akan
      diterapkan pada elemen ini.
    </p>
  </body>
</html>
`,
  },
  'styles.css': {
    code: `\
/* Rule akan diterapkan pada elemen paragraf yang berada tepat setelah elemen img */
img + p {
  color: green;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function AdjacentSelector40() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default AdjacentSelector40;
