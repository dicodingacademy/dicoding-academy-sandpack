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
    <my-element class="blue"></my-element>

    <script src="src/index.js"></script>
  </body>
</html>
`,
  },
  'src/index.js': {
    hidden: false,
    active: true,
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
    return html\` Hello, World! \`;
  }
}
 
customElements.define('my-element', MyElement);
`,
  },
};

function SelfStylingComponent15() {
  return (
    <LitSandpack files={files} />
  );
}

export default SelfStylingComponent15;
