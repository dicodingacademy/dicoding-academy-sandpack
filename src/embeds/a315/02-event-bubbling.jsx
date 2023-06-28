import React from 'react';
import StaticWebSandpack from '../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Bubbling World</title>
    
    <link rel="stylesheet" href="styles.css" >
  </head>
  <body>
    <div onclick="alert('ELEMEN LANGIT')" align="center">
      LANGIT
      <div onclick="alert('ELEMEN LUAR')" align="center">
        LUAR
        <div onclick="alert('ELEMEN TENGAH')" align="center">
          TENGAH
          <div onclick="alert('ELEMEN DALAM')" align="center">DALAM</div>
        </div>
      </div>
    </div>
  </body>
</html>
`,
    hidden: false,
    active: true,
  },
  'styles.css': {
    code: `\
body div {
  width: 60%;

  margin: 8px;
  padding: 5px;
  border: 2px solid black;
}
`,
    hidden: true,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function EventBubbling02() {
  return (
    <StaticWebSandpack
      files={files}
      options={{
        editorWidthPercentage: 55,
      }}
    />
  );
}

export default EventBubbling02;
