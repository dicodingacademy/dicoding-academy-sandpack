import React from 'react';
import VanillaSandpack from '../../../components/sandpacks/VanillaSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<img
  src="https://raw.githubusercontent.com/dicodingacademy/a123-webdasar-labs/099-shared-files/shared-media/dicoding-logo.jpg" 
  alt="Dicoding Logo"
>
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function ImageSample11() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default ImageSample11;
