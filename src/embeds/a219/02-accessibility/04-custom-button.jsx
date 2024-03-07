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
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Custom Button</title>
    
    <link rel="stylesheet" type="text/css" href="styles.css" />
  </head>
  <body>
    <div class="instructions">
      (click here, then press <code>TAB</code>)
    </div>

    <button>[button] Tekan saya!</button>
    <div class="button" tabindex="0">[div] Tekan saya!</div>
    <p>
      Coba tekan tombol menggunakan kursor dan menggunakan fokus (gunakan tab key,
      kemudian space atau enter untuk menekan)
    </p>

    <script src="index.js"></script>
  </body>
</html>
`,
  },
  'styles.css': {
    hidden: false,
    code: `\
* {
  box-sizing: border-box;
}

.instructions {
  margin: 8px;
}

button,
div.button {
  display: inline;
  background-color: transparent;
  border-radius: 8px;
  border: 2px solid black;
  padding: 8px 16px;

  font-family: sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: black;

  cursor: pointer;
  user-select: none;
}

button:hover {
  background: yellow;
}

button:active {
  background: greenyellow;
}

div.button:hover {
  background: yellow;
}

div.button:active {
  background: greenyellow;
}

button:focus-visible,
div.button:focus-visible {
  border: 4px dashed orange;
}
`,
  },
  'index.js': {
    hidden: false,
    code: `\
const nativeButton = document.querySelector('button');
const customButton = document.querySelector('.button');
const content = document.querySelector('p');

const clickHandler = () => {
  content.innerText = 'Berhasil menekan tombol!';

  setTimeout(() => {
    content.innerText = 'Coba tekan tombol menggunakan kursor dan focus (gunakan tombol Tab lalu tekan Space atau Enter untuk menekan)';
  }, 1000);
};

nativeButton.addEventListener('click', clickHandler);
customButton.addEventListener('click', clickHandler);
`,
  },
};

function CustomButton04() {
  return (
    <StaticWebSandpackPreviewOnly
      files={files}
    />
  );
}

export default CustomButton04;
