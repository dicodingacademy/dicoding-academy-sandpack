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
    <p class="rounded">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus et voluptatibus
      consequuntur facilis earum nemo quo totam laboriosam maxime omnis!
    </p>
  </body>
</html>
`,
  },
  'styles.css': {
    code: `\
.rounded {
  width: 300px;
  padding: 20px;
  border: 4px solid deeppink;

  border-radius: 10px;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function RoundedCorner74() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default RoundedCorner74;
