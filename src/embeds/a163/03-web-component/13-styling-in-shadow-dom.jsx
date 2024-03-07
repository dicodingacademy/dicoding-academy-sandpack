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
    <title>Styling in Shadow DOM</title>

    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <!-- 1 -->
    <main>
      <my-cool-component>
        <p>Selamat datang di <strong>My Cool Component</strong>!</p>
      </my-cool-component>
    </main>

    <footer>
      <my-cool-component>
        <p>Selamat datang di <strong>My Cool Component</strong>!</p>
      </my-cool-component>
    </footer>

    <hr>

    <!-- 2 -->
    <my-cool-component class="text-beige">
      <p>Selamat datang di <strong>My Cool Component</strong>!</p>
    </my-cool-component>

    <my-cool-component class="text-white">
      <p>Selamat datang di <strong>My Cool Component</strong>!</p>
    </my-cool-component>

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
import './my-cool-component.js';
`,
  },
  'my-cool-component.js': {
    hidden: false,
    code: `\
class MyCoolComponent extends HTMLElement {
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
      :host {
        display: block;
        background-color: darkgrey;
      }

      :host(.text-beige) {
        color: beige;
      }

      :host-context(main) {
        background-color: lightblue;
      }
    \`;
  }

  render() {
    this.updateStyle();

    const template = \`
      \${this._style.outerHTML}
  
      <div>
        <slot></slot>
      </div>
    \`;

    this._shadowRoot.innerHTML = template;
  }
}

customElements.define('my-cool-component', MyCoolComponent);
`,
  },
};

function StylingInShadowDOM13() {
  return (
    <WebComponentSandpack
      files={files}
      options={{
        editorWidthPercentage: 55,
      }}
    />
  );
}

export default StylingInShadowDOM13;
