import React from 'react';
import LitSandpack from '../../components/sandpacks/LitSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html lang="en">
  <body>
    <my-element></my-element>

    <script src="src/index.js"></script>
  </body>
</html>
`,
    hidden: true,
  },
  'src/index.js': {
    code: `\
import { LitElement, html } from 'lit';

class MyElement extends LitElement {
  static properties = {
    count: { type: Number },
  };
 
  constructor() {
    super();
    this.count = 0;
  }
 
  render() {
    return html\`
      <p><button @click=\${this._increment}>Klik Saya!</button></p>
      <p>Jumlah klik: \${this.count}</p>
    \`;
  }
 
  _increment(event) {
    this.count++;
  }
}

customElements.define('my-element', MyElement);`,
    hidden: false,
    active: true,
  },
};

function LitMenambahkanEventListenerSample07() {
  return (
    <LitSandpack files={files} />
  );
}

export default LitMenambahkanEventListenerSample07;
