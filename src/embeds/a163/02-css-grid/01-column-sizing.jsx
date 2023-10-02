import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Column Sizing</title>

    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <main>
      <div class="container">
        <div style="background-color: lightsalmon" class="box1"></div>
        <div style="background-color: lightblue" class="box2"></div>
        <div style="background-color: lightgreen" class="box3"></div>
        <div style="background-color: lightpink" class="box4"></div>
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
  grid-template-columns: 5em 100px 30%;

  gap: 10px;
}

[class^='box'] {
  height: 150px;
}
`,
  },
};

function ColumnSizing01() {
  return (
    <StaticWebSandpack
      files={files}
      options={{
        editorWidthPercentage: 55,
      }}
    />
  );
}

export default ColumnSizing01;
