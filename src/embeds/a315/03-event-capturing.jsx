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
  <meta charset="UTF-8">
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
        <div align="center" id="dalam">
          DALAM
        </div>
      </div>
    </div>
  </div>

  <script src="index.js"></script>
</body>
</html>
`,
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
  },
  'index.js': {
    code: `\
const divs = Array.from(document.getElementsByTagName('div'));

divs.forEach((div) => {
  div.addEventListener('click', () => {
    alert(\`ELEMEN \${div.getAttribute('id').toUpperCase()}\`);
  }, true);
});
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
