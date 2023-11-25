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
    <div class="parent">
      <h1 class="absolute">Lorem ipsum dolor sit amet.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium iusto non optio vel
        voluptas? Assumenda blanditiis consequatur doloribus porro quasi similique vero
        voluptatibus. Adipisci, tenetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi consectetur
        dolore eligendi, esse fuga hic laboriosam nobis nostrum, nulla omnis optio pariatur
        repellendus reprehenderit saepe, sit soluta vel vero!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut corporis deleniti
        doloremque et excepturi expedita labore libero, placeat, quaerat rerum ullam vitae
        voluptate. Accusantium et explicabo qui tenetur unde. Amet aperiam doloremque enim, expedita
        id illo minima porro quod.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid asperiores
        blanditiis cumque eos ex expedita facilis laborum maiores necessitatibus neque, officiis
        pariatur porro temporibus unde veritatis vitae? Beatae dolores error ex fugiat molestias
        neque placeat quod ratione repellat veritatis! A culpa cumque, delectus distinctio ducimus
        earum et ex quas quia quis tempore temporibus veritatis voluptates. Delectus doloremque
        mollitia nobis?
      </p>
    </div>
  </body>
</html>
`,
  },
  'styles.css': {
    code: `\
.parent {
  width: 500px;
  margin: 0 auto;
  border: 4px solid black;
  padding: 20px;
}

h1 {
  width: 250px;
}
.absolute {
  position: absolute;
  top: 0;
  left: 50px;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function PositioningAbsolute86() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default PositioningAbsolute86;
