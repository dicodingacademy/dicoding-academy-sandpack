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
    <p>
      <span class="normal">normal</span> | <span class="italic">italic</span> |
      <span class="oblique">oblique</span>
    </p>
  </body>
</html>
`,
  },
  'styles.css': {
    code: `\
.normal {
  font-style: normal;
}

.italic {
  font-style: italic;
}

.oblique {
  font-style: oblique;
}
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function FontStyle50() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default FontStyle50;
