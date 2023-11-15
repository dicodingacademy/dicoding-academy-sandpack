import React from 'react';
import VanillaSandpack from '../../components/sandpacks/VanillaSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<!DOCTYPE html>
<html>
  <head>
    <title>Div Element</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div class="shadowbox">
      <p>
        Paragraf ini berada di dalam elemen div, tetapi ia akan ditampilkan sama seperti paragraf
        biasanya. Elemen ini lebih sering digunakan untuk mengelompokkan sebuah konten sehingga
        dapat memudahkan styling dengan menggunakan atribut class atau id.
      </p>
    </div>
  </body>
</html>
`,
  },
  'index.js': {
    hidden: true,
    code: `
import './styles.css';
`,
  },
  'styles.css': {
    hidden: false,
    code: `\
.shadowbox {
  width: 15em;
  border: 1px solid #333;
  box-shadow: 8px 8px 5px #444;
  padding: 8px 12px;
  background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);
}
`,
  },
};

function DivWithStyleSample23() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default DivWithStyleSample23;
