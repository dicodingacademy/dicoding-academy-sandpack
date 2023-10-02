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
    <title>Set Value JavaScript</title>

    <link rel="stylesheet" href="main.css" />
  </head>
  <body>
    <main>
      <form>
        <label for="name">Nama</label>
        <input type="text" name="name" id="name" value="John" />
      </form>
    </main>

    <script src="main.js"></script>
  </body>
</html>
`,
  },
  'main.css': {
    hidden: false,
    code: '',
  },
  'main.js': {
    hidden: false,
    code: `\
const form = document.querySelector('form');
const nameInput = form.elements.name;

nameInput.setAttribute('value', 'John Doe');
`,
  },
};

function JavaScriptSetValueUsingSetAttr31() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default JavaScriptSetValueUsingSetAttr31;
