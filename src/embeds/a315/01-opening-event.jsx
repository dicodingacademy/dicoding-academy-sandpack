import React from 'react';
import StaticWebSandpack from '../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<button onClick="alert('Halo! Apa Kabar')">
  Tekan Aku
</button>
`,
  },
  'styles.css': {
    hidden: true,
    code: '',
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function OpeningEvent01() {
  return <StaticWebSandpack files={files} />;
}

export default OpeningEvent01;
