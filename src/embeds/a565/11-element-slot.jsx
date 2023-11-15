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
      <p>Child element &lt;p&gt; ini akan di-render oleh &lt;my-element&gt;</p>
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
        <slot></slot>
      </div>
    \`;
  }
}

customElements.define('my-element', MyElement);
`,
  },
};

function ElementSlot11() {
  return (
    <LitSandpack files={files} />
  );
}

export default ElementSlot11;
