import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Judul Dokumen</title>
    
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div>
      <p>Paragraf pertama. di dalam div.</p>
      <p>Paragraf kedua. di dalam div.</p>
      <section>
        <p>
          Paragraf ketiga. di dalam div Namun, bukan sebagai anak elemen secara
          langsung.
        </p>
      </section>
      <p>Paragraf keempat. di dalam div.</p>
    </div>
    <p>Paragraf kelima. di luar div.</p>
    <p>Paragraf keenam. di luar div.</p>
  </body>
</html>
`,
  },
  'styles.css': {
    code: `\
/* Rule akan diterapkan pada elemen paragraf yang merupakan child dari elemen div */
div > p {
  background-color: yellow;
}
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function ChildSelector42() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default ChildSelector42;
