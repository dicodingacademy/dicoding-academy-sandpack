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
    <div class="content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eius explicabo fuga
        iusto magni minus odit praesentium, quasi quisquam quos repellat suscipit tempora tenetur?
        Assumenda cum laborum officiis quos ratione.
      </p>
    </div>
  </body>
</html>
`,
  },
  'styles.css': {
    code: `\
.content {
  max-width: 800px;
  height: 400px;

  margin-left: auto;
  margin-right: auto;
  background-color: deeppink;
}

p {
  font-size: 1.5em;
  font-weight: bold;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function LimitingDimensions64() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default LimitingDimensions64;
