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

    <script>
      // Silakan aktifkan kode di bawah ini dengan hapus komentar untuk melihat hasilnya
      // const tamu = prompt('Siapakah Anda?');
      // alert('Selamat datang, ' + tamu + '!');
    </script>
  </body>
</html>
`,
  },
  'styles.css': {
    hidden: true,
    code: '',
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function JSInWebInternal06A() {
  return <StaticWebSandpack files={files} />;
}

export default JSInWebInternal06A;
