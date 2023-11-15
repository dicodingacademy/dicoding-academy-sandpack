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
    <title>Flex Basis Flex Items</title>

    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <main>
      <div class="flex">
        <div class="box box1">1</div>
        <div class="box box2">2</div>
        <div class="box box3">3</div>
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
  height: 100px;
}

.box:nth-child(odd) {
  background-color: salmon;
}

.box:nth-child(even) {
  background-color: lime;
}

.flex {
  padding: 8px;
  background-color: lightgrey;

  width: 300px;
  display: flex;
  
  gap: 8px;
}

.box1 {
  flex-basis: 50px;
}

.box2 {
  flex-basis: 150px;
}

.box3 {
  flex-basis: 100px;
}
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function FlexBasisFlexItems14() {
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

export default FlexBasisFlexItems14;
