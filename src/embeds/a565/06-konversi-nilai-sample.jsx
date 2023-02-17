import React from 'react';
import LitSandpack from '../../components/sandpacks/LitSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html lang="en">
  <body>
    <my-element count="0"></my-element>

    <script src="src/index.js"></script>
  </body>
</html>
`,
    hidden: false,
  },
  'src/index.js': {
    code: `\
import { LitElement } from 'lit';
 
class MyElement extends LitElement {
  static properties = {
    count: { type: Number, reflect: true },
  }
 
  constructor() {
    super();
    this.count = 0;
  }
 
  render() {
    return this.count;
  }
}

customElements.define('my-element', MyElement);`,
    hidden: false,
    active: true,
  },
};

function KonversiNilaiSample06() {
  return (
    <LitSandpack files={files} />
  );
}

export default KonversiNilaiSample06;
