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
    <title>Required Validation</title>

    <link rel="stylesheet" href="common.css" />
    <link rel="stylesheet" href="main.css" />
  </head>
  <body>
    <form>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" required />
      </div>

      <div class="form-group">
        <button class="btn">Masuk</button>
      </div>
    </form>
  </body>
</html>
`,
  },
  'main.css': {
    hidden: false,
    code: ``,
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

label,
input,
button {
  font-size: 1rem;
}

label {
  display: inline-block;
  margin-block-end: 0.5rem;
}

input {
  display: block;
  padding: 0.5rem;
}

button {
  margin: 0;
  padding: 0;
  border: none;
  display: inline-block;
  background: transparent;

  line-height: 1;

  appearance: none;
  -webkit-appearance: none;
}

.form-group {
  margin-block-end: 1rem;
}

.btn {
  background-color: #cccccc;
  border-radius: 0.3rem;
  padding: 0.5rem 1.5rem;
  border: 1px solid #333;
}

.btn:hover {
  background-color: #bbbbbb;
}

.btn:active {
  background-color: #aaaaaa;
}
`,
  },
};

function ValidationRequired15() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default ValidationRequired15;
