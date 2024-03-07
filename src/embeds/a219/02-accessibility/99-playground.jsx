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
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Illogical Tab Order</title>

    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div class="container">
      <div class="instructions">
        (click here, then press <code>TAB</code>)
      </div>
      <button style="float: right;">🥝Kiwi🥝</button>
      <button>🍑Peach🍑</button>
      <button>🥥Coconut🥥</button>
    </div>
    
    <script src="index.js"></script>
  </body>
</html>
`,
  },
  'styles.css': {
    hidden: false,
    code: `\
body {
  font-family: "Benton Sans", "Helvetica Neue", helvetica, arial, sans-serif;
  margin: 2em;
}

.container {
  display: inline-block;
}

.instructions {
  margin: 8px;
}

button {
  display: inline-block;

  border-radius: 8px;
  border: 2px solid black;
  padding: 8px;
  margin: 0 8px;

  text-transform: uppercase;
  font-size: 16px;
}

button:focus-visible {
  outline: 4px dashed darkorange;
}
`,
  },
  'index.js': {
    hidden: false,
    code: '',
  },
};

function Playground99() {
  return (
    <StaticWebSandpackPreviewOnly
      files={files}
    />
  );
}

export default Playground99;
