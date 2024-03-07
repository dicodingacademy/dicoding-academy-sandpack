import React from 'react';
import WebComponentSandpack from '../../../components/sandpacks/WebComponentSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <title>::slotted Example</title>

    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <person-details>
      <p slot="person-name">Ahmad Farhan</p>
      <span slot="person-age">36</span>
      <span slot="person-occupation">Akuntan</span>
    </person-details>

    <person-details>
      <p slot="person-name">Budi Santoso</p>
      <span slot="person-age">Kekal</span>
      <span slot="person-occupation">Pahlawan super</span>
    </person-details>

    <person-details>
      <p slot="person-name">John Doe</p>
      <span slot="age">27</span>
      <span slot="i-am-awesome">Penjelajah waktu</span>
    </person-details>

    <script src="main.js"></script>
  </body>
</html>
`,
  },
  'styles.css': {
    hidden: false,
    readOnly: false,
    code: `\
/* Silakan buat styling milik Anda sendiri untuk bereksplorasi */
`,
  },
  'main.js': {
    hidden: false,
    code: `\
import './person-details.js';
`,
  },
  'person-details.js': {
    hidden: false,
    code: `\
class PersonDetails extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
  }

  connectedCallback() {
    this.render();
  }

  updateStyle() {
    this._style.textContent = \`
      div {
        margin: 10px;
        padding: 10px;
        border: 1px solid gray;

        width: 200px;
      }
  
      h2 {
        margin: 0 0 10px;
      }
  
      ul {
        margin: 0;
      }
  
      p {
        margin: 10px 0;
      }
  
      ::slotted(*) {
        color: gray;
        font-family: sans-serif;
      }
    \`;
  }

  render() {
    this.updateStyle();

    const template = \`
      \${this._style.outerHTML}
      
      <div>
        <h2>Personal ID Card</h2>
        <slot name="person-name">NAME MISSING</slot>
        <ul>
          <li><slot name="person-age">AGE MISSING</slot></li>
          <li><slot name="person-occupation">OCCUPATION MISSING</slot></li>
        </ul>
      </div>
    \`;

    this._shadowRoot.innerHTML = template;
  }
}

customElements.define('person-details', PersonDetails);
`,
  },
};

function NamedSlotElement14() {
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

export default NamedSlotElement14;
