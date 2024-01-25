import React from 'react';
import WebComponentSandpack from '../../../components/sandpacks/WebComponentSandpack';

const files = {
  'index.html': {
    hidden: false,
    code: `\
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="utf-8">
    <title>Check Shadow DOM Mode With composedpath</title>
  </head>
  <body>
    <h1>Periksa Perbedaan</h1>
    <p>Silakan klik dua teks dan sekaligus cek output yang tampil di console seusainya secara bertahap dan amati perbedaannya</p>
    
    <hr>
    
    <open-shadow text="I have an open shadow root"></open-shadow>
    <closed-shadow text="I have a closed shadow root"></closed-shadow>

    <script src="main.js"></script>
  </body>
</html>
`,
  },
  'styles.css': {
    hidden: true,
    readOnly: true,
    code: `\
/* Silakan buat styling milik Anda sendiri untuk bereksplorasi */
`,
  },
  'main.js': {
    hidden: false,
    active: true,
    code: `\
customElements.define(
  'open-shadow',
  class extends HTMLElement {
    constructor() {
      super();

      const pElem = document.createElement('p');
      pElem.textContent = this.getAttribute('text');

      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(pElem);
    }
  },
);

customElements.define(
  'closed-shadow',
  class extends HTMLElement {
    constructor() {
      super();

      const pElem = document.createElement('p');
      pElem.textContent = this.getAttribute('text');

      const shadowRoot = this.attachShadow({ mode: 'closed' });
      shadowRoot.appendChild(pElem);
    }
  },
);

document.querySelector('html').addEventListener('click', (e) => {
  console.log(e.composed);
  console.log(e.composedPath());
});
`,
  },
};

function CheckShadowDOMModeWithComposedpath09() {
  return (
    <WebComponentSandpack
      files={files}
      options={{
        showConsole: true,
        editorWidthPercentage: 55,
      }}
    />
  );
}

export default CheckShadowDOMModeWithComposedpath09;
