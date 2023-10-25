import React from 'react';
import VanillaSandpack from '../../components/sandpacks/VanillaSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<p>
   Dicoding Space,<br>
   Jln. Batik Kumeli No. 50.<br>
   Bandung.<br>
   40123
</p>
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function BreakSample21() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default BreakSample21;
