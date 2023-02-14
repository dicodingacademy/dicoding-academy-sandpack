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
import { LitElement, html, css } from 'lit';
 
class MyElement extends LitElement {
  static styles = [
    css\`
      p {
        color: green;
        font-size: 1.5rem;
      }
    \`,
    css\`
      h1 {
        text-align: center;
      }
    \`,
  ];
 
  render() {
    return html\`
      <h1>Belajar Styling di Lit Component</h1>
      <p>Saya hijau!</p>
    \`;
  }
}

customElements.define('my-element', MyElement);`,
    hidden: false,
    active: true,
  },
};

function MultipleStyling18() {
  return (
    <LitSandpack files={files} />
  );
}

export default MultipleStyling18;
