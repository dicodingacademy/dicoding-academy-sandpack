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
// let pesanInput = prompt('Silakan masukkan angka yang Anda suka!');
// let pesanInputConvertedToNumber = Number(pesanInput);
// console.log(\`Tipe data dari \\\`pesanInputConvertedToNumber\\\` adalah \${typeof pesanInputConvertedToNumber}\`);
`,
    hidden: false,
    active: true,
  },
};

function BOMMethodAlertWithVariable07B() {
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

export default BOMMethodAlertWithVariable07B;
