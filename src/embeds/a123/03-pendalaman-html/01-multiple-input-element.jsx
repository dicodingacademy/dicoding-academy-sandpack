import React from 'react';
import VanillaSandpack from '../../../components/sandpacks/VanillaSandpack.jsx';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<div>
  Text:
  <input type="text" />
</div>
<div>
  Number:
  <input type="number" />
</div>
<div>
  Email:
  <input type="email" />
</div>
<div>
  Password:
  <input type="password" />
</div>
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function MultipleInputElement01() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default MultipleInputElement01;
