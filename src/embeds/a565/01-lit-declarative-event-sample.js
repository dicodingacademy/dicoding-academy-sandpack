import React from 'react';
import LitSandpack from '../../components/sandpacks/LitSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Parcel Sandbox</title>
    <meta charset="UTF-8" />
  </head>

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
import { LitElement, html } from "lit";

class MyElement extends LitElement {
  render() {
    return html\` <button @click=\${this._showAlert}>Click Me!</button> \`;
  }

  _showAlert(e) {
    window.alert("Alert sudah tampil");
  }
}

customElements.define("my-element", MyElement);`,
    hidden: false,
    active: true,
  },
};

function LitDeclarativeEventSample01() {
  return (
    <LitSandpack files={files} />
  );
}

export default LitDeclarativeEventSample01;
