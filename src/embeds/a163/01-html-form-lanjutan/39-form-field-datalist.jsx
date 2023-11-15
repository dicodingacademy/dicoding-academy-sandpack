import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html lang="id">
  <head>
    <title>Text Input Datalist | Form Field</title>

    <link rel="stylesheet" href="common.css" />
    <link rel="stylesheet" href="main.css" />
  </head>
  <body>
    <form>
      <div class="form-group">
        <label for="expedition">Jasa Pengiriman/Kurir</label>
        <input type="text" id="expedition" name="expedition" required list="expeditionList" />
        <datalist id="expeditionList">
          <option value="POS Indonesia">POS Indonesia</option>
          <option value="JNE">JNE</option>
          <option value="TIKI">TIKI</option>
        </datalist>
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

button:focus-visible,
input:focus-visible {
  outline: none;

  box-shadow: 0 0 0 4px rgb(30, 144, 255, 0.5);
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

function FormFieldDatalist39() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default FormFieldDatalist39;
