import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack.jsx';

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
    <ul>
      <li>Home</li>
      <li>Product</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </body>
</html>
`,
  },
  'styles.css': {
    code: `\
li {
  display: inline;

  margin-left: 5px;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function DisplayRoles72() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default DisplayRoles72;
