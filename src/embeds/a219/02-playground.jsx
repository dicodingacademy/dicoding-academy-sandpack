import React from 'react';
import StaticWebSandpackPreviewOnly from '../../components/sandpacks/StaticWebSandpackPreviewOnly';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<!-- Copyright 2018 Google LLC.
SPDX-License-Identifier: Apache-2.0 -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello!</title>

    <link rel="stylesheet" href="styles.css">
  </head>  
  <body>
    <div class="container">
      <div class="instructions">
        Logical tab order (click here before pressing tab)
      </div>
      <button>🥝 Kiwi 🥝</button>
      <button>🍑 Peach 🍑</button>
      <button>🥥 Coconut 🥥</button>
    </div>
  </body>
</html>
`,
  },
  'styles.css': {
    hidden: false,
    code: `\
/* Copyright 2018 Google LLC.
SPDX-License-Identifier: Apache-2.0 */

/* CSS files add styling rules to your content */

body {
  font-family: "Benton Sans", "Helvetica Neue", helvetica, arial, sans-serif;
  margin: 2em;
}

.container {
  display: inline-block;
}

.instructions {
  text-align: center;
  margin-bottom: 16px;
}

button {
  display: inline-block;
  font-size: 16px;
  border: 2px solid black;
  border-radius: 8px;
  padding: 8px;
  margin: 0 8px;
  text-transform: uppercase;
}
`,
  },
  'index.js': {
    hidden: false,
    code: `\
function func1(event) {
  alert('DIV 1');
  if (document.getElementById('check').checked) {
    event.stopPropagation();
  }
}

function func2() {
  alert('DIV 2');
}
`,
  },
};

function Playground02() {
  return (
    <StaticWebSandpackPreviewOnly
      template="static"
      files={{ ...files }}
    />
  );
}

export default Playground02;
