import React from 'react';
import VanillaSandpack from '../../../components/sandpacks/VanillaSandpack.jsx';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<p>Sebelum pulang kerja, ia berkata kepadaku: <q>Maaf saya tidak bisa hadir dalam pertemuan nanti</q></p>
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function SqSample16() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default SqSample16;
