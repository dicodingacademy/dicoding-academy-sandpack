import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html lang="id">
  <head>
    <title>Extra Validation | Best Practice</title>

    <link rel="stylesheet" href="common.css" />
    <link rel="stylesheet" href="main.css" />
  </head>
  <body>
    <main>
      <form>
        <div class="form-group">
          <label for="name">Nama (wajib)</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minlength="2"
            aria-describedby="nameValidation"
          />
          <p id="nameValidation" class="validation-message">Minimal 2 karakter.</p>
        </div>

        <div class="form-group">
          <button class="btn">Kirim</button>
        </div>
      </form>
    </main>
  </body>
</html>
`,
  },
  'main.css': {
    hidden: false,
    code: `\
.validation-message {
  user-select: none;
}
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

button:focus-visible,
input:focus-visible {
  outline: none;

  box-shadow: 0 0 0 4px rgb(30, 144, 255, 0.5);
}

label,
input,
button {
  font-size: 1rem;

  transition: all 150ms linear;
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
};

function BestPracticeExtraValidationInformation37() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default BestPracticeExtraValidationInformation37;
