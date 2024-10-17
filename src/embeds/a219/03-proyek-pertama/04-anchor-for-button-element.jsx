import React from 'react';
import VanillaSandpack from '../../../components/sandpacks/VanillaSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Anchor for Button Element</title>

    <script src="index.js" defer></script>
  </head>
  <body>
    <a href="https://developer.mozilla.org/" target="_blank">Buka Rahasia!</a>
  </body>
</html>
`,
  },
  'index.js': {
    active: true,
    code: `\
const a = document.querySelector('a');
a.addEventListener('click', (event) => {
  window.alert('Dicoding menjadi tempat pembelajaran IT nomor satu!');

  // Silakan hilangkan tanda "//" atau tekan CTRL + "/" pada kode di bawah ini untuk berperilaku seperti tombol.
  // event.preventDefault();
});
`,
  },
  'styles.css': {
    code: '',
  },
};

export default function AnchorForButtonElement04() {
  return (
    <VanillaSandpack
      files={files}
      options={{
        editorWidthPercentage: 55,
        showConsole: true,
      }}
    />
  );
}
