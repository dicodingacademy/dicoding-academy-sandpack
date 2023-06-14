import React from 'react';
import VanillaSandpack from '../../components/sandpacks/VanillaSandpack';

const files = {
  'index.html': {
    code: `\
<p>
   Dicoding Space,<br>
   Jln. Batik Kumeli No. 50.<br>
   Bandung.<br>
   40123
</p>
`,
    hidden: false,
    active: true,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function BreakSample21() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default BreakSample21;
