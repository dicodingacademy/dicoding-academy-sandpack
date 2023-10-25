import React from 'react';
import StaticWebSandpack from '../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Pseudo Class Selector</title>
    
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <a href="https://www.google.com/">Kunjungi Halaman Google</a>
  </body>
</html>
`,
  },
  'styles.css': {
    code: `\
/* rule akan diterapkan pada sebuah tautan yang belum pernah dikunjungi */
a:link {
   color: red;
}

/* rule akan diterapkan pada sebuah tautan yang sudah pernah dikunjungi */
a:visited {
   color: green;
}

/* rule akan diterapkan pada sebuah tautan ketika diarahkan dengan kursor */
a:hover {
   color: pink;
}

/* rule akan diterapkan pada sebuah tautan ketika ditekan */
a:active {
   color:orange;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function PseudoClassSelector44() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default PseudoClassSelector44;
