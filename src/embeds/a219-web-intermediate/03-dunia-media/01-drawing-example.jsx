import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Drawing Canvas Example</title>
  
  <script src="index.js" defer></script>
</head>
<body>
  <canvas id="canvas"></canvas>
</body>
</html>
`,
  },
  'styles.css': {
    hidden: true,
    code: '',
  },
  'index.js': {
    active: true,
    hidden: false,
    code: `\
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

context.fillStyle = 'green';
context.fillRect(10, 10, 150, 100);
`,
  },
};

export default function DrawingExample01() {
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
