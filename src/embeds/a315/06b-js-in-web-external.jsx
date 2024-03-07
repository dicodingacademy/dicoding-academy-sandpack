import React from 'react';
import StaticWebSandpack from '../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <h2 id="pesan">Selamat datang!</h2>

    <script src="scripts/welcome.js"></script>
  </body>
</html>
`,
  },
  'styles.css': {
    hidden: true,
    code: '',
  },
  'scripts/welcome.js': {
    hidden: false,
    code: `\
// Silakan aktifkan kode di bawah ini dengan hapus komentar untuk melihat hasilnya
// const tamu = prompt('Siapakah Anda?');
// alert('Selamat datang, ' + tamu + '!');
`,
  },
};

function JSInWebExternal06B() {
  return <StaticWebSandpack files={files} />;
}

export default JSInWebExternal06B;
