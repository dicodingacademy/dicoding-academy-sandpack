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
    <title>Form Field Check Select</title>

    <link rel="stylesheet" href="common.css" />
    <link rel="stylesheet" href="main.css" />
  </head>
  <body>
    <form>
      <fieldset>
        <legend>Jenis Kelamin</legend>
        <div class="form-group">
          <input type="radio" name="gender" value="man" id="gender_man" required />
          <label for="gender_man">Laki-laki</label>
        </div>
        <div class="form-group">
          <input type="radio" name="gender" value="woman" id="gender_woman" required />
          <label for="gender_woman">Perempuan</label>
        </div>
      </fieldset>

      <div class="form-group">
        <label for="hobbies">Hobi</label>
        <select name="hobbies" id="hobbies" required>
          <option value="" disabled selected>Pilih salah satu</option>
          <option value="sport">Olahraga</option>
          <option value="reading_book">Membaca buku</option>
          <option value="traveling">Bepergian</option>
          <option value="culinary">Kulineran</option>
          <option value="gardening">Berkebun</option>
          <option value="bicycling">Bersepeda</option>
          <option value="photography">Fotografi</option>
          <option value="cooking">Memasak</option>
        </select>
      </div>

      <div class="form-group">
        <button class="btn">Kirim</button>
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

fieldset {
  margin-inline: 0;
  margin-block-end: 1rem;
}

label {
  display: inline-block;
  margin-block-end: 0.5rem;
}

input,
select {
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
button,
select {
  font-size: 1rem;

  transition: all 150ms linear;
}

input[type='radio'],
input[type='checkbox'] {
  display: inline-block;
}

input[type='radio'] ~ label,
input[type='checkbox'] ~ label {
  margin-block-end: 0;
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

function FormFieldSelect08() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default FormFieldSelect08;
