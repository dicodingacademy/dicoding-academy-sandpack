import React from 'react';
import StaticWebSandpack from '../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Auto Complete</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <form>
      <div class="form-group">
        <label for="one-time-password">One-Time Password (OTP)</label>
        <input
          type="text"
          name="one-time-password"
          id="one-time-password"
          autocomplete="off"
          required
        />
      </div>

      <div class="form-group">
        <button class="btn">Submit</button>
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
function AutofillAutoCompleteOff22() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default AutofillAutoCompleteOff22;
