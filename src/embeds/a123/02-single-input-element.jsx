import React from 'react';
import VanillaSandpack from '../../components/sandpacks/VanillaSandpack';

const files = {
  'index.html': {
    code: '<input type="text" />',
    hidden: false,
    active: true,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function SingleInputElement02() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default SingleInputElement02;
