import React from 'react';
import StaticWebSandpack from '../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Judul Dokumen</title>
    
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <main>
      <p>
        <a href="#">Teks pada elemen anchor biasa</a>
      </p>

      <p>
        <a href="#" class="decoration-none">
          Teks pada elemen anchor biasa yang menerapkan text-decoration: none
        </a>
      </p>
    </main>
  </body>
</html>
`,
    hidden: false,
    active: true,
  },
  'style.css': {
    code: `\
.decoration-none {
  text-decoration: none;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function TextDecoration55() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default TextDecoration55;
