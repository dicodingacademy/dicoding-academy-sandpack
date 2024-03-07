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
      <p class="one">Bandung, Kota metropolitan terbesar di Provinsi Jawa Barat.</p>

      <p class="two">Bandung, Kota metropolitan terbesar di Provinsi Jawa Barat.</p>

      <p class="three">Bandung, Kota metropolitan terbesar di Provinsi Jawa Barat.</p>

      <p class="four">Bandung, Kota metropolitan terbesar di Provinsi Jawa Barat.</p>
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

p {
  font-size: 2rem;
}

.one {
  text-shadow: 2px 2px 0px #000000;
  background-color: #eeeeee;
  color: #666666;
}

.two {
  text-shadow: 4px 4px 3px #666666;
  background-color: #dddddd;
  color: #666666;
}

.three {
  text-shadow: 4px 4px 7px #111111;
  background-color: #cccccc;
  color: #ffffff;
}

.four {
  text-shadow: -2px -2px #666666;
  background-color: #cccccc;
  color: #bbbbbb;
}
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function TextShadow58() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default TextShadow58;
