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
    <p>
      Ini merupakan paragraf pertama. Rule styling tidak akan diterapkan pada
      elemen paragraf ini.
    </p>
    <img
      src="https://raw.githubusercontent.com/dicodingacademy/a123-webdasar-labs/099-shared-files/shared-media/g-dicoding-logo.png"
      alt="Dicoding logo"
      width="400px"
    />
    <p>
      Ini merupakan paragraf kedua dan ditetapkan setelah elemen gambar. Maka
      paragraf ini menerapkan rule dengan menampilkan teks berwarna hijau.
    </p>
    <div>
      <p>
        Ini merupakan paragraf ketiga, letaknya setelah elemen gambar, tetapi
        paragraf ini dibungkus di dalam div sehingga paragraf ini tidak akan
        menerapkan rule styling karena tidak memiliki induk yang sama.
      </p>
    </div>
    <p>
      Ini merupakan paragraf empat. Letaknya memang setelah elemen gambar dan
      memiliki induk yang sama seperti elemen gambar, sehingga elemen ini akan
      menerapkan rule dengan menampilkan teks berwarna hijau.
    </p>
  </body>
</html>
`,
  },
  'styles.css': {
    code: `\
/* Rule akan diterapkan pada elemen header yang berada tepat setelah elemen img */
img ~ p {
  color: green;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function GeneralSelector41() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default GeneralSelector41;
