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
    <div class="container">
      <img
        src="https://raw.githubusercontent.com/dicodingacademy/a123-webdasar-labs/099-shared-files/shared-media/g-dicoding-logo.png"
        alt="g Dicoding Logo"
        width="200px"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci architecto
        aspernatur dolorem doloremque eum excepturi fuga hic, molestias obcaecati officia
        perferendis perspiciatis qui saepe ut velit veniam vitae voluptatum.
      </p>
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
    hidden: true,
    code: '',
  },
};

function ProblemFloating83() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default ProblemFloating83;
