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
    <title>Pseudo Element Selector</title>
    
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <blockquote>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eius error
      explicabo ipsum molestiae necessitatibus nesciunt possimus reprehenderit sed
      voluptates. Aliquam aspernatur autem est nobis officia praesentium quas
      recusandae rem.
    </blockquote>
  </body>
</html>
`,
  },
  'styles.css': {
    code: `\
blockquote::before,
blockquote::after {
  content: '"';
  font-size: 24px;
  font-style: italic;
  font-weight: bold;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function PseudoElementSelector45() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default PseudoElementSelector45;
