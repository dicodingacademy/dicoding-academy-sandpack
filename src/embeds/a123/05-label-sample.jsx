import React from 'react';
import VanillaSandpack from '../../components/sandpacks/VanillaSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<div>
  <label for="email">Email</label>
  <br>
  <input type="email" id="email" />
</div>

<div>
  <label for="password">Password</label>
  <br>
  <input type="password" id="password" />
</div>
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function LabelSample05() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default LabelSample05;
