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
    hidden: true,
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
import { LitElement, html, css } from 'lit';
 
class MyElement extends LitElement {
  static styles = css\`
    p {
      color: green;
    }
  \`;
 
  render() {
    return html\` <p>Saya hijau!</p> \`;
  }
}

customElements.define('my-element', MyElement);
`,
  },
};

function StylingInComponent17() {
  return (
    <LitSandpack files={files} />
  );
}

export default StylingInComponent17;
