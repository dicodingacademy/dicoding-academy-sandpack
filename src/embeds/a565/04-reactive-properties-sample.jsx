import React from 'react';
import LitSandpack from '../../components/sandpacks/LitSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Parcel Sandbox</title>
    <meta charset="UTF-8" />
  </head>

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
    name: { type: String },
  };
 
  constructor() {
    super();
    this.name = 'Belajar reactive property di Lit component';
  }
 
  render() {
    return html\` <h1>\${this.name}</h1> \`;
  }
}

customElements.define('my-element', MyElement);`,
    hidden: false,
    active: true,
  },
};

function LitReactivePropertiesSample04() {
  return (
    <LitSandpack files={files} />
  );
}

export default LitReactivePropertiesSample04;
