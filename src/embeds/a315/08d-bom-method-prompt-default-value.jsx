import React from 'react';
import VanillaSandpack from '../../components/sandpacks/VanillaSandpack';

const files = {
  'index.html': {
    hidden: true,
    active: false,
    code: `\
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <script src="index.js"></script>
  </body>
</html>
`,
  },
  'styles.css': {
    hidden: true,
    code: '',
  },
  'index.js': {
    code: `\
// Silakan hapus dua komentar di bawah ini untuk melihat hasilnya
// let name = prompt('Silakan masukkan nama Anda!', 'John Doe');
// console.log(name);
`,
  },
};

function BOMMethodPromptDefaultValue08D() {
  return (
    <VanillaSandpack
      files={files}
      options={{
        showConsole: true,
        editorWidthPercentage: 60,
      }}
    />
  );
}

export default BOMMethodPromptDefaultValue08D;
