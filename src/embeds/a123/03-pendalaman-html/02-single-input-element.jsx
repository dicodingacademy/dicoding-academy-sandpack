import React from 'react';
import VanillaSandpack from '../../../components/sandpacks/VanillaSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<input type="text" />
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function SingleInputElement02() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default SingleInputElement02;
