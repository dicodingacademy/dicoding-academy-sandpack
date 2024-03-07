import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    hidden: false,
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Align Content Flex Container</title>

    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <main>
      <div class="flex">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
        <div class="box">5</div>
        <div class="box">6</div>
        <div class="box">7</div>
        <div class="box">8</div>
      </div>
    </main>
  </body>
</html>
`,
  },
  'styles.css': {
    hidden: false,
    active: true,
    code: `\
.box {
  width: 100px;
  /*height: 100px;*/
}

.box:nth-child(odd) {
  background-color: salmon;
}

.box:nth-child(even) {
  background-color: lime;
}

.flex {
  background-color: lightgrey;
  height: 50vh;
  display: flex;
  
  /* Align content hanya bekerja saat membentuk multi-lines*/
  flex-wrap: wrap;
  
  /* Silakan coba seluruh nilainya */
  align-content: flex-start;
  /*align-content: flex-end;*/
  /*align-content: center;*/
  /*align-content: space-between;*/
  /*align-content: space-around;*/
  /*align-content: space-evenly;*/
}
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function AlignContentFlexContainer09() {
  return (
    <StaticWebSandpack
      files={files}
      options={{
        showConsoleButton: false,
        editorWidthPercentage: 55,
      }}
    />
  );
}

export default AlignContentFlexContainer09;
