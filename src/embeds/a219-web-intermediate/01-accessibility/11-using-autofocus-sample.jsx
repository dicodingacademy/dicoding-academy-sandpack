import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    active: true,
    code: `\
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>autofocus Sample</title>
  
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <section>
    <h1 tabindex="0" class="section-title"><code>autofocus</code> Attribute Sample</h1>

    <form class="form">
      <div>
        <label for="username">Username</label>
        <input id="username" placeholder="Contoh: John Doe" autofocus />
      </div>
      <div>
        <label for="password">Password</label>
        <input id="password" type="password" placeholder="********" />
      </div>

      <button>Login</button>
    </form>
  </section>
</body>
</html>
`,
  },
  'styles.css': {
    code: `\
:root {
  font-family: segoe UI, system-ui, -apple-system, sans-serif;
}

.section-title {
  padding: 16px;

  color: #74a0c4;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
}

/* FORM */
.form {
  width: 400px;
  margin-inline: auto;
  padding: 16px;
  background-color: white;
  border-radius: 8px;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.form > div:not([hidden]) ~ div:not([hidden]) {
  margin-block-start: 15px;
}

label {
  display: inline-block;
  margin: 10px 0;

  color: #74a0c4;
  font-size: 1rem;
}

input {
  width: 100%;
  padding: 8px 12px;
  border: 2px solid #74a0c4;
  border-radius: 4px;

  color: #74a0c4;
  font-size: 1rem;
  font-weight: bold;
}
input:focus-visible {
  outline: 4px dashed orange;
}

button {
  width: 100%;
  margin-block-start: 30px !important;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;

  background-color: #74a0c4;

  color: white;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;

  cursor: pointer;
}
button:focus-visible {
  outline: 4px dashed orange;
}
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

export default function UsingAutofocusSample11() {
  return (
    <StaticWebSandpack
      files={files}
      options={{
        editorWidthPercentage: 55,
        showConsole: false,
      }}
    />
  );
}
