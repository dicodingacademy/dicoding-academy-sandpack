import React from 'react';
import NodeSandpack from '../../components/sandpacks/NodeSandpack';

const files = {
  'index.js': {
    code: `\
const { inspect } = require('util');

const visitsCountMap = new WeakMap(); // Menyimpan daftar user

function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas);  // Menambahkan user "Jonas"

jonas = null;  // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
  console.log(inspect(visitsCountMap, { showHidden: true }));
}, 10000);

/* output
  WeakMap {  }
*/`,
  },
};

function WeakMap12() {
  return (
    <NodeSandpack files={files} />
  );
}

export default WeakMap12;
