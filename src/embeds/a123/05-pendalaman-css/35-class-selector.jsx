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
    <p class="red">Paragraf dengan teks berwarna merah</p>
    <p class="skyblue-bg">Paragraf dengan background berwarna biru langit</p>
    <p class="fancy">Paragraf dengan gaya fancy</p>
    <p>
      Paragraf yang menampilkan teks dengan warna standar tanpa menerapkan
      styling
    </p>
  </body>
</html>
`,
  },
  'styles.css': {
    code: `\
.red {
  color: red;
}

.skyblue-bg {
  background-color: skyblue;
}

.fancy {
  font-weight: bold;
  text-shadow: 4px 4px 3px #77f;
}`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function ClassSelector35() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default ClassSelector35;
