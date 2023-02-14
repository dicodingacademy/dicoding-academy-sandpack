import React from 'react';
import LitSandpack from '../../components/sandpacks/LitSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
  <body>
    <my-element>
      <h1>Dicoding</h1>
    </my-element>

    <script src="src/index.js"></script>
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
      <div>
        <slot></slot>
      </div>
 
      <button @click=\${this._getSlottedChildren}>Get Element</button>
    \`;
  }
 
  _getSlottedChildren() {
    const slot = this.shadowRoot.querySelector('slot');
    console.log(slot.assignedElements());
  }
}
 
customElements.define('my-element', MyElement);
    `,
    hidden: false,
  },
};

function SlotAssignedElement14() {
  return (
    <LitSandpack
      files={files}
      options={{
        showConsole: true,
      }}
    />
  );
}

export default SlotAssignedElement14;
