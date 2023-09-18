import React from 'react';
import StaticWebSandpack from '../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Semantic</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <main>
      <form>
        <div class="form-group">
          <label for="name">Nama</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div class="form-group">
          <div class="looks-like-label" for="name1">Nama</div>
          <div id="name1" class="looks-like-input" contenteditable></div>
        </div>

        <div class="form-group">
          <button class="btn">Kirim</button>
        </div>
      </form>
    </main>
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
  margin-inline: 0;
  margin-block-end: 1rem;
}

label,
.looks-like-label {
  display: inline-block;
  margin-block-end: 0.5rem;
}

input,
.looks-like-input {
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

button:focus-visible,
input:focus-visible,
.looks-like-input:focus-visible {
  outline: none;

  box-shadow: 0 0 0 4px rgb(30, 144, 255, 0.5);
}

label,
.looks-like-label,
input,
.looks-like-input,
button {
  font-size: 1rem;

  transition: all 150ms linear;
}

.form-group,
.additional-form-group {
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
function SemanticContentEditable35() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default SemanticContentEditable35;
