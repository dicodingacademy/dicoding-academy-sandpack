import React from 'react';
import VanillaSandpack from '../../components/sandpacks/VanillaSandpack';

const files = {
  'index.html': {
    code: `\
<img
  src="https://raw.githubusercontent.com/dicodingacademy/BelajarDasarPemrogramanWeb/099-shared-files/dicoding-logo.png" 
  alt="dicoding">
`,
    hidden: false,
    active: true,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function ImageSample11() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default ImageSample11;
