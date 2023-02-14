import React from 'react';
import LitSandpack from '../../components/sandpacks/LitSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html lang="en">
  <body>
    <my-element>
      <p>Child element p ini akan di-render oleh my-element</p>
    </my-element>

    <script src="src/index.js"></script>
  </body>
</html>
    `,
    hidden: false,
  },
  'src/index.js': {
    code: `\
import { LitElement, html} from 'lit';
 
class MyElement extends LitElement {
  render() {
    return html\`
      <div>
        <slot></slot>
      </div>
    \`;
  }
}
 
customElements.define('my-element', MyElement);`,
    hidden: false,
  },
};

function ElementSlot11() {
  return (
    <LitSandpack files={files} />
  );
}

export default ElementSlot11;
