import React from 'react';
import VanillaSandpack from '../../components/sandpacks/VanillaSandpack';

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
function alert(nama) {
  console.log('Hati-hati, ' + nama);
}
 
// Silakan aktifkan kode di bawah ini dengan hapus komentar untuk melihat hasilnya

// 1. Output di bawah akan tercetak ke console browser
// alert('Chewbacca'); // Output: Hati-hati, Chewbacca
 
// 2. Output di bawah akan tetap tercetak pada console browser
// window.alert('Chewbacca'); // Output: Hati-hati, Chewbacca
`,
  },
};

function BOMAlertHack10() {
  return (
    <VanillaSandpack
      files={files}
      options={{
        editorWidthPercentage: 55,
      }}
    />
  );
}

export default BOMAlertHack10;
