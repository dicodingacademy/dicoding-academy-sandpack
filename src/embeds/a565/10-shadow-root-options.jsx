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
  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };
 
  connectedCallback() {
    super.connectedCallback();
    console.log(
      'LitElement.shadowRootOptions',
      LitElement.shadowRootOptions,
    );
  }
 
  render() {
    return html\` <h1>Hello, World!</h1> \`;
  }
}
 
customElements.define('my-element', MyElement);
`,
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
