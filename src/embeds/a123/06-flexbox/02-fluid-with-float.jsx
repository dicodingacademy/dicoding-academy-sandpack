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
    <title>Fluid With Float</title>

    <link rel="stylesheet" href="styles.css">
  </head>
  <body style="margin: 0; font-size: 1.2rem">
    <div id="app">
      <aside>Aside Content</aside>
      <main>Main Content</main>
      <div class="toc">Table of Content</div>
    </div>
    <footer>Footer Content</footer>
  </body>
</html>
`,
  },
  'styles.css': {
    hidden: false,
    active: true,
    code: `\
#app {
  border: 2px solid red;
}

#app > * {
  height: 300px;
}

aside {
  background-color: lightcoral;

  float: left;
  width: 33%;
}

main {
  background-color: lightgreen;

  float: left;
  width: 33%;
}

.toc {
  background-color: lightskyblue;

  float: right;
  width: 34%; /* penyebab ukuran tidak rata seperti child element lain */
}
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function FluidWithFloat02() {
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

export default FluidWithFloat02;
