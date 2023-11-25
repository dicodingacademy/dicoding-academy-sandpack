import React from 'react';
import VanillaSandpack from '../../../components/sandpacks/VanillaSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<ol>
  <li>Langkah pertama</li>
  <li>Langkah kedua</li>
  <li>Langkah ketiga</li>
  <li>Langkah selanjutnya</li>
</ol>
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function ListSample08() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default ListSample08;
