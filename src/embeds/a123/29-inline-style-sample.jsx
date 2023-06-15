import React from 'react';
import StaticWebSandpack from '../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<h1 style="color: green; margin-top: 2em">Kota Bandung</h1>
`,
    hidden: false,
    active: true,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function InlineStyleSample28() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default InlineStyleSample28;
