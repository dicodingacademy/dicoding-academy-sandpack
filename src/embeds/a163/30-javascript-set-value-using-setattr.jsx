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
    <main>
      <form>
        <label for="name">Nama</label>
        <input type="text" name="name" id="name" value="Nur Rizki Adi" />
      </form>
    </main>

    <script>
      const form = document.querySelector('form');
      const nameInput = form.elements.name;

      nameInput.setAttribute('value', 'Nur Rizki Adi Prasetyo');
    </script>
  </body>
</html>
`,
  },
};
function JavaScriptSetValueUsingSetAttr30() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default JavaScriptSetValueUsingSetAttr30;
