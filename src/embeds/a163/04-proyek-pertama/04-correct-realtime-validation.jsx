import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>Custom Validation With Realtime</title>
    
    <style>
      .validation-message {
        color: red;
      }

      input:user-invalid {
        border: 1px solid red;
      }
    </style>

    <script type="module" src="index.js"></script>
  </head>
  <body>
    <form autocomplete="off">
      <div class="form-group">
        <label for="username">Username</label>
        <br>
        <input
          id="username"
          required
          minlength="6"
          pattern="^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$"
          aria-describedby="usernameValidation"
        />
        <p id="usernameValidation" class="validation-message" aria-live="polite"></p>
      </div>

      <div class="form-group">
        <button id="submit" class="btn">Kirim</button>
      </div>
    </form>
  </body>
</html>
`,
  },
  'index.js': {
    hidden: false,
    code: `\
import { customValidationUsernameHandler } from './form-custom-validation.js';

const form = document.querySelector('form');
const usernameInput = form.elements['username'];

form.addEventListener('submit', (event) => {
  event.preventDefault();
});

usernameInput.addEventListener('change', customValidationUsernameHandler);
usernameInput.addEventListener('invalid', customValidationUsernameHandler);

usernameInput.addEventListener('blur', (event) => {
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
`,
  },
  'form-custom-validation.js': {
    hidden: false,
    code: `\
export const customValidationUsernameHandler = (event) => {
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
      'Tidak boleh diawali dengan simbol,\\
      mengandung white space atau spasi, dan\\
      mengandung karakter spesial seperti dolar ($).',
    );
    return;
  }
};
`,
  },
};

function CorrectRealtimeValidation04() {
  return (
    <StaticWebSandpack
      files={files}
      options={{
        editorWidthPercentage: 55,
      }}
    />
  );
}

export default CorrectRealtimeValidation04;
