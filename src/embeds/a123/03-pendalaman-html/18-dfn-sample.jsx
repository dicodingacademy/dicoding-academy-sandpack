import React from 'react';
import VanillaSandpack from '../../../components/sandpacks/VanillaSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<p><dfn>Website</dfn> merupakan halaman yang menampilkan informasi melalui teks atau gambar. Website dapat diakses melalui internet dengan menggunakan browser.</p>
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function DfnSample18() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default DfnSample18;
