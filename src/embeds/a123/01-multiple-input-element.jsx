import React from 'react';
import VanillaSandpack from '../../components/sandpacks/VanillaSandpack';

const files = {
  'index.html': {
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
</div>`,
    hidden: false,
    active: true,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function MultipleInputElement01() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default MultipleInputElement01;
