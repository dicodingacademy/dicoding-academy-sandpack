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
import { LitElement, html } from 'lit';
 
class MyElement extends LitElement {
  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };
 
  connectedCallback() {
    super.connectedCallback();
    console.log('LitElement.shadowRootOptions', LitElement.shadowRootOptions);
  }
 
  render() {
    return html\` <h1>Hello, World!</h1> \`;
  }
}
 
customElements.define('my-element', MyElement);`,
    hidden: false,
    active: true,
  },
};

function ShadowRootOptions10() {
  return (
    <LitSandpack
      files={files}
      options={{
        showConsole: true,
      }}
    />
  );
}

export default ShadowRootOptions10;
