import React from 'react';
import NodeSandpack from '../../components/sandpacks/NodeSandpack';

const files = {
  'index.js': {
    code: `\
console.log('😋'.length) // akan mencetak: 2
console.log(Buffer.from('😋').length) // akan mencetak 4`,
  },
};
function BufferAndStringLength01() {
  return (
    <NodeSandpack files={files} />
  );
}

export default BufferAndStringLength01;
