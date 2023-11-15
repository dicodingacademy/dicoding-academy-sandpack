import React from 'react';
import VanillaSandpack from '../../components/sandpacks/VanillaSandpack';

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
// Silakan aktifkan kode di bawah ini dengan hapus komentar untuk melihat hasilnya
// console.log('Ini adalah console log');
// console.info('Ini adalah console info');
// console.warn('Ini adalah console warn');
// console.error('Ini adalah console error');
`,
    hidden: false,
    active: true,
  },
};

function BOMConsole09() {
  return (
    <VanillaSandpack
      files={files}
      options={{
        showConsole: true,
        editorWidthPercentage: 60,
      }}
    />
  );
}

export default BOMConsole09;
