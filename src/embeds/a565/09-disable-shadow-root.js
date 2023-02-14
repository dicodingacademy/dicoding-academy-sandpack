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
  createRenderRoot() {
    return this;
  }
 
  render() {
    return html\` <h1>Hello, World!</h1> \`;
  }
}
 
customElements.define('my-element', MyElement);`,
    hidden: false,
    active: true,
  },
};

function DisableShadowRoot09() {
  return (
    <LitSandpack files={files} />
  );
}

export default DisableShadowRoot09;
