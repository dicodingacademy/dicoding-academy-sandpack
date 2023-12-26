import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<h1 style="color: green; margin-top: 2em">Kota Bandung</h1>
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function InlineStyleSample28() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default InlineStyleSample28;
