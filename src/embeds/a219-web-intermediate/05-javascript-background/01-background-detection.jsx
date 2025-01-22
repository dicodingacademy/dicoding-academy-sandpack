import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Background Detection Example</title>
  
  <!-- My Own -->
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <h1>Background Execution</h1>
  <textarea id="logger" class="logger" readonly></textarea>

  <script src="index.js"></script>
</body>
</html>
`,
  },
  'styles.css': {
    code: `\
:root {
  --background-surface: #efefef;

  --primaryColor: #43281c;
  --secondaryColor: #333d29;

  --color3: #ede0d4;
}

* {
  padding: 0;
  margin: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  background-color: var(--primaryColor);
  padding-block: 20px 15px;

  text-align: center;
  font-weight: 500;
  color: white;
}

.logger {
  display: block;
  margin-block-start: 20px;
  margin-inline: auto;
  border: 0;
  padding: 15px 10px;

  width: 90%;
  height: 250px;
  background-color: var(--color3);

  font-size: 1rem;
  resize: vertical;
}
`,
  },
  'index.js': {
    active: true,
    code: `\
const logElement = document.querySelector('#logger');

function log(text) {
  logElement.innerHTML = \`\${text}\\n\${logElement.innerHTML}\`;
}

// Page Visibility API
let backgroundInitialTime;
window.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    const now = new Date().toLocaleTimeString();
    log(\`Going to the background at \${now}.\`);
    backgroundInitialTime = performance.now();
  } else {
    const timeElapsed = parseInt((performance.now() - backgroundInitialTime) / 1000);
    log(\`Back from the background after \${timeElapsed}s.\`);
  }
});
`,
  },
};

export default function BackgroundDetection01() {
  return (
    <StaticWebSandpack
      files={files}
      options={{
        editorWidthPercentage: 50,
        showConsole: false,
      }}
    />
  );
}
