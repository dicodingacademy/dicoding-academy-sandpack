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
      <p class="transform-none">Text transform digunakan untuk mengatur kapitalisasi pada teks.</p>

      <p class="transform-capitalize">
        Text transform digunakan untuk mengatur kapitalisasi pada teks.
      </p>

      <p class="transform-lowercase">
        Text transform digunakan untuk mengatur kapitalisasi pada teks.
      </p>

      <p class="transform-uppercase">
        Text transform digunakan untuk mengatur kapitalisasi pada teks.
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
main {
  font-family: sans-serif;
}

.transform-none {
  text-transform: none;
}

.transform-capitalize {
  text-transform: capitalize;
}

.transform-lowercase {
  text-transform: lowercase;
}

.transform-uppercase {
  text-transform: uppercase;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function TextTransform66() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default TextTransform66;