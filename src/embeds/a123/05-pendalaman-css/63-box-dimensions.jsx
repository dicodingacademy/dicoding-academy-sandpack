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
    <div class="box">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus officiis perspiciatis quidem
        ratione? Distinctio eos ex expedita iusto necessitatibus velit, veritatis. Aliquid, debitis
        dignissimos in iusto magnam nulla sed tempora.
      </p>
    </div>
  </body>
</html>
`,
  },
  'styles.css': {
    code: `\
.box {
  height: 300px;
  width: 300px;
  background-color: #11c5c6;
}

p {
  height: 75%;
  width: 75%;
  background-color: #fbdd1c;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function BoxDimensions63() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default BoxDimensions63;
