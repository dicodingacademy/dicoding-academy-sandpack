import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>CSS Animation More Example</title>
  
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
@keyframes change-size {
  0% {
    scale: 1;
  }

  25% {
    scale: 0.5;
  }
  
  50% {
    scale: 0.75;
  }
  
  75% {
    scale: 0.25;
  }

  100% {
    scale: 0;
  }
}

.box {
  width: 100px;
  height: 100px;
  background-color: salmon;

  animation-name: change-size;
  animation-duration: 5000ms;
  animation-timing-function: ease-in-out;
  animation-delay: 2000ms;
}
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

export default function CSSAnimationMoreExample02() {
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
