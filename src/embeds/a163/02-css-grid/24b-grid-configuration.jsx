import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Grid Configuration</title>

    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <main>
      <div class="container">
        <div style="background-color: lightsalmon" class="box1"></div>
        <div style="background-color: lightblue" class="box2"></div>
        <div style="background-color: lightgreen" class="box3"></div>
      </div>
    </main>
  </body>
</html>
`,
  },
  'styles.css': {
    active: true,
    code: `\
.container {
  display: grid;
  grid-template-columns: 5em auto 100px;
  grid-template-rows: 100px 100px;
}
`,
  },
};

function GridConfiguration24B() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default GridConfiguration24B;
