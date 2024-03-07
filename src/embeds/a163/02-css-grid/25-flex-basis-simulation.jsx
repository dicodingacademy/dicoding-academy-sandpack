import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    active: true,
    code: `\
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Flex Basis Simulation</title>

    <link rel="stylesheet" href="https://codepen.io/web-dot-dev/pen/abpoXGZ.css" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <main>
      <h1 style="text-align: center; margin-block-end: 32px">Flex Basis Simulation</h1>

      <div class="controls">
        <label>
          Ubah <code>flex-direction</code> untuk <code>.result</code>:
          <select id="switcher">
            <option value="row">row</option>
            <option value="row-reverse">row-reverse</option>
            <option value="column">column</option>
            <option value="column-reverse">column-reverse</option>
          </select>
        </label>
      </div>

      <div class="container" id="container">
        <div>
          Nilai <code>flex-direction</code> untuk <code>.box</code>:
          <span id="currentSize"></span>%
        </div>
        <div class="result" style="margin-block-start: 4px">
          <div class="box bg-primary color-light"></div>
        </div>
      </div>
    </main>

    <script src="index.js"></script>
  </body>
</html>
`,
  },
  'styles.css': {
    code: `\
main {
  padding: 16px;
  margin-inline: auto;

  width: 100%;
  max-width: 800px;
}

.container {
  margin-block-start: 16px;
}

.result {
  display: flex;

  max-width: 100%;
  width: 500px;
  max-height: 100%;
  height: 500px;

  align-items: start;
}

.box {
  flex-basis: 20%;
  max-width: none;

  padding: var(--metric-box-spacing);
  border: 1px solid var(--color-stroke);

  font-weight: 500;
  text-align: center;

  box-shadow: var(--generic-shadow);
  animation: loop 1500ms linear 0s infinite alternate forwards;
}

@keyframes loop {
  0% {
    flex-basis: 20%;
  }
  20% {
    flex-basis: 30%;
  }
  40% {
    flex-basis: 45%;
  }
  60% {
    flex-basis: 65%;
  }
  80% {
    flex-basis: 85%;
  }
  100% {
    flex-basis: 100%;
  }
}
`,
  },
  'index.js': {
    code: `\
document.addEventListener('DOMContentLoaded', () => {
  const switcher = document.querySelector('#switcher');
  const size = document.querySelector('#currentSize');
  const result = document.querySelector('.result');
  const box = document.querySelector('.box');

  switcher.addEventListener('change', (event) => {
    result.style.flexDirection = event.target.value;
  });

  setInterval(() => {
    const value = window.getComputedStyle(box).flexBasis;
    size.textContent = Number.parseInt(value);
  }, 0);
});
`,
  },
};

function FlexBasisSimulation25() {
  return (
    <StaticWebSandpack
      files={files}
      options={{
        editorWidthPercentage: 50,
      }}
    />
  );
}

export default FlexBasisSimulation25;
