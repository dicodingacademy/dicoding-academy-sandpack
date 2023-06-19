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
      <div class="clear"></div>
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
  border: 4px solid black;
}

img {
  float: left;
  margin: 10px;
}

.clear {
  clear: left;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function ClearProperty84() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default ClearProperty84;
