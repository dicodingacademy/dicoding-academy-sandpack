import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Custom Button with Keyboard Func | JavaScript</title>
  
  <link rel="stylesheet" href="styles.css">

  <script defer src="index.js"></script>
</head>
<body>
  <p>
    <label for="temp">Letakkan cursor Anda ke kolom input, lalu tekan tombol Tab:</label>
    <input id="temp">
  </p>

  <div class="buttons">
    <button>[button] Tekan saya!</button>
    <div class="button" tabindex="0">[div] Tekan saya!</div>
  </div>

  <div id="output" class="output">
    Coba tekan kedua elemen tombol di atas menggunakan cursor dan menggunakan keyboard (gunakan tombol Tab
    dan Space/Enter untuk melakukan aksi klik).
  </div>
</body>
</html>
`,
  },
  'styles.css': {
    hidden: false,
    code: `\
:root {
  font-family: segoe UI, system-ui, -apple-system, sans-serif;
}

.buttons {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 20px;
}

.output {
  margin-block: 16px;
}

button,
div.button {
  padding: 8px 16px;
  background: none;
  border-radius: 8px;
  border: 1px solid #333;

  font-weight: bold;
  font-size: 1em;
  color: #333;

  cursor: pointer;
  user-select: none;
}
button:hover,
div.button:hover {
  background: yellow;
}
button:active,
div.button:active {
  background: greenyellow;
}
button:focus-visible,
div.button:focus-visible {
  outline: 4px dashed orange;
}
`,
  },
  'index.js': {
    hidden: false,
    code: `\
const button = document.querySelector('button');
const divButton = document.querySelector('div.button');
const output = document.querySelector('#output');

const instructions = \`
  Coba tekan tombol menggunakan cursor dan menggunakan keyboard
  (gunakan tombol Tab dan Space/Enter untuk melakukan aksi klik).
\`;

function clickHandler(event) {
  const elementType = event.currentTarget.tagName.toLowerCase();
  output.textContent = \`Kamu berhasil memicu <\${elementType}> dengan klik!\`;

  setTimeout(() => {
    output.textContent = instructions;
  }, 1000);
}

function keyUpHandler(event) {
  if (event.code === 'Enter' || event.code === 'Space') {
    output.textContent = \`Kamu berhasil memicu <div> menggunakan tombol \${event.code}!\`;

    setTimeout(() => {
      output.textContent = instructions;
    }, 1000);
  }
}

button.onclick = clickHandler;
divButton.onclick = clickHandler;
divButton.onkeyup = keyUpHandler;
`,
  },
};

export default function CustomButtonWithKeyboardFunc09() {
  return (
    <StaticWebSandpack
      files={files}
      options={{
        editorWidthPercentage: 55,
        showConsole: false,
      }}
    />
  );
}
