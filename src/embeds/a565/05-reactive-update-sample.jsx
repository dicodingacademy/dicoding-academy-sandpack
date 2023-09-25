import React from 'react';
import LitSandpack from '../../components/sandpacks/LitSandpack';

const files = {
  'styles.css': {
    hidden: true,
    code: '',
  },
  'index.js': {
    hidden: true,
    code: '',
  },
  'index.html': {
    hidden: false,
    code: `\
<!DOCTYPE html>
<html lang="en">
  <body>
    <my-element></my-element>

    <script src="src/index.js"></script>
  </body>
</html>
`,
  },
  'src/index.js': {
    hidden: false,
    active: true,
    code: `\
import { LitElement, html } from 'lit';
 
class MyElement extends LitElement {
  static properties = {
    name: { type: String },
  };
 
  constructor() {
    super();
    this.name = 'Belajar reactive property di Lit component';
  }
 
  render() {
    return html\`
      <h1>\${this.name}</h1>
      <button @click=\${() => this._changeNameProperty('Mengubah nilai property "name"')}>
        Ubah teks
      </button>
   \`;
  }
 
  _changeNameProperty(value = null) {
    this.name = value;
  }
}

customElements.define('my-element', MyElement);
`,
  },
};

function ReactiveUpdateSample05() {
  return (
    <LitSandpack files={files} />
  );
}

export default ReactiveUpdateSample05;
