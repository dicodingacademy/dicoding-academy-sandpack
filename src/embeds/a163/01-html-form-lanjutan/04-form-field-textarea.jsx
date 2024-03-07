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
    <title>Form Field Textarea</title>

    <link rel="stylesheet" href="common.css" />
    <link rel="stylesheet" href="main.css" />
  </head>
  <body>
    <form>
      <div class="form-group">
        <label for="name">Nama</label>
        <input type="text" name="name" id="name" />
      </div>
      <div class="form-group">
        <label for="subject">Subjek</label>
        <input type="text" name="subject" id="subject" />
      </div>
      <div class="form-group">
        <label for="message">Pesan</label>
        <textarea name="message" id="message"></textarea>
      </div>
    </form>
  </body>
</html>
`,
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

label {
  display: inline-block;
  margin-block-end: 0.5rem;
}

input,
textarea {
  display: block;

  padding: 0.5rem 0.3rem;
  border: 1px solid black;
  border-radius: 2px;

  width: 100%;
  max-width: 300px;
}

textarea {
  font-family: Arial, Helvetica, sans-serif;
  resize: vertical;
}

label,
input,
textarea,
button {
  font-size: 1rem;

  transition: all 150ms linear;
}

.form-group {
  margin-block-end: 1rem;
}
`,
  },
};

function FormFieldTextarea04() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default FormFieldTextarea04;
