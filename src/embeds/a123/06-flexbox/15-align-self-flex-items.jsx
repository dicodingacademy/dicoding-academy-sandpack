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
    <title>Align Self Flex Items</title>

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
  height: 100px;
  display: flex;
  align-items: center;

  gap: 8px;
}

[class^=box] {
  flex-basis: 100px;
}

.box1 {
  align-self: flex-end;
}

.box3 {
  align-self: flex-start;
}
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function AlignSelfFlexItems15() {
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

export default AlignSelfFlexItems15;
