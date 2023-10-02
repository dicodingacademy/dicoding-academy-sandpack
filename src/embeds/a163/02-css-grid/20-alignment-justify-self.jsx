import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Alignment Justify Self</title>

    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <main>
      <div class="container">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box box3 justify-self">3</div>
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

.box {
  width: 50px;
  height: 50px;

  background: rgba(255, 213, 70, 0.4);
  border: 2px dashed rgba(236, 198, 48, 0.5);

  text-align: center;
  line-height: 50px;
}

.box.box3 {
  width: auto;
}

.box.box3.justify-self {
  justify-self: start;
  /* justify-self: end; */
  /* justify-self: center; */
  /* justify-self: stretch; */
}
`,
  },
};

function AlignmentJustifySelf20() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default AlignmentJustifySelf20;
