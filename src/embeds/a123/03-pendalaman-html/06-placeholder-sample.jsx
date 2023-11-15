import React from 'react';
import VanillaSandpack from '../../../components/sandpacks/VanillaSandpack.jsx';

const files = {
  'index.html': {
    hidden: false,
    active: true,
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
</div>
`,
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
