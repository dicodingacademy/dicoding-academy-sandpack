import React from 'react';
import StaticWebSandpackPreviewOnly from '../../../components/sandpacks/StaticWebSandpackPreviewOnly';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Illogical Tab Order</title>

    <link rel="stylesheet" type="text/css" href="styles.css" />
  </head>
  <body>
    <div class="instructions">
      (click here, then press <code>TAB</code>)
    </div>

    <div class="container">
      <div class="row">
        <button style="float: right">🦁️ Leo</button>
        <button style="float: left">🦂️ Scorpio</button>
        <button style="float: left">🦄️ Unicorn</button>
      </div>
      <div class="row">
        <button style="float: none">🐃️ Taurus</button>
        <button style="float: left">🐏️ Capricon</button>
        <button style="float: right">🐟️ Pisces</button>
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
  background-color: transparent;

  width: 150px;
  border-radius: 8px;
  border: 1px solid black;
  padding: 10px 15px;
  margin: 10px;

  font-family: sans-serif;
  font-size: 16px;
}

button:active {
  background-color: greenyellow;
}

button:focus-visible {
  box-shadow: 0 0 0 4px #ff0000aa;
}

.row {
  overflow: auto;
}
`,
  },
};

function IllogicalTabOrder05() {
  return (
    <StaticWebSandpackPreviewOnly
      files={files}
    />
  );
}

export default IllogicalTabOrder05;
