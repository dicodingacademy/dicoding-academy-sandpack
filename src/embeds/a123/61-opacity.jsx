import React from 'react';
import StaticWebSandpack from '../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Judul Dokumen</title>
    
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div>Opacity 50%:</div>
    <p class="opacity-50">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore temporibus facere impedit
      natus blanditiis similique laudantium quaerat tenetur quod praesentium.
    </p>

    <div>Opacity 100% (default):</div>
    <p class="opacity-100">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reprehenderit aut perferendis
      totam tempore, obcaecati suscipit. Explicabo assumenda recusandae voluptas.
    </p>
  </body>
</html>
`,
    hidden: false,
    active: true,
  },
  'style.css': {
    code: `\
p {
  background-color: red;
}

p.opacity-50 {
  opacity: 50%;
}

p.opacity-100 {
  opacity: 100%;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function Opacity61() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default Opacity61;
