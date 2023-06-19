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
    <main>
      <h2>Lorem Ipsum</h2>
      <h3>Dolor sit amet lorem ipsum</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus officiis perspiciatis quidem
        ratione? Distinctio eos ex expedita iusto necessitatibus velit, veritatis. Aliquid, debitis
        dignissimos in iusto magnam nulla sed tempora.
      </p>
    </main>
  </body>
</html>
`,
    hidden: false,
    active: true,
  },
  'style.css': {
    code: `\
body {
  font-family: sans-serif;
}

main {
  background-color: rgb(235, 255, 213);
  padding: 20px 15px;
}

main > h2 {
  background-color: #4c5450;
  padding: 15px;
  color: white;
}

main > h3 {
  background-color: #60d0a8;
  padding: 15px;
  color: white;
}

main > p {
  background-color: hsl(56, 62%, 85%);
  padding: 20px;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function BackgroundColor60() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default BackgroundColor60;
