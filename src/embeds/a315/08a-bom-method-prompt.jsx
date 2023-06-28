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
// Silakan hapus komentar di bawah ini untuk melihat hasilnya
// let pesanInput = prompt('Masukkan pesan sesukamu...');
`,
    hidden: false,
    active: true,
  },
};

function BOMMethodPrompt08A() {
  return <StaticWebSandpack files={files} />;
}

export default BOMMethodPrompt08A;
