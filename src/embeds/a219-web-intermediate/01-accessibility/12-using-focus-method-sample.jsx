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
  <title>focus() Method Sample</title>

  <link rel="stylesheet" href="styles.css">

  <script defer src="index.js"></script>
</head>
<body>
  <section>
    <h1 class="section-title"><code>focus()</code> Method Sample</h1>

    <div class="container">
      <div>
        <button id="get-focus">Focus to &lt;textarea&gt;</button>
      </div>

      <form class="form">
        <div>
          <label for="your-think">What do you think?</label>
          <textarea
            id="your-think"
            class="your-think"
            placeholder="Contoh: I am feel so happy"
          ></textarea>
        </div>
  
        <button>Save</button>
      </form>
    </div>
  </section>
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
}

.section-title {
  padding: 16px;

  color: #74a0c4;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
}

.container {
  max-width: 400px;
  margin-inline: auto;
}

/* FORM */
.form {
  margin-block-start: 20px;
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

input,
textarea {
  width: 100%;
  padding: 8px 12px;
  border: 2px solid #74a0c4;
  border-radius: 4px;

  color: #74a0c4;
  font-size: 1rem;
  font-weight: bold;
}
input:focus-visible,
textarea:focus-visible {
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
    code: `\
const yourThinkTextarea = document.getElementById('your-think')

document.getElementById('get-focus').onclick = () => {
  yourThinkTextarea.focus();
}

yourThinkTextarea.onfocus = (event) => {
  event.currentTarget.value = 'Yay, I’m focused. That makes me very happy!';
}
`,
  },
};

export default function UsingFocusMethodSample12() {
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
