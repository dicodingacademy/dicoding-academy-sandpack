import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>CSS Animation Example</title>
  
  <link rel="stylesheet" href="styles.css" >
</head>
<body>
  <div class="box"></div>
</body>
</html>
`,
  },
  'styles.css': {
    active: true,
    code: `\
@keyframes change-color {
  0% {
    background-color: #fff;
  }

  50% {
    background-color: #f3f3f3;
  }

  100% {
    background-color: #000;
  }
}

.box {
  width: 100px;
  height: 100px;

  animation-name: change-color;
  animation-duration: 5000ms; /* sama dengan 5s */
}
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

export default function CSSAnimationExample01() {
  return (
    <StaticWebSandpack
      files={files}
      options={{
        editorWidthPercentage: 55,
        showConsole: false,
      }}
    />
  );
}
