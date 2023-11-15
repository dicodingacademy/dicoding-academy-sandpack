import React from 'react';
import VanillaSandpack from '../../../components/sandpacks/VanillaSandpack.jsx';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<!DOCTYPE html>
<html>
  <head>
    <title>Div Element</title>
  </head>
  <body>
    <div>
      <p>
        Paragraf ini berada di dalam elemen div, namun akan ditampilkan sama seperti paragraf
        biasanya.
      </p>
    </div>
  </body>
</html>
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function DivSample22() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default DivSample22;
