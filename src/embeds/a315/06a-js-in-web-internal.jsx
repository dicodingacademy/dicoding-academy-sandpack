import React from 'react';
import StaticWebSandpack from '../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html>
  <body>
    <h2 id="pesan">Selamat datang!</h2>

    <script>
      // Silakan hapus komentar pada dua baris di bawah ini untuk melihat hasilnya
      // const tamu = prompt('Siapakah Anda?');
      // alert('Selamat datang, ' + tamu + '!');
    </script>
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
  'index.js': {
    code: '',
    hidden: true,
  },
};

function JSInWebInternal06A() {
  return <StaticWebSandpack files={files} />;
}

export default JSInWebInternal06A;
