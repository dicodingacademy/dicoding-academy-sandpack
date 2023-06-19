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
    <h3 class="fixed">Lorem ipsum dolor sit amet.</h3>
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
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid asperiores
      blanditiis cumque eos ex expedita facilis laborum maiores necessitatibus neque, officiis
      pariatur porro temporibus unde veritatis vitae? Beatae dolores error ex fugiat molestias neque
      placeat quod ratione repellat veritatis! A culpa cumque, delectus distinctio ducimus earum et
      ex quas quia quis tempore temporibus veritatis voluptates. Delectus doloremque mollitia nobis?
    </p>
  </body>
</html>
`,
    hidden: false,
    active: true,
  },
  'style.css': {
    code: `\
h3 {
  padding: 10px;
  background-color: #aaaaaa;
  margin: 0;
  width: 100%;
}

.fixed {
  position: fixed;
  top: 0;
  left: 0;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function PositioningFixed78() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default PositioningFixed78;
