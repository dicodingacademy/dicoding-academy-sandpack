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
    <meta charset="UTF-8">
    <title>Web Storage World</title>

    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <main class="contents" align="center">
      <h1>Local Storage</h1>

      <button id="incrementButton">Tambah nilai</button>
      <button id="clear">Hapus storage</button>

      <h3>Kamu sudah menekan tombol di atas sebanyak:</h3>
      <h2 id="count">0</h2>
    </main>

    <script src="index.js"></script>
  </body>
</html>
`,
  },
  'styles.css': {
    hidden: false,
    code: `\
.contents {
  border: 2px solid black;
  padding: 15px;

  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
}

#generateButton {
  margin-top: 5px;
  margin-bottom: 15px;
}
`,
  },
  'index.js': {
    hidden: false,
    code: `\
const localStorageKey = 'PRESS_FREQUENCY';

// Pengecekan: apakah data localStorage dengan key count tersedia atau belum
if (typeof Storage !== 'undefined') {
  if (localStorage.getItem(localStorageKey) === null) {
    // Jika item pada local storage belum ada, data akan diberi nilai awal, yakni 0
    localStorage.setItem(localStorageKey, 0);
  }
  const incrementButton = document.querySelector('#incrementButton');
  const clearButton = document.querySelector('#clear');
  const countDisplay = document.querySelector('#count');

  // Memberikan nilai item dari local storage
  countDisplay.innerText = localStorage.getItem(localStorageKey);

  // Update nilai dari item local storage jika tombol ditekan
  incrementButton.addEventListener('click', function () {
    let count = localStorage.getItem(localStorageKey);
    count++;
    localStorage.setItem(localStorageKey, count);
    countDisplay.innerText = localStorage.getItem(localStorageKey);
  });

  // Memberikan nilai 0 ke tampilan karena di-reset dan menghapus item
  clearButton.addEventListener('click', function () {
    localStorage.removeItem(localStorageKey);
    countDisplay.innerText = 0;
  });
} else {
  alert('Browser yang Anda gunakan tidak mendukung Web Storage');
}
`,
  },
};

function LocalStorageExample11() {
  return (
    <StaticWebSandpack
      files={files}
      options={{
        editorWidthPercentage: 55,
      }}
    />
  );
}

export default LocalStorageExample11;
