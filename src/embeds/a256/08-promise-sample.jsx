import React from 'react';
import NodeSandpack from '../../components/sandpacks/NodeSandpack';

const files = {
  'index.js': {
    code: `\
function getUsers(isOffline) {
  // return a promise object
  return new Promise((resolve, reject) => {

    // simulate network delay
    setTimeout(() => {
      const users = ['John', 'Jack', 'Abigail'];
    
      if (isOffline) {
        reject(new Error('cannot retrieve users due offline'));
        return;
      }

      resolve(users);
    }, 3000);
  });
}

getUsers(false)
  .then(users => console.log(users))
  .catch(err => console.log(err.message));
`,
  },
};

function PromiseSample08() {
  return (
    <NodeSandpack files={files} />
  );
}

export default PromiseSample08;
