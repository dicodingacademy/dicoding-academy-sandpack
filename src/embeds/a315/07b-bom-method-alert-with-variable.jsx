import React from 'react';
import StaticWebSandpack from '../../components/sandpacks/StaticWebSandpack';

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
let message = 'Halo, user!';

// Silakan aktifkan kode di bawah ini dengan hapus komentar untuk melihat hasilnya
// alert(message);
`,
    hidden: false,
    active: true,
  },
};

function BOMMethodAlertWithVariable07B() {
  return <StaticWebSandpack files={files} />;
}

export default BOMMethodAlertWithVariable07B;
