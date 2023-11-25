import React from 'react';
import VanillaSandpack from '../../../components/sandpacks/VanillaSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<p>Informasi selengkapnya bisa Anda dapatkan di <cite><a href="https://dicoding.com">dicoding.com</a></cite>.</p>
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function CiteSample17() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default CiteSample17;
