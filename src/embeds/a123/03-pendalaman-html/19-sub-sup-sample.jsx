import React from 'react';
import VanillaSandpack from '../../../components/sandpacks/VanillaSandpack.jsx';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<p>
  Sukrosa merupakan suatu disakarida yang dibentuk dari monomer-monomernya yang berupa unit glukosa dan fruktosa, dengan rumus molekul C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>.
</p>

<p>Salah satu persamaan paling umum dalam semua fisika adalah E=MC<sup>2</sup></p>
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function SubSupSample19() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default SubSupSample19;
