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
    <header>
      <div class="jumbotron">
        <h1>Bandung</h1>
        <p>
          Kota metropolitan terbesar di Provinsi Jawa Barat, sekaligus menjadi ibu kota provinsi
          tersebut.
        </p>
      </div>

      <nav>
        <ul>
          <li><a href="#">Sejarah</a></li>
          <li><a href="#">Geografis</a></li>
          <li><a href="#">Wisata</a></li>
        </ul>
      </nav>
    </header>
  </body>
</html>
`,
  },
  'styles.css': {
    code: `\
body {
  font-family: sans-serif;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function FontFamily47() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default FontFamily47;
