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
    <div class="container">
      <img
        src="https://raw.githubusercontent.com/dicodingacademy/a123-webdasar-labs/099-shared-files/shared-media/g-dicoding-logo.png"
        alt="g Dicoding Logo"
        width="200px"
      />
    </div>
  </body>
</html>
`,
  },
  'styles.css': {
    code: `\
.container {
  width: 800px;
  padding: 8px;
  border: 4px solid black;
}

img {
  float: left;
  margin: 10px;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function ProblemFloating82() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default ProblemFloating82;
