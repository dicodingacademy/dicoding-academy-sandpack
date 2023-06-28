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
function alert(nama) {
  console.log('Hati-hati, ' + nama);
}
 
// Silakan aktifkan kode di bawah ini dengan hapus komentar untuk melihat hasilnya

// 1. Output di bawah akan tercetak ke console browser
// alert('Chewbacca'); // Output: Hati-hati, Chewbacca
 
// 2. Output di bawah akan tetap tercetak pada console browser
// window.alert('Chewbacca'); // Output: Hati-hati, Chewbacca
`,
    hidden: false,
    active: true,
  },
};

function BOMAlertHack10() {
  return (
    <StaticWebSandpack
      files={files}
      options={{
        editorWidthPercentage: 55,
      }}
    />
  );
}

export default BOMAlertHack10;
