import React from 'react';
import VanillaSandpack from '../../components/sandpacks/VanillaSandpack';

const files = {
  'index.html': {
    code: `\
<ol start="7">
  <li>Langkah ketujuh</li>
  <li>Langkah kedelapan</li>
  <li>Langkah kesembilan</li>
  <li>Langkah selanjutnya</li>
</ol>`,
    hidden: false,
    active: true,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function ListSample09() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default ListSample09;
