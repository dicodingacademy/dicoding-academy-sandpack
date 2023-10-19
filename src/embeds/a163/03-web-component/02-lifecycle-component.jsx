import React from 'react';
import WebComponentSandpack from '../../../components/sandpacks/WebComponentSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Lifecycle Web Component</title>
  </head>
  <body>
    <awesome-component></awesome-component>

    <div>
      <button id="changeColor">Ubah Atribut Color</button>
      <button id="changeSize">Ubah Atribut Size</button>
      <button id="removeElement">Hilangkan Elemen</button>
    </div>
    <script src="main.js"></script>
  </body>
</html>
`,
  },
  'styles.css': {
    hidden: true,
    readOnly: true,
    code: '',
  },
  'main.js': {
    hidden: false,
    code: `\
import './awesome-component.js';

let awesomeComponentEl = document.querySelector('awesome-component');

const changeColorButton = document.querySelector('#changeColor');
const changeSizeButton = document.querySelector('#changeSize');
const removeElementButton = document.querySelector('#removeElement');

changeColorButton.onclick = () => {
  // Ubah/Tambahkan nilai attribute \`color\`
  awesomeComponentEl.setAttribute('color', 'lightblue');
};

changeSizeButton.onclick = () => {
  // Ubah/Tambahkan nilai attribute \`size\`
  awesomeComponentEl.setAttribute('size', '250');
};

removeElementButton.onclick = () => {
  // Hapus elemen dari DOM
  awesomeComponentEl.remove();
};
`,
  },
  'awesome-component.js': {
    hidden: false,
    code: `\
class AwesomeComponent extends HTMLElement {  
  static observedAttributes = ['color', 'size'];

  constructor() {
    // Awali dengan memanggil super() dalam constructor
    super();

    console.log('Constructor.');
    this.innerHTML = 'Aku adalah konten yang akan tampil.';
  }

  connectedCallback() {
    console.log('Custom element ditambahkan ke halaman.');
  }

  disconnectedCallback() {
    console.log('Custom element disingkirkan dari halaman.');
  }

  adoptedCallback() {
    console.log('Custom element dipindahkan ke halaman baru.');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(\`Attribute \${name} telah diubah.\`);
  }
}

customElements.define('awesome-component', AwesomeComponent);
`,
  },
};

function LifecycleComponent02() {
  return (
    <WebComponentSandpack
      files={files}
      options={{
        showConsole: true,
        editorWidthPercentage: 55,
      }}
    />
  );
}

export default LifecycleComponent02;
