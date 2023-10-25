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
    <main>
      <p class="ti2em">
        Paragraf 1. Properti text-indent digunakan untuk memberikan jarak atau lekuk di awal baris
        pada paragraf. Kita dapat menentukan nilainya dengan menggunakan perhitungan panjang atau
        persentase.
      </p>
      <p class="ti2percent">
        Paragraf 2. Properti text-indent digunakan untuk memberikan jarak atau lekuk di awal baris
        pada paragraf. Kita dapat menentukan nilainya dengan menggunakan perhitungan panjang atau
        persentase.
      </p>
      <p class="timin35px">
        Paragraf 3. Properti text-indent digunakan untuk memberikan jarak atau lekuk di awal baris
        pada paragraf. Kita dapat menentukan nilainya dengan menggunakan perhitungan panjang atau
        persentase.
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

.ti2em {
  text-indent: 2em;
}

.ti2percent {
  text-indent: 25%;
}

.timin35px {
  text-indent: -35px;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function TextIndent53() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default TextIndent53;
