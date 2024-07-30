import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    active: true,
    code: `\
<!DOCTYPE html>
<html lang="en">
  <body>
    <h1>My Website</h1>

    <script>
      // Silakan hilangkan karakter "//" pada kode di bawah ini.
      // window.alert('Hello, world!');
    </script>
  </body>
</html>
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
  'styles.css': {
    hidden: true,
    code: '',
  },
};

function BrowserRuntime01() {
  return (
    <StaticWebSandpack
      files={files}
      options={{
        showConsole: false,
        editorWidthPercentage: 60,
      }}
    />
  );
}

export default BrowserRuntime01;
