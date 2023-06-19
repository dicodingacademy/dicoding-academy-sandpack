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
    <div class="container">
      <img src="https://i.imgur.com/cs2BJzw.jpg" width="200px" alt="dicoding" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci architecto
        aspernatur dolorem doloremque eum excepturi fuga hic, molestias obcaecati officia
        perferendis perspiciatis qui saepe ut velit veniam vitae voluptatum.
      </p>
    </div>
  </body>
</html>
`,
    hidden: false,
    active: true,
  },
  'style.css': {
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

function ProblemFloating83() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default ProblemFloating83;
