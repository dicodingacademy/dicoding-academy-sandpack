import React from 'react';
import StaticWebSandpack from '../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html>
  <body>
    <h2 id="pesan">Selamat datang!</h2>

    <script src="scripts/welcome.js"></script>
  </body>
</html>
`,
    hidden: false,
    active: true,
  },
  'styles.css': {
    code: '',
    hidden: true,
  },
  'scripts/welcome.js': {
    code: `\
// Silakan hapus komentar pada dua baris di bawah ini untuk melihat hasilnya
// const tamu = prompt('Siapakah Anda?');
// alert('Selamat datang, ' + tamu + '!');
`,
    hidden: true,
  },
};

function JSInWebExternal06B() {
  return <StaticWebSandpack files={files} />;
}

export default JSInWebExternal06B;
