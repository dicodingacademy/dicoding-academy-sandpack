import React from 'react';
import StaticWebSandpack from '../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Validation</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <form>
      <div class="form-group">
        <label for="name">Nama</label>
        <input
          type="email"
          name="name"
          autocomplete="off"
          required
          minlength="2"
          aria-describedby="name-validation"
        />
        <p id="name-validation" class="validation-message" aria-live="polite"></p>
      </div>

      <div class="form-group">
        <button class="btn">Kirim</button>
      </div>
    </form>

    <script>
      const form = document.querySelector('form');
      const nameInput = form.elements.name;

      const customValidationNameHandler = (event) => {
        if (event.target.validity.valueMissing) {
          event.target.setCustomValidity('Mohon isi nama Anda.');
          return;
        }

        if (event.target.validity.tooShort) {
          event.target.setCustomValidity(
            'Nama harus memiliki minimal panjang dua karakter.',
          );
          return;
        }

        if (!event.target.validity.valid) {
          event.target.setCustomValidity('');
        }
      };

      nameInput.addEventListener('invalid', customValidationNameHandler);
      nameInput.addEventListener('change', customValidationNameHandler);

      nameInput.addEventListener('blur', (event) => {
        // Validate the field
        const isValid = event.target.validity.valid;
        const errorMessage = event.target.validationMessage;

        const connectedValidationId = event.target.getAttribute('aria-describedby');
        const connectedValidationEl = connectedValidationId
          ? document.getElementById(connectedValidationId)
          : null;

        if (connectedValidationEl && errorMessage && !isValid) {
          connectedValidationEl.innerText = errorMessage;
        } else {
          connectedValidationEl.innerText = '';
        }
      });
    </script>
  </body>
</html>
`,
  },
  'style.css': {
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

.validation-message {
  margin-block-start: 0.5rem;
  color: red;
}
`,
  },
};
function ValidationCustomC19() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default ValidationCustomC19;
