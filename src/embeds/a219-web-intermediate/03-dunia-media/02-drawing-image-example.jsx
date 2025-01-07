import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    active: true,
    code: `\
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Drawing Image Example</title>
</head>
<body>
  <img
    id="image"
    src="https://picsum.photos/200/100?random=1"
    alt="Image Sample"
    width="200"
    height="100"
  >
  <canvas id="canvas"></canvas>
  
  <script type="module">
    const canvas = document.getElementById('canvas');
    const image = document.getElementById('image');

    // Wait image loaded
    await new Promise((resolve) => (image.onload = resolve));

    const context = canvas.getContext('2d');
    context.drawImage(image, 0, 0, image.width, image.height);
  </script>
</body>
</html>
`,
  },
  'styles.css': {
    hidden: true,
    code: '',
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

export default function DrawingImageExample02() {
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
