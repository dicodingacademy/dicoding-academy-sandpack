import React from 'react';
import StaticWebSandpackPreviewOnly from '../../../components/sandpacks/StaticWebSandpackPreviewOnly';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=1024px">
    <title>Tab Index 1</title>

    <link rel="stylesheet" type="text/css" href="styles.css" />
  </head>
  <body>
    <div class="instructions">
      (click here, then press <code>TAB</code>)
    </div>

    <div class="container">
      <div class="row">
        <button tabindex="3" style="float: right;">🦁️ Leo</button>
        <button tabindex="1" style="float: left">🦂️Scorpio</button>
        <button tabindex="2" style="float: left">🦄️ Unicorn</button>
      </div>
      <div class="row">
        <button tabindex="5" style="float: none">🐃️ Taurus</button>
        <button tabindex="4" style="float: left">🐏️ Capricon</button>
        <button tabindex="6" style="float: right">🐟️ Pisces</button>
      </div>
    </div>
  </body>
</html>
`,
  },
  'styles.css': {
    hidden: false,
    code: `\
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.instructions {
  margin: 8px;
}

.container {
  max-width: 515px;
  width: 90%;

  margin: 30px auto;
}

button {
  width: 150px;
  background-color: transparent;

  border: 1px solid black;
  border-radius: 8px;
  padding: 10px 15px;
  margin: 10px;

  font-family: sans-serif;
  font-size: 16px;
}

button:active {
  background-color: greenyellow;
}

.row {
  overflow: auto;
}
`,
  },
  'index.js': {
    hidden: false,
    code: '',
  },
};

function TabIndex106() {
  return (
    <StaticWebSandpackPreviewOnly
      files={files}
    />
  );
}

export default TabIndex106;
