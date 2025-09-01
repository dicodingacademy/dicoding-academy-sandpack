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
    <meta charset="UTF-8">
    <title>Register After Custom Element Definition Complete</title>
    
    <script type="module" src="index.js"></script>
  </head>
  <body>
    <awesome-component></awesome-component>
    <hr>
    <my-paragraph color="salmon" size="20"></my-paragraph>
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
  'index.js': {
    hidden: false,
    code: `\
/**
 * Mengimpor berkas web component agar terdaftar dalam browser.
 * 
 * Model impor seperti ini bermaksud untuk side effect alias hanya akan menjalankan kode-kode di dalamnya tanpa mengimpor apa pun
 * dan inilah yang cukup dibutuhkan oleh aplikasi sehingga tidak perlu melakukan export class.
 * Baca: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#import_a_module_for_its_side_effects_only
 */
import './awesome-component.js';
import './my-paragraph.js';
`,
  },
  'awesome-component.js': {
    hidden: false,
    code: `\
class AwesomeComponent extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = 'Aku adalah web component terbaik.';
  }
}

customElements.define('awesome-component', AwesomeComponent);
`,
  },
  'my-paragraph.js': {
    code: `\
class MyParagraph extends HTMLElement {
  static observedAttributes = ['color', 'size'];

  constructor() {
    super();

    this._color = this.getAttribute('color');
    this._size = this.getAttribute('size');
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = \`
      Aku adalah custom element paragraf dengan atribut
      color \\\`\${this._color}\\\` dan size \\\`\${this._size}\\\`.
    \`;
  }

  attributeChangedCallback(name, oldValue, newValue) {
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

export default function RegisterAfterCustomElementDefinitionComplete03() {
  return (
    <WebComponentSandpack
      files={files}
      options={{
        editorWidthPercentage: 55,
      }}
    />
  );
}
