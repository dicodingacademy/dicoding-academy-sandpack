import React from 'react';
import StaticWebSandpack from '../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Form Field Date</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <form>
      <fieldset>
        <legend>Waktu Keberangkatan</legend>
        <div class="form-group">
          <label for="departure_date">Tanggal</label>
          <input type="date" name="departure_date" id="departure_date" />
        </div>
        <div class="form-group">
          <label for="departure_date">Jam</label>
          <input type="time" name="departure_date" id="departure_date" />
        </div>
      </fieldset>
      <fieldset>
        <legend>Waktu Kedatangan</legend>
        <div class="form-group">
          <label for="arrival_date">Tanggal</label>
          <input type="date" name="arrival_date" id="arrival_date" />
        </div>
        <div class="form-group">
          <label for="arrival_date">Jam</label>
          <input type="time" name="arrival_date" id="arrival_date" />
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
  'style.css': {
    code: `\
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

fieldset {
  margin-block-end: 1rem;
}

label {
  display: inline-block;
  margin-block-end: 0.5rem;
}

input,
textarea {
  display: block;
  padding: 0.5rem 0.3rem;

  width: 300px;
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
};
function FormFieldDate06() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default FormFieldDate06;
