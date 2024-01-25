import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <title>Judul Dokumen</title>
    
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <p>
      Ini merupakan paragraf biasa atau tidak menerapkan atribut apapun. Maka
      teks pada paragraf ini akan berwarna hijau
    </p>
    <p lang="en-us">
      This is an English paragraph contains en-us value of lang attribute, so
      this text will be green and italic.
    </p>

    <h1>Ini merupakan sebuah header biasa</h1>
    <h1 lang="en-us">This is an English Header</h1>

    <p class="warning">
      Perhatikan paragraf ini! Paragraf ini merupakan paragraf yang memiliki
      kelas bernilai warning, sehingga teks dari paragraf ini akan berwarna
      merah
    </p>

    <div id="content">
      <p>
        Ini merupakan sebuah teks di dalam sebuah div yang memiliki id bernilai
        "content", seharusnya paragraf ini dibungkus dalam border yang memiliki
        padding 20px
      </p>
    </div>
  </body>
</html>
`,
  },
  'styles.css': {
    code: `\
/* Menargetkan seluruh tipe elemen */
* {
  color: green;
}

/* Menargetkan seluruh tipe elemen yang mengandung nilai "en" pada atribut lang */
*[lang^='en'] {
  font-style: italic;
}

/* Menargetkan seluruh tipe elemen yang memiliki nilai "warning" pada atribut class */
*.warning {
  color: red;
}

/* Menargetkan seluruh tipe elemen yang memiliki nilai "content" pada atribut id */
*#content {
  border: 1px solid blue;
  padding: 20px;
}
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function UniversalSelector39() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default UniversalSelector39;
