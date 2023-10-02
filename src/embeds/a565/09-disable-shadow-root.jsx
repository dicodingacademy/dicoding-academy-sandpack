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
  createRenderRoot() {
    return this;
  }
 
  render() {
    return html\` 
      <h1>Hello, World!</h1> 
    \`;
  }
}
 
customElements.define('my-element', MyElement);
`,
  },
};

function DisableShadowRoot09() {
  return (
    <LitSandpack files={files} />
  );
}

export default DisableShadowRoot09;
