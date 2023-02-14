import React from 'react';
import LitSandpack from '../../components/sandpacks/LitSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html lang="en">
  <body>
    <my-element></my-element>
    <button>Tangkap H1 (Luar)</button>

    <script src="src/index.js"></script>
    <script>
      const button = document.querySelector('button');
      button.addEventListener('click', () => {
        const h1 = document.querySelector('h1');
        console.log('Luar:', h1);
      });
    </script>
  </body>
</html>`,
    hidden: false,
  },
  'src/index.js': {
    code: `\
import { LitElement, html } from 'lit';
 
class MyElement extends LitElement {
  render() {
    return html\`
      <h1>Dicoding Indonesia</h1>
      <button @click=\${this._getElementHeading1}>Tangkap H1 (Dalam)</button>
    \`;
  }
 
  _getElementHeading1() {
    const h1 = this.shadowRoot.querySelector('h1');
    console.log('Dalam:', h1);
  }
}
 
 
customElements.define('my-element', MyElement);`,
    hidden: false,
    active: true,
  },
};

function ObjekShadowRootSample08() {
  return (
    <LitSandpack
      files={files}
      options={{
        showConsole: true,
      }}
    />
  );
}

export default ObjekShadowRootSample08;
