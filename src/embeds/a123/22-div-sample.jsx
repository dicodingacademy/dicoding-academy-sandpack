import React from 'react';
import VanillaSandpack from '../../components/sandpacks/VanillaSandpack';

const files = {
  'index.html': {
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
    hidden: false,
    active: true,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function DivSample22() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default DivSample22;
