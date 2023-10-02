import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Column Writing Mode Direction</title>


    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <main>
      <div class="container writing-mode">
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
  grid-template-columns:
    [kiri] 5em
    [tengah1] 100px
    [tengah2] 30%
    [kanan];

  gap: 10px;
}

.container.writing-mode {
  writing-mode: horizontal-tb;
  
  /* Silakan ubah nilai menjadi \`ltr\` */
  direction: rtl;
}

[class^='box'] {
  height: 150px;
}
`,
  },
};

function ColumnWritingModeDirection03() {
  return (
    <StaticWebSandpack
      files={files}
      options={{
        editorWidthPercentage: 55,
      }}
    />
  );
}

export default ColumnWritingModeDirection03;
