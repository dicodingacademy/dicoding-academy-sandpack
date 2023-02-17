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
  static styles = css\`
    p {
      color: green;
    }
  \`;
 
  render() {
    return html\`<p>Saya hijau!</p>\`;
  }
}

customElements.define('my-element', MyElement);`,
    hidden: false,
    active: true,
  },
};

function StylingInComponent17() {
  return (
    <LitSandpack files={files} />
  );
}

export default StylingInComponent17;
