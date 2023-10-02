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
      <p slot="two">Elemen ini akan diletakkan pada slot bernama two</p>
    </my-element>
 
    <hr>
 
    <my-element>
      <p slot="one">Elemen ini akan diletakkan pada slot bernama one</p>
      <p slot="nope">Elemen ini tidak akan di-render karena tidak ada slot bernama nope</p>
      <p>Elemen ini akan dimunculkan pada slot default (elemen slot tak bernama)</p>
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
import { LitElement, html } from 'lit';
 
class MyElement extends LitElement {
  render() {
    return html\`
      <div>
        <slot name="one"></slot>
        <slot name="two"></slot>
        <slot></slot>
      </div>
    \`;
  }
}
 
customElements.define('my-element', MyElement);
`,
  },
};

function NamedSlot12() {
  return (
    <LitSandpack files={files} />
  );
}

export default NamedSlot12;
