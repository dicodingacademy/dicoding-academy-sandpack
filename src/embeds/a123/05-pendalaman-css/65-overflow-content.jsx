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
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium amet corporis
        cupiditate dignissimos error expedita explicabo facere facilis, ipsam itaque libero modi
        officiis optio perspiciatis provident quam sequi voluptatem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut corporis facere harum
        inventore iure, quisquam recusandae reprehenderit veritatis voluptatum. Ducimus
        exercitationem illo nam sapiente suscipit, tenetur ullam ut voluptas!
      </p>
    </div>
  </body>
</html>
`,
  },
  'styles.css': {
    code: `\
div {
  height: 200px;
  width: 200px;
  background-color: lightgreen;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function OverflowContent65() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default OverflowContent65;
