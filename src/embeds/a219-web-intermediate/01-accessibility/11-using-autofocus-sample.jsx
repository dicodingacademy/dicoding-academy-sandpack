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
  <title>Autofocus Sample</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <section>
    <h1 class="section-title"><code>autofocus</code> Attribute Sample</h1>

    <div class="container">
      <button id="openDialog" class="open-button">Open Login Form</button>

      <dialog id="loginDialog" class="dialog">
        <form class="form" method="dialog">
          <h2>Login</h2>
          
          <div>
            <label for="username">Username</label>
            <input id="username" placeholder="Contoh: John Doe" autofocus>
          </div>
          
          <div>
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="********">
          </div>
      
          <div class="button-group">
            <button type="submit" class="submit-button">Login</button>
            <button type="button" class="cancel-button" id="closeDialog">Cancel</button>
          </div>
        </form>
      </dialog>
    </div>
  </section>

  <script>
    const dialog = document.getElementById('loginDialog');
    const openButton = document.getElementById('openDialog');
    const closeButton = document.getElementById('closeDialog');
    
    openButton.addEventListener('click', () => {
      dialog.showModal();
    });
    
    closeButton.addEventListener('click', () => {
      dialog.close();
    });
  </script>
</body>
</html>
`,
  },
  'styles.css': {
    code: `\
* {
  box-sizing: border-box;
}

:root {
  font-family: segoe UI, system-ui, -apple-system, sans-serif;
  --primary-color: #74a0c4;
  --white: #ffffff;
  --shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

body {
  background-color: #f5f5f5;
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.section-title {
  padding: 16px;
  color: var(--primary-color);
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
}

.container {
  max-width: 400px;
  margin-inline: auto;
  text-align: center;
}

/* Dialog Styles */
.dialog {
  border: none;
  border-radius: 8px;
  padding: 0;
  box-shadow: var(--shadow);
}

.dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
}

/* Form Styles */
.form {
  padding: 24px;
  background-color: var(--white);
  border-radius: 8px;
}

.form h2 {
  margin: 0 0 24px 0;
  color: var(--primary-color);
  font-size: 1.5rem;
}

.form > div:not([hidden]) ~ div:not([hidden]) {
  margin-block-start: 15px;
}

label {
  display: inline-block;
  margin: 10px 0;
  color: var(--primary-color);
  font-size: 1rem;
}

input {
  width: 100%;
  padding: 8px 12px;
  border: 2px solid var(--primary-color);
  border-radius: 4px;
  color: var(--primary-color);
  font-size: 1rem;
  font-weight: bold;
  transition: outline 0.2s ease;
}

input:focus-visible {
  outline: 4px dashed orange;
  outline-offset: 2px;
}

/* Button Styles */
.open-button {
  background-color: var(--primary-color);
  color: var(--white);
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.open-button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.button-group {
  display: flex;
  gap: 12px;
  margin-top: 24px !important;
}

.submit-button, .cancel-button {
  flex: 1;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.submit-button {
  background-color: var(--primary-color);
  color: var(--white);
}

.cancel-button {
  background-color: #e0e0e0;
  color: #333;
}

.submit-button:hover, .cancel-button:hover {
  transform: translateY(-1px);
}

button:focus-visible {
  outline: 4px dashed orange;
  outline-offset: 2px;
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
