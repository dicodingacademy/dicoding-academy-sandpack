import React from 'react';
import VanillaSandpack from '../../../components/sandpacks/VanillaSandpack';

const files = {
  'package.json': {
    hidden: true,
    readOnly: true,
    code: `\
{
  "main": "/main.js",
  "dependencies": {},
  "devDependencies": {}
}
`,
  },
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<!DOCTYPE html>
<html lang="id">
  <head>
    <title>Prevent Default JavaScript</title>

    <link rel="stylesheet" href="common.css" />
    <link rel="stylesheet" href="main.css" />
  </head>
  <body>
    <main>
      <div class="wrapper">
        <form>
          <div class="form-group">
            <label for="name">Nama</label>
            <input type="text" name="name" id="name" required />
          </div>
          <div class="form-group">
            <input
              type="checkbox"
              name="isMarried"
              id="isMarried"
              data-controls="additionalForm"
            />
            <label for="isMarried">Sudah berkeluarga?</label>
          </div>

          <fieldset class="additional-form-group" id="additionalForm">
            <legend>Data Keluarga</legend>
            <div class="form-group">
              <label for="wifeName">Apa nama istri Anda?</label>
              <input type="text" id="wifeName" name="wifeName" />
            </div>
            <div class="form-group">
              <label for="childCount">Berapa orang anak?</label>
              <input type="number" id="childCount" name="childCount" />
            </div>
          </fieldset>

          <div class="form-group">
            <button class="btn">Kirim</button>
          </div>
        </form>
      </div>
    </main>

    <script src="main.js"></script>
  </body>
</html>
`,
  },
  'styles.css': {
    hidden: true,
    readOnly: true,
    code: '',
  },
  'main.css': {
    hidden: false,
    code: `\
/* Silakan buat styling milik Anda sendiri untuk bereksplorasi */
`,
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

fieldset {
  margin-inline: 0;
  margin-block-end: 1rem;
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

input[type='radio'],
input[type='checkbox'] {
  display: inline-block;

  width: auto;
}

input[type='radio'] ~ label,
input[type='checkbox'] ~ label {
  margin-block-end: 0;
}

.form-group,
.additional-form-group {
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
  'index.js': {
    hidden: true,
    readOnly: true,
    code: '',
  },
  'main.js': {
    hidden: false,
    code: `\
const form = document.querySelector('form');
const additionalForm = form.elements.additionalForm;
const isMarried = form.elements.isMarried;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameInput = event.target.elements.name;
  const wifeNameInput = event.target.elements.wifeName;
  const childCountInput = event.target.elements.childCount;

  let additionalInformation;

  if (isMarried.checked) {
    additionalInformation = \`Saya memiliki istri bernama \${wifeNameInput.value} dan anak berjumlah \${childCountInput.value}\`;
  } else {
    additionalInformation = 'Saya belum berkeluarga';
  }

  console.log(\`Nama saya \${nameInput.value}. \${additionalInformation}\`);
});

if (additionalForm) {
  additionalForm.hidden = true;
}

if (isMarried) {
  isMarried.setAttribute('aria-expanded', false);
  isMarried.setAttribute('aria-controls', isMarried.dataset.controls);

  isMarried.addEventListener('click', (event) => {
    let isChecked = event.target.checked;

    if (isChecked) {
      event.target.setAttribute('aria-expanded', true);
      additionalForm.hidden = false;
    } else {
      event.target.setAttribute('aria-expanded', false);
      additionalForm.hidden = true;
    }
  });
}
`,
  },
};

function JavaScriptConditionalFormWithPreventDefault34() {
  return (
    <VanillaSandpack
      files={files}
      options={{
        showConsole: true,
        editorWidthPercentage: 60,
      }}
    />
  );
}

export default JavaScriptConditionalFormWithPreventDefault34;
