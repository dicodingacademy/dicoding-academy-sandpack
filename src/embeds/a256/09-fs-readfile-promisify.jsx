import React from 'react';
import NodeSandpack from '../../components/sandpacks/NodeSandpack';

const files = {
  'index.js': {
    code: `\
const fs = require('fs');
const { promisify } = require('util');

const readFilePromise = promisify(fs.readFile);

readFilePromise('./data.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.log(err.message));
`,
  },
  'data.txt': {
    code: `\
Anda berhasil membaca teks dari berkas.
`,
  },
};

function FSReadFilePromisify09() {
  return (
    <NodeSandpack files={files} />
  );
}

export default FSReadFilePromisify09;
