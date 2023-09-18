import React from 'react';
import StaticWebSandpack from '../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JavaScript</title>
    <link rel="stylesheet" href="style.css" />
  </head>
    <body>
    <form>
      <label for="name">Nama</label>
      <input type="text" name="name" id="name" value="Nur Rizki Adi" />
    </form>
  </body>
</html>
`,
  },
};
function JavaScriptValueAttr29() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default JavaScriptValueAttr29;
