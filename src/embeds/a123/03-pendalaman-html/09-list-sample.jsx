import React from 'react';
import VanillaSandpack from '../../../components/sandpacks/VanillaSandpack.jsx';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<ol start="7">
  <li>Langkah ketujuh</li>
  <li>Langkah kedelapan</li>
  <li>Langkah kesembilan</li>
  <li>Langkah selanjutnya</li>
</ol>
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function ListSample09() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default ListSample09;
