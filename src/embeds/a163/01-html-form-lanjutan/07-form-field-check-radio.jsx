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
    <title>Form Field Check Radio</title>

    <link rel="stylesheet" href="common.css" />
    <link rel="stylesheet" href="main.css" />
  </head>
  <body>
    <form>
      <fieldset>
        <legend>Jenis Kelamin</legend>
        <div class="form-group">
          <input type="radio" name="gender" value="man" id="gender_man" />
          <label for="gender_man">Laki-laki</label>
        </div>
        <div class="form-group">
          <input type="radio" name="gender" value="woman" id="gender_woman" />
          <label for="gender_woman">Perempuan</label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Hobi</legend>
        <div class="form-group">
          <input type="checkbox" name="hobbies" value="sport" id="hobby_sport" />
          <label for="hobby_sport">Olahraga</label>
        </div>
        <div class="form-group">
          <input
            type="checkbox"
            name="hobbies"
            value="reading_book"
            id="hobby_reading_book"
          />
          <label for="hobby_reading_book">Membaca buku</label>
        </div>
        <div class="form-group">
          <input type="checkbox" name="hobbies" value="traveling" id="hobby_traveling" />
          <label for="hobby_traveling">Bepergian</label>
        </div>
        <div class="form-group">
          <input type="checkbox" name="hobbies" value="culinary" id="hobby_culinary" />
          <label for="hobby_culinary">Kulineran</label>
        </div>
      </fieldset>

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

  font-family: Arial, Helvetica, sans-serif;
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

function FormFieldCheckRadio07() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default FormFieldCheckRadio07;
