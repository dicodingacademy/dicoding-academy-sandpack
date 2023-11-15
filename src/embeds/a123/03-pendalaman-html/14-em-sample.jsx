import React from 'react';
import VanillaSandpack from '../../../components/sandpacks/VanillaSandpack.jsx';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<p><em>Oding</em> adalah seorang pelajar</p>
<p>Dia adalah seorang <em>pelajar</em></p>
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function EmSample14() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default EmSample14;
