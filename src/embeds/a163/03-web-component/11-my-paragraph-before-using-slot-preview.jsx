import React from 'react';
import WebComponentSandpack from '../../../components/sandpacks/WebComponentSandpack';

const files = {
  'index.html': {
    hidden: false,
    readOnly: true,
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Before Using Slot Preview</title>
  </head>
  <body>
    <my-paragraph color="salmon" size="20"></my-paragraph>

    <script src="main.js"></script>
  </body>
</html>
`,
  },
  'styles.css': {
    hidden: true,
    readOnly: true,
    code: `\
/* Silakan buat styling milik Anda sendiri untuk bereksplorasi */
`,
  },
  'main.js': {
    hidden: false,
    readOnly: true,
    code: `\
import './my-paragraph.js';
`,
  },
  'my-paragraph.js': {
    hidden: false,
    readOnly: true,
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
      my-paragraph {
        color: \${this._color};
        font-size: \${this._size}px;
      }
    \`;
  }

  render() {
    this.updateStyle();

    this.innerHTML = \`
      \${this._style.outerHTML}

      Aku adalah custom element paragraf dengan atribut 
      color \\\`\${this._color}\\\` dan 
      size \\\`\${this._size}\\\`.
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

function MyParagraphBeforeUsingSlotPreview11() {
  return (
    <WebComponentSandpack
      files={files}
      options={{
        editorWidthPercentage: 55,
      }}
    />
  );
}

export default MyParagraphBeforeUsingSlotPreview11;
