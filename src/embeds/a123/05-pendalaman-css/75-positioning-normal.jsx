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
    <h1>Lorem ipsum dolor sit amet.</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium iusto non optio vel
      voluptas? Assumenda blanditiis consequatur doloribus porro quasi similique vero voluptatibus.
      Adipisci, tenetur.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi consectetur dolore
      eligendi, esse fuga hic laboriosam nobis nostrum, nulla omnis optio pariatur repellendus
      reprehenderit saepe, sit soluta vel vero!
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut corporis deleniti
      doloremque et excepturi expedita labore libero, placeat, quaerat rerum ullam vitae voluptate.
      Accusantium et explicabo qui tenetur unde. Amet aperiam doloremque enim, expedita id illo
      minima porro quod.
    </p>
  </body>
</html>
`,
  },
  'styles.css': {
    code: `\
h1 {
  background-color: #aaaaaa;
  padding: 30px;
}

p {
  width: 450px;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function PositioningNormal75() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default PositioningNormal75;
