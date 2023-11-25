import React from 'react';
import VanillaSandpack from '../../../components/sandpacks/VanillaSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<p>Kesehatan merupakan hal yang penting, jaga pola makan yang teratur dan <strong>jangan sampai makan tengah malam!</strong></p>
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function StrongSample15() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default StrongSample15;
