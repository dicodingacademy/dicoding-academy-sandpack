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
    <title>Negatif Tab Order</title>

    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="instructions">
      (click here, then press <code>TAB</code>)
    </div>

    <button tabindex="-1" id="foo">Saya tidak memiliki tab order</button>
    <button onclick="foo.focus()">Fokuskan ke tombol sebelah</button>
  </body>
</html>

`,
  },
  'styles.css': {
    hidden: false,
    code: `\
.instructions {
  margin: 8px;
}

body {
  padding: 32px;
}

button {
  background-color: transparent;
  
  border-radius: 8px;
  border: 1px solid black;
  padding: 10px 16px;
  
  font-size: 16px;
}

button:active {
  background-color: greenyellow;
}
`,
  },
  'index.js': {
    hidden: false,
    code: '',
  },
};

function NegativeTabIndex08() {
  return (
    <StaticWebSandpackPreviewOnly
      files={files}
    />
  );
}

export default NegativeTabIndex08;
