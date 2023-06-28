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
// let name = prompt('Silakan masukkan nama Anda!', 'John Doe');
// console.log(name);
`,
    hidden: false,
    active: true,
  },
};

function BOMMethodPromptDefaultValue08D() {
  return <StaticWebSandpack files={files} />;
}

export default BOMMethodPromptDefaultValue08D;
