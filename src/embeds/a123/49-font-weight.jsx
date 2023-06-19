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
    <p>
      <span class="normal">normal</span> | <span class="bold">bold</span> |
      <span class="bolder">bolder</span> | <span class="lighter">lighter</span> |
      <span class="fw100">fw100</span> | <span class="fw200">fw200</span> |
      <span class="fw300">fw300</span> | <span class="fw400">fw400</span> |
      <span class="fw500">fw500</span> | <span class="fw600">fw600</span> |
      <span class="fw700">fw700</span> | <span class="fw800">fw800</span> |
      <span class="fw900">fw900</span>
    </p>
  </body>
</html>
`,
    hidden: false,
    active: true,
  },
  'style.css': {
    code: `\
.normal {
  font-weight: normal;
}

.bold {
  font-weight: bold;
}

.bolder {
  font-weight: bolder;
}

.lighter {
  font-weight: lighter;
}

.fw100 {
  font-weight: 100;
}

.fw200 {
  font-weight: 200;
}

.fw300 {
  font-weight: 300;
}

.fw400 {
  font-weight: 400;
}

.fw500 {
  font-weight: 500;
}

.fw600 {
  font-weight: 600;
}

.fw700 {
  font-weight: 700;
}

.fw800 {
  font-weight: 800;
}

.fw900 {
  font-weight: 900;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function FontWeight49() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default FontWeight49;
