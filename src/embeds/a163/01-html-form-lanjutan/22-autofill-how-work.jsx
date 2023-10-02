import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<label for="email">Email</label>
<input type="email" name="email" id="email">
`,
  },
};

function AutofillHowWork22() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default AutofillHowWork22;
