import React from 'react';
import NodeSandpack from '../../components/sandpacks/NodeSandpack';

const files = {
  'utils.js': {
    code: `\
const indonesiaProvices = [
  'Aceh',
  'Bali',
  'Banten',
  'Bengkulu',
];

let called = 0;

function getProvinces(callback) {
  setTimeout(() => {
    called += 1;

    if (called % 2 === 0) {
      callback(new Error('failed to get provinces'), null);
      return;
    }

    callback(null, indonesiaProvices);
  }, 1000);
}

module.exports = { getProvinces };`,
    hidden: true,
  },
  'index.js': {
    code: `\
const { getProvinces } = require('./utils');

// @TODO: call getProvinces() twices and log the result
`,
  },
  'solution.js': {
    code: `\
const { getProvinces } = require('./utils');

// solution
function provincesCallback(error, provinces) {
  if (error) {
    console.log(error.message);
    return;
  }

  console.log(provinces);
}

getProvinces(provincesCallback);
getProvinces(provincesCallback);`,
  },
};

function CallbackChallange04() {
  return (
    <NodeSandpack files={files} />
  );
}

export default CallbackChallange04;
