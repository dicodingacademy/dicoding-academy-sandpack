import React from 'react';
import VanillaSandpack from '../../components/sandpacks/VanillaSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
</ul>
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function ListSample92() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default ListSample92;
