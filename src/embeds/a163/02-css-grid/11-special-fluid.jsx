import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Special Fluid</title>

    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <main>
      <div class="container">
        <div>A</div>
        <div>B</div>
        <div>C</div>
        <div>D</div>
        <div>E</div>
        <div>F</div>
        <div>G</div>
        <div>H</div>
        <div>I</div>
        <div>J</div>
        <div>K</div>
        <div>L</div>
        <div>M</div>
        <div>N</div>
        <div>O</div>
        <div>P</div>
        <div>Q</div>
        <div>R</div>
        <div>S</div>
        <div>T</div>
        <div>U</div>
        <div>V</div>
        <div>W</div>
        <div>X</div>
        <div>Y</div>
        <div>Z</div>
      </div>
    </main>
  </body>
</html>
`,
  },
  'styles.css': {
    active: true,
    code: `\
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));

  gap: 1rem;
}

.container > div {
  background: #ede7f6;

  padding: 1rem;
  border-radius: 0.5rem;

  text-align: center;
}
`,
  },
};

function SpecialFluid11() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default SpecialFluid11;
