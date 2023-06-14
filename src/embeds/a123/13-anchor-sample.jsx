import React from 'react';
import VanillaSandpack from '../../components/sandpacks/VanillaSandpack';

const files = {
  'index.html': {
    code: `\
<p>Hubungi kami di</p>
<ul>
  <li><a href="https://example.com">Website</a></li>
  <li><a href="mailto:info@example.com">Email</a></li>
  <li><a href="tel:+62123456">Telepon</a></li>
  <li><a href="#address">Alamat</a></li>
</ul>
`,
    hidden: false,
    active: true,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function AnchorSample13() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default AnchorSample13;
