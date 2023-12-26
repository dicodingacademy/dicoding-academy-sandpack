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
    <title>Value Attribute JavaScript</title>

    <link rel="stylesheet" href="main.css" />
  </head>
  <body>
    <form>
      <label for="name">Nama</label>
      <input type="text" name="name" id="name" value="John" />
    </form>
  </body>
</html>
`,
  },
  'main.css': {
    hidden: false,
    code: `\
/* Silakan buat styling milik Anda sendiri untuk bereksplorasi */
`,
  },
};

function JavaScriptValueAttr30() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default JavaScriptValueAttr30;
