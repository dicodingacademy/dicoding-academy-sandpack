import React from 'react';
import VanillaSandpack from '../../components/sandpacks/VanillaSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <script src="index.js"></script>
  </body>
</html>
`,
    hidden: true,
    active: false,
  },
  'styles.css': {
    code: '',
    hidden: true,
  },
  'index.js': {
    code: `\
// Silakan aktifkan kode di bawah ini dengan hapus komentar untuk melihat hasilnya
// let pesanInput = prompt('Silakan masukkan angka...');
// console.log(\`Tipe data dari \\\`pesanInput\\\` adalah \${typeof pesanInput}\`);
`,
    hidden: false,
    active: true,
  },
};

function BOMMethodPromptConversion08C() {
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

export default BOMMethodPromptConversion08C;
