import React from 'react';
import VanillaSandpack from '../../components/sandpacks/VanillaSandpack';

const files = {
  'index.html': {
    code: `\
<div>
  <label for="email">Email</label>
  <br />
  <input type="email" id="email" placeholder="example@mail.com" required />
</div>

<div>
  <label for="password">Password</label>
  <br />
  <input type="password" id="password" placeholder="********" required />
</div>`,
    hidden: false,
    active: true,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function PlaceholderSample06() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default PlaceholderSample06;
