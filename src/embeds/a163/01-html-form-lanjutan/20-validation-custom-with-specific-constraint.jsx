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
    <title>Custom Validation With Specific Constraint</title>

    <link rel="stylesheet" href="common.css" />
    <link rel="stylesheet" href="main.css" />
  </head>
  <body>
    <form>
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          pattern="^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$"
          minlength="6"
          autocomplete="off"
        />
      </div>

      <div class="form-group">
        <button class="btn">Kirim</button>
      </div>
    </form>

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
const usernameInput = form.elements.username;

form.addEventListener('submit', (event) => event.preventDefault());

const customValidationUsernameHandler = (event) => {
  event.target.setCustomValidity('');

  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity('Wajib diisi.');
    return;
  }

  if (event.target.validity.tooShort) {
    event.target.setCustomValidity('Minimal panjang adalah enam karakter.');
    return;
  }

  if (event.target.validity.patternMismatch) {
    event.target.setCustomValidity(
      'Tidak boleh diawali dengan simbol, mengandung white space atau spasi, dan mengandung karakter spesial seperti dolar ($).',
    );
    return;
  }
};

usernameInput.addEventListener('change', customValidationUsernameHandler);
usernameInput.addEventListener('invalid', customValidationUsernameHandler);
`,
  },
};

function ValidationCustomWithSpecificConstraint20() {
  return (
    <StaticWebSandpack
      files={files}
      options={{
        editorWidthPercentage: 55,
      }}
    />
  );
}

export default ValidationCustomWithSpecificConstraint20;
