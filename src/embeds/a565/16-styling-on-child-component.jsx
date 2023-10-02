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
    <my-element>
      <div>
        <a href="https://www.dicoding.com/">Dicoding Indonesia</a>
      </div>
      <p slot="one">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, similique.</p>
    </my-element>

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
    ::slotted(*) {
      font-family: 'Roboto', sans-serif;
    }
 
    ::slotted(div) {
      text-align: center;
    }
 
    div ::slotted(*) {
      color: red;
    }
  \`;
 
  render() {
    return html\`
      <slot></slot>
      <div>
        <slot name="one"></slot>
      </div>
    \`;
  }
}
 
customElements.define('my-element', MyElement);
`,
  },
};

function StylingOnChildComponent16() {
  return (
    <LitSandpack files={files} />
  );
}

export default StylingOnChildComponent16;
