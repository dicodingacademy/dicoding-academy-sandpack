import React from 'react';
import StaticWebSandpackPreviewOnly from '../../../components/sandpacks/StaticWebSandpackPreviewOnly';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Styling Focus</title>

    <link rel="stylesheet" type="text/css" href="styles.css" />
  </head>
  <body>
    <div class="container">
      <h2>Please Login to Continue</h2>
      <label for="username">Username</label>
      <input id="username" type="text" placeholder="ex. jdoe" />
      <label for="password">Password</label>
      <input id="password" type="password" placeholder="password" />
      <button>Login</button>
    </div>
  </body>
</html>
`,
  },
  'styles.css': {
    hidden: false,
    code: `\
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  background-color: whitesmoke;
}

input,
label,
button {
  display: block;
}

.container {
  width: 400px;
  border-radius: 8px;
  margin: 32px auto;
  padding: 16px;

  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

h2 {
  padding: 16px;
  text-align: center;
  color: #74a0c4;
}

label {
  color: #74a0c4;
  margin: 10px 0;
}

label:last-of-type {
  margin-top: 18px;
}

input {
  width: 100%;
  border: 2px solid #74a0c4;
  border-radius: 5px;
  padding: 8px 16px;
  margin: 10px 0;

  color: #74a0c4;
  font-weight: bold;
}

button {
  width: 100%;
  background-color: #74a0c4;
  margin: 24px 0 16px 0;
  padding: 8px 16px;
  border: none;

  font-size: 16px;
  font-family: sans-serif;
  font-weight: bold;
  color: white;
}

/* Custom Focus Indicator */
button:focus {
  outline: 4px dashed orange;
}

input:focus {
  outline: 4px dashed orange;
}
`,
  },
  'index.js': {
    hidden: false,
    code: '',
  },
};

function StylingFocus09() {
  return (
    <StaticWebSandpackPreviewOnly
      files={files}
    />
  );
}

export default StylingFocus09;
