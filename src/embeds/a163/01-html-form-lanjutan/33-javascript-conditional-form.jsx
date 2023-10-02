import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<!DOCTYPE html>
<html lang="id">
  <head>
    <title>Conditional Form JavaScript</title>

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

input[type='radio'],
input[type='checkbox'] {
  display: inline-block;

  width: auto;
}

input[type='radio'] ~ label,
input[type='checkbox'] ~ label {
  margin-block-end: 0;
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
  'main.js': {
    hidden: false,
    code: `\
const form = document.querySelector('form');
const additionalForm = form.elements.additionalForm;
const isMarried = form.elements.isMarried;

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

function JavaScriptConditionalForm33() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default JavaScriptConditionalForm33;
