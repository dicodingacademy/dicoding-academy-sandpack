import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html lang="id">
  <head>
    <title>Get Value JavaScript</title>

    <link rel="stylesheet" href="common.css" />
    <link rel="stylesheet" href="main.css" />
  </head>
    <body>
    <main>
      <form>
        <div class="form-group">
          <label for="name">Nama</label>
          <input type="text" name="name" id="name" value="Nur Rizki Adi" required />
        </div>

        <div class="form-group">
          <button class="btn" data-key="value">value</button>
          <button class="btn" data-key="getAttribute">getAttribute</button>
        </div>
      </form>

      <div>
        <p><b>Hasil:</b> <span id="output"></span></p>
      </div>
    </main>

    <script src="main.js"></script>
  </body>
</html>
`,
  },
  'main.css': {
    hidden: false,
    code: '',
  },
  'common.css': {
    hidden: false,
    code: `\
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

label {
  display: inline-block;
  margin-block-end: 0.5rem;
}

input {
  display: block;

  padding: 0.5rem 0.3rem;
  border: 1px solid black;
  border-radius: 2px;

  width: 100%;
  max-width: 300px;
}

button {
  appearance: none;
  -webkit-appearance: none;

  margin: 0;
  padding: 0;
  border: none;

  display: inline-block;
  background: transparent;

  line-height: 1;

  cursor: pointer;
}

label,
input,
button {
  font-size: 1rem;

  transition: all 150ms linear;
}

button:focus-visible,
input:focus-visible {
  outline: none;

  box-shadow: 0 0 0 4px rgb(30, 144, 255, 0.5);
}

.form-group {
  margin-block-end: 1rem;
}

.btn {
  background-color: rgb(55, 64, 255);

  border-radius: 0.3rem;
  padding: 0.8rem 1.5rem;
  border: 1px solid #333;

  color: beige;
}

.btn:hover {
  background-color: rgb(45, 124, 255);
}

.btn:active {
  background-color: rgb(45, 64, 200);
}
`,
  },
  'main.js': {
    hidden: false,
    code: `\
const form = document.querySelector('form');
const nameInput = form.elements.name;
const output = document.querySelector('span#output');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (event.submitter.dataset.key === 'value') {
    output.textContent = nameInput.value;
  } else if (event.submitter.dataset.key === 'getAttribute') {
    output.textContent = nameInput.getAttribute('value');
  }
});
`,
  },
};

function JavaScriptGetValue32() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default JavaScriptGetValue32;
