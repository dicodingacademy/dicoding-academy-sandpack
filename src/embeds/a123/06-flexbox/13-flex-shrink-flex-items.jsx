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
    <title>Flex Shrink Flex Items</title>

    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <main>
      <p>Dengan <code>flex-shrink: 1</code>:</p>
      <div class="shrink-1">
        <div class="box box1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ducimus enim ex iure laudantium libero obcaecati perferendis quibusdam similique voluptatem!</div>
      </div>
      <hr>
      <p>Dengan <code>flex-shrink: 0</code>:</p>
      <div class="shrink-0">
        <div class="box box2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci cumque deserunt dolor ex iste iusto laudantium libero quaerat vitae.</div>
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
[class^=shrink] {
  display: flex;
}

.shrink-1 .box {
  background-color: salmon;

  flex-shrink: 1;
}

.shrink-0 .box {
  background-color: lime;

  flex-shrink: 0;
}
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function FlexShrinkFlexItems13() {
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

export default FlexShrinkFlexItems13;
