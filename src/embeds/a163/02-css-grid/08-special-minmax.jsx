import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Special Unit</title>

    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <main>
      <div class="container">
        <div style="background-color: lightsalmon" class="box1"></div>
        <div style="background-color: lightblue" class="box2"></div>
        <div style="background-color: lightgreen" class="box3"></div>
        <div style="background-color: lightpink" class="box4"></div>
        <div style="background-color: lightgray" class="box5"></div>
        <div style="background-color: lightseagreen" class="box6"></div>
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
  grid-template-columns: minmax(100px, 1fr) 250px 25%;
  grid-auto-rows: 150px;

  gap: 10px;
}
`,
  },
};

function SpecialMinmax08() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default SpecialMinmax08;
