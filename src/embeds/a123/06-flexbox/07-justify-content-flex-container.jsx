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
    <title>Justify Content Flex Container</title>

    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <main>
      <div class="flex">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
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
  height: 100px;
}

.box:nth-child(odd) {
  background-color: salmon;
}

.box:nth-child(even) {
  background-color: lime;
}

.flex {
  display: flex;
  
  /* Silakan coba seluruh nilainya */
  justify-content: flex-start;
  /*justify-content: flex-end;*/
  /*justify-content: center;*/
  /*justify-content: space-between;*/
  /*justify-content: space-around;*/
  /*justify-content: space-evenly;*/
}
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function JustifyContentFlexContainer07() {
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

export default JustifyContentFlexContainer07;
