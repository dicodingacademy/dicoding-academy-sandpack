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
    <div class="box">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
        autem commodi dignissimos dolores ea, eaque, earum esse harum illo in
        incidunt molestias nam non qui recusandae sunt ullam veniam vero!
      </p>
    </div>

    <div class="box center">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ea,
        id. Aliquid consectetur dolorum exercitationem ipsam, necessitatibus
        nostrum pariatur sunt! Accusantium architecto at dolorem itaque quisquam
        quod soluta sunt voluptatum.
      </p>
    </div>
  </body>
</html>
`,
  },
  'styles.css': {
    code: `\
.box {
  width: 50%;
  border: 4px solid darkblue;
  padding: 20px;
  margin-bottom: 20px;
}

.box.center {
  margin: 0 auto;
}
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function BoxModelCenteringContent71() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default BoxModelCenteringContent71;
