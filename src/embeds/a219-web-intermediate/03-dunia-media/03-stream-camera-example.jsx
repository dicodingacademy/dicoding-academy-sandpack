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
  <title>Stream Camera Example</title>
  
  <style>
    video {
      width: 100%;
    }
  </style>
  
  <script src="index.js" defer></script>
</head>
<body>
  <button id="startButton" class="button">Start Video</button>

  <video id="video"></video>

  <div id="log"></div>
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
    code: `\
const videoElement = document.getElementById('video');
const logElement = document.getElementById('log');

function log(msg) {
  logElement.innerHTML += \`\${msg}<br>\`;
}

function handleError(reason) {
  log(\`Error <code>\${reason.name}</code>: \${reason.message}\`);
}

async function startVideo() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });

    videoElement.srcObject = stream;
    videoElement.play();
  } catch (error) {
    handleError('An error occurred:', error);
  }
}

document.getElementById('startButton').addEventListener('click', () => {
  startVideo();
});
`,
  },
};

export default function StreamCameraExample03() {
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
