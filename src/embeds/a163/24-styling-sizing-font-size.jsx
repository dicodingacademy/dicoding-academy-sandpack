import React from 'react';
import StaticWebSandpack from '../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Styling</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <form>
      <div class="form-group">
        <label for="default-font-size">Ukuran bawaan font-size</label>
        <input type="text" name="name" id="default-font-size" value="Default font-size" />
      </div>
      <div class="form-group">
        <label for="change-font-size">Ukuran 1rem font-size</label>
        <input
          type="text"
          name="name"
          id="change-font-size"
          class="set-font-size"
          value="1rem font-size"
        />
      </div>

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

label {
  display: inline-block;
  margin-block-end: 0.5rem;
}

input {
  display: block;

  padding: 0.5rem 0.3rem;
  border: 1px solid #333;
  border-radius: 2px;

  width: 100%;
  max-width: 300px;
}

input:focus-visible {
  appearance: none;
  outline: none;

  box-shadow: 0 0 0 4px rgb(30, 144, 255, 0.5);
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

input.set-font-size {
  font-size: 1rem;
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
  background-color: rgb(45, 74, 255);
}

.btn:active {
  background-color: rgb(45, 74, 200);
}
`,
  },
};
function StylingSizingFontSize24() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default StylingSizingFontSize24;
