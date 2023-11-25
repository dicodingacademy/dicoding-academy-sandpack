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
    <title>Order Flex Items</title>

    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <main>
      <div class="flex">
        <div class="box box1">1</div>
        <div class="box box2">2</div>
        <div class="box box3">3</div>
        <div class="box box4">4</div>
        <div class="box box5">5</div>
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
  
  gap: 8px;
}

/* Silakan ubah nilai-nilai \`order\` berikut. */
.box1 {
  order: 1;
}

.box2 {
  order: 0;
}

.box3 {
  order: -1;
}

.box4 {
  order: 5;
}

.box5 {
  order: 4;
}
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function OrderFlexItems11() {
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

export default OrderFlexItems11;
