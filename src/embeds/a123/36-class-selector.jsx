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
    <h1 class="fancy">Heading dengan teks bergaya fancy</h1>
    <p class="fancy">Paragraf dengan teks bergaya fancy</p>
  </body>
</html>
`,
    hidden: false,
    active: true,
  },
  'style.css': {
    code: `\
.fancy {
  font-weight: bold;
  text-shadow: 4px 4px 3px #77f;
}

p.fancy {
  text-shadow: 4px 4px 3px #00c8eb;
}`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function ClassSelector36() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default ClassSelector36;