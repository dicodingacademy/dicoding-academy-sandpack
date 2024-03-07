import React from 'react';
import VanillaSandpack from '../../../components/sandpacks/VanillaSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<blockquote>
  <p>
    Situs web (bahasa Inggris: website) adalah sekumpulan halaman web yang saling berhubungan yang
    umumnya berada pada peladen yang sama berisikan kumpulan informasi yang disediakan secara
    perorangan, kelompok, atau organisasi.
  </p>
</blockquote>
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function LongQuotations93() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default LongQuotations93;
