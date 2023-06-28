import React from 'react';
import StaticWebSandpack from '../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html>
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
// Silakan hapus dua komentar di bawah ini untuk melihat hasilnya
// let pesanInput = prompt('Silakan masukkan angka...');
// console.log(typeof pesanInput); // output -> 'string'
`,
    hidden: false,
    active: true,
  },
};

function BOMMethodPromptConversion08C() {
  return <StaticWebSandpack files={files} />;
}

export default BOMMethodPromptConversion08C;
