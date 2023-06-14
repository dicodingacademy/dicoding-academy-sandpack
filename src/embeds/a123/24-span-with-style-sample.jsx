import React from 'react';
import VanillaSandpack from '../../components/sandpacks/VanillaSandpack';

const files = {
  'index.html': {
    code: `\
<style>
  .phone {
    font-weight: bold;
  }
</style>

<ul>
  <li>Agil: <span class="phone">08123xxx</span></li>
  <li>Widy: <span class="phone">08222xxx</span></li>
  <li>Gilang: <span class="phone">08333xxx</span></li>
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

function SpanWithStyleSample23() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default SpanWithStyleSample23;
