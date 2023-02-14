import React from 'react';
import LitSandpack from '../../components/sandpacks/LitSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html lang="en">
  <body>
    <my-element></my-element>
    <my-element class="blue"></my-element>

    <script src="src/index.js"></script>
  </body>
</html>
    `,
    hidden: false,
  },
  'src/index.js': {
    code: `\
import { LitElement, html, css } from 'lit';
 
class MyElement extends LitElement {
  static styles = css\`
    :host {
      display: block;
      background-color: lightgray;
      padding: 8px;
    }
 
    :host(.blue) {
      background-color: aqua;
    }
  \`;
 
  render() {
    return html\`Hello, World!\`;
  }
}
 
customElements.define('my-element', MyElement);`,
  },
};

function SelfStylingComponent15() {
  return (
    <LitSandpack files={files} />
  );
}

export default SelfStylingComponent15;
