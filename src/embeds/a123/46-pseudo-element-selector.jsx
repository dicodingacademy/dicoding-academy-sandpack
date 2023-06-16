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
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
      deserunt, dicta laudantium quae quam sequi soluta vitae! A, architecto
      beatae, consequuntur et eveniet fuga laudantium molestias praesentium
      temporibus, unde velit.
    </p>
  </body>
</html>
`,
    hidden: false,
    active: true,
  },
  'style.css': {
    code: `\
/* Rule styling akan diterapkan pada karakter pertama di sebuah paragraf */
p::first-letter {
  font-size: 32px;
  font-weight: bold;
  color: saddlebrown;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function PseudoElementSelector46() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default PseudoElementSelector46;
