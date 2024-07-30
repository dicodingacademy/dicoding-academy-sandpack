import React from 'react';
import NodeSandpack from '../../../components/sandpacks/NodeSandpack';

const files = {
  'index.js': {
    hidden: false,
    code: `\
console.log(process.platform);
`,
  },
};

function NodejsRuntime02() {
  return (
    <NodeSandpack
      files={files}
    />
  );
}

export default NodejsRuntime02;
