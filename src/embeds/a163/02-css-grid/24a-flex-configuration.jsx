import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Flexbox Configuration</title>

    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <main>
      <div class="container">
        <div style="background-color: lightsalmon" class="box1"></div>
        <div style="background-color: lightblue" class="box2"></div>
        <div style="background-color: lightgreen" class="box3"></div>
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
  display: flex;
}

.container > div {
  height: 150px;
}

.container > div:nth-child(1) {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 5em;
}

.container > div:nth-child(2) {
  flex-grow: 1;
}

.container > div:nth-child(3) {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 100px;
}
`,
  },
};

function FlexConfiguration24A() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default FlexConfiguration24A;
