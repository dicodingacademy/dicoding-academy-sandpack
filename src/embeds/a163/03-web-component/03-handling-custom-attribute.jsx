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
    <title>Handling Custom Attribute Web Component</title>
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
    code: '',
  },
  'main.js': {
    hidden: false,
    code: `\
import './my-paragraph.js';
`,
  },
  'my-paragraph.js': {
    hidden: false,
    active: true,
    code: `\
class MyParagraph extends HTMLElement {
  constructor() {
    super();

    this._color = this.getAttribute('color');
    this._size = this.getAttribute('size');
  }

  connectedCallback() {
    this.innerHTML = \`
      Aku adalah custom element paragraf dengan atribut 
      color \\\`\${this._color}\\\` dan 
      size \\\`\${this._size}\\\`.
    \`;
  }
}

customElements.define('my-paragraph', MyParagraph);
`,
  },
};

function HandlingCustomAttribute03() {
  return (
    <WebComponentSandpack
      files={files}
      options={{
        editorWidthPercentage: 55,
      }}
    />
  );
}

export default HandlingCustomAttribute03;
