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
    <title>Slot Element</title>
    
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <my-paragraph color="salmon" size="20"></my-paragraph>
    <my-paragraph color="salmon" size="20">
      Aku adalah konten yang akan tampil.
    </my-paragraph>

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
    hidden: false,
    readOnly: false,
    code: `\
my-paragraph {
  text-decoration: underline;
}
`,
  },
  'main.js': {
    hidden: false,
    code: `\
import './my-paragraph.js';

const myParagraphEls = document.querySelectorAll('my-paragraph');

const changeSizeButton = document.querySelector('#changeSize');
const changeColorButton = document.querySelector('#changeColor');

changeSizeButton.onclick = () => {
  myParagraphEls.forEach((el) => el.setAttribute('size', '24'));
};

changeColorButton.onclick = () => {
  myParagraphEls.forEach((el) => el.setAttribute('color', 'lightblue'));
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

    // Menambahkan shadow root
    this._shadow = this.attachShadow({ mode: 'open' });

    this._color = this.getAttribute('color');
    this._size = this.getAttribute('size');

    this._style = document.createElement('style');
  }

  connectedCallback() {
    this.render();
  }

  updateStyle() {
    this._style.textContent = \`
      :host {
        color: \${this._color};
        font-size: \${this._size}px;
      }
    \`;
  }

  render() {
    this.updateStyle();

    this._shadow.innerHTML = \`
      \${this._style.outerHTML}

      <p>
        <slot>
          Aku adalah custom element paragraf dengan atribut 
          color \\\`\${this._color}\\\` dan 
          size \\\`\${this._size}\\\`.
        </slot>
      </p>
    \`;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[\`_\${name}\`] = newValue;

    // Render konten ulang
    this.render();
  }
}

customElements.define('my-paragraph', MyParagraph);
`,
  },
};

function MyParagraphAfterUsingSlot12() {
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

export default MyParagraphAfterUsingSlot12;
