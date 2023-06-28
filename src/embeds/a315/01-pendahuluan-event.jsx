import React from 'react';
import StaticWebSandpack from '../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    // eslint-disable-next-line no-multi-str
    code: `\
<button onClick="alert('Halo! Apa Kabar')">Tekan Aku</button>
`,
    hidden: false,
    active: true,
  },
  'styles.css': {
    code: '',
    hidden: true,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function PendahuluanEvent01() {
  return <StaticWebSandpack files={files} />;
}

export default PendahuluanEvent01;
