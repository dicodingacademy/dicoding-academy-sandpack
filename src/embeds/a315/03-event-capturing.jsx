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
    <title>Capturing World</title>
    
    <link rel="stylesheet" href="styles.css" >
  </head>
  <body>
    <div align="center" id="langit">
      LANGIT
      <div align="center" id="luar">
        LUAR
        <div align="center" id="tengah">
          TENGAH
          <div align="center" id="dalam">DALAM</div>
        </div>
      </div>
    </div>

    <script src="index.js"></script>
  </body>
</html>
`,
  },
  'styles.css': {
    hidden: true,
    code: `\
body div {
  width: 60%;

  margin: 8px;
  padding: 5px;
  border: 2px solid black;
}
`,
  },
  'index.js': {
    hidden: false,
    code: `\
const divs = document.getElementsByTagName('div');

for (let el of divs) {
  el.addEventListener('click', function () {
    alert('ELEMEN ' + el.getAttribute('id').toUpperCase());
  });
}
`,
  },
};

function EventCapturing03() {
  return (
    <StaticWebSandpack
      files={files}
      options={{
        editorWidthPercentage: 55,
      }}
    />
  );
}

export default EventCapturing03;
