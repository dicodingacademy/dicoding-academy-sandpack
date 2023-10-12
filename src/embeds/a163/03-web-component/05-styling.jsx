import React from 'react';
import WebComponentSandpack from '../../../components/sandpacks/WebComponentSandpack';

const files = {
  'index.html': {
    hidden: false,
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Styling Web Component</title>
  </head>
  <body>
    <my-paragraph color="salmon" size="20"></my-paragraph>

    <div>
      <button id="changeColor">Ubah Color</button>
      <button id="changeSize">Ubah Size</button>
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
import './my-paragraph.js';

let myParagraphEl = document.querySelector('my-paragraph');

const changeSizeButton = document.querySelector('#changeSize');
const changeColorButton = document.querySelector('#changeColor');

changeSizeButton.onclick = () => {
  myParagraphEl.setAttribute('size', '24');
};

changeColorButton.onclick = () => {
  myParagraphEl.setAttribute('color', 'lightblue');
};
`,
  },
  'my-paragraph.js': {
    hidden: false,
    active: true,
    code: `\
class MyParagraph extends HTMLElement {
  static observedAttributes = ['color', 'size'];

  constructor() {
    super();

    this._color = this.getAttribute('color');
    this._size = this.getAttribute('size');

    this._style = document.createElement('style');
  }

  connectedCallback() {
    this.render();
  }

  updateStyle() {
    this._style.textContent = \`
      ${this.localName} {
        color: \${this._color};
        font-size: \${this._size}px;
      }
    \`;
  }

  render() {
    // Perbarui styling
    this.updateStyle();

    this.innerHTML = \`
      \${this._style.outerHTML}

      Aku adalah custom element paragraf dengan atribut 
      color \\\`\${this._color}\\\` dan 
      size \\\`\${this._size}\\\`.
    \`;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(\`Atribut \${name} diubah.\`);
    console.log(\`Nilai lama adalah \${oldValue}\`);
    console.log(\`Nilai baru adalah \${newValue}\`);

    // Ubah nilai atribut yang telah disimpan
    this[\`_\${name}\`] = newValue;

    // Render konten ulang
    this.render();
  }
}

customElements.define('my-paragraph', MyParagraph);
`,
  },
};

function Styling05() {
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

export default Styling05;
