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
    <title>Min Max Validation</title>

    <link rel="stylesheet" href="common.css" />
    <link rel="stylesheet" href="main.css" />
  </head>
  <body>
    <form>
      <div class="form-group">
        <label for="fruitType">
          Pilih buah favorit Anda
          <span aria-label="required">*</span>
        </label>
        <input type="text" id="fruitType" name="fruitType" required />
      </div>
      <div class="form-group">
        <label for="amount">Jumlah buah</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value="1"
          min="1"
          max="10"
          step="2"
          required
          autocomplete="off"
        />
      </div>

      <div class="form-group">
        <button class="btn">Bayar</button>
      </div>
    </form>
  </body>
</html>
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

function ValidationMinMax16() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default ValidationMinMax16;
