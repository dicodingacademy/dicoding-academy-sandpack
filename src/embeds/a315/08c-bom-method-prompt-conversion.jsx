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
// let pesanInput = prompt('Masukkan angka sesukamu...');
// let pesanInputConvertedToNumber = Number(pesanInput);
// console.log(typeof pesanInputConvertedToNumber); // output -> 'number'
`,
    hidden: false,
    active: true,
  },
};

function BOMMethodAlertWithVariable07B() {
  return <StaticWebSandpack files={files} />;
}

export default BOMMethodAlertWithVariable07B;
