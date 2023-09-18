import React from 'react';
import StaticWebSandpack from '../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Attribute Input Mode</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <main>
      <form>
        <div class="form-group">
          <label for="name">Nama</label>
          <input type="text" id="name" name="name" autocomplete="cc-name" required />
        </div>
        <div class="form-group">
          <label>Card number</label>
          <input
            type="text"
            inputmode="numeric"
            id="card-number"
            name="card-number"
            autocomplete="cc-number"
            required
            pattern="[0-9]+"
          />
        </div>
        <div class="form-group date-code">
          <div>
            <label for="expiry-date">Expiry date</label>
            <input
              type="text"
              id="expiry-date"
              class="expiry-date"
              name="expiry-date"
              autocomplete="cc-exp"
              required
              placeholder="MM/YY"
              minlength="4"
              pattern="[0-9/]+"
            />
          </div>
          <div>
            <label for="security-code">Security code</label>
            <input
              type="text"
              inputmode="numeric"
              id="security-code"
              name="security-code"
              required
              minlength="3"
              maxlength="4"
              pattern="[0-9]+"
            />
          </div>
        </div>

        <div class="form-group">
          <button class="btn">Bayar Sekarang</button>
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

form {
  max-width: 300px;
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

.date-code {
  display: flex;

  gap: 1rem;
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
function AttributeInputMode11() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default AttributeInputMode11;
