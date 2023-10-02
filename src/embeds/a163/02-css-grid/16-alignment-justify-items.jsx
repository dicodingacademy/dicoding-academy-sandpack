import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Alignment Justify Items</title>

    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <main>
      <div class="container justify-items">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
        <div class="box">5</div>
        <div class="box">6</div>
      </div>
    </main>
  </body>
</html>
`,
  },
  'styles.css': {
    active: true,
    code: `\
* {
  box-sizing: border-box;
}

.container {
  margin-inline: auto;

  width: 400px;
  height: 200px;

  background: rgba(114, 186, 94, 0.05);
  border: 2px dashed rgba(114, 186, 94, 0.35);

  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: auto;
}

.container.justify-items {
  justify-items: start;
  /* justify-items: end; */
  /* justify-items: center; */
  /* justify-items: stretch; */
}

.box {
  /* width: 50px; */
  height: 50px;

  background: rgba(255, 213, 70, 0.4);
  border: 2px dashed rgba(236, 198, 48, 0.5);

  text-align: center;
  line-height: 50px;
}
`,
  },
};

function AlignmentJustifyItems16() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default AlignmentJustifyItems16;
