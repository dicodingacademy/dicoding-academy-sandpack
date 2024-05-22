import React from 'react';
import StaticWebSandpack from '../../components/sandpacks/StaticWebSandpack';

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
// Silakan aktifkan kode di bawah ini dengan hapus komentar untuk melihat hasilnya
// alert('Halo, user!');
`,
  },
};

function BOMMethodAlert07A() {
  return <StaticWebSandpack files={files} />;
}

export default BOMMethodAlert07A;
