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
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae commodi
      dignissimos eaque fugiat inventore maiores neque nisi sint.
    </p>
    <p class="example">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda blanditiis cum
      dignissimos enim esse excepturi illum inventore maiores minima, nemo nisi obcaecati officia
      pariatur qui quibusdam sed. Ab, dolorum?
    </p>
  </body>
</html>
`,
    hidden: false,
    active: true,
  },
  'style.css': {
    code: `\
p {
  border: 4px solid #00a2c6;
  width: 350px;
}

p.example {
  padding: 10px;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function BoxModelPadding70() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default BoxModelPadding70;
