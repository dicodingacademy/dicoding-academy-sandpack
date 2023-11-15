import React from 'react';
import WebComponentSandpack from '../../../components/sandpacks/WebComponentSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Web Component Example</title>
  </head>
  <body>
    <!-- Coba komentari atau hilangkan elemen ini -->
    <awesome-component></awesome-component>

    <script src="main.js"></script>
  </body>
</html>
`,
  },
  'main.js': {
    hidden: false,
    code: `\
import './awesome-component.js';
`,
  },
  'awesome-component.js': {
    hidden: false,
    code: `\
class AwesomeComponent extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = 'Aku adalah konten yang akan tampil.';
  }
}

customElements.define('awesome-component', AwesomeComponent);
`,
  },
};

function WebComponentExample01() {
  return (
    <WebComponentSandpack
      files={files}
      options={{
        editorWidthPercentage: 55,
      }}
    />
  );
}

export default WebComponentExample01;
