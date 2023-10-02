import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Position Manage Item Position</title>

    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <main>
      <div class="container" id="container">
        <div class="box span-row">
          .span-row { grid-row-start: 2; grid-row-end: 4; }
        </div>
        <div class="box">Kotak dua</div>
        <div class="box span-col">
          .span-col { grid-column-start: 2; grid-column-end: 4; }
        </div>
        <div class="box">Kotak empat</div>
        <div class="box">Kotak lima</div>
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
  max-width: 60%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  gap: 10px;
}

.box {
  background-color: lightgray;
}

.span-row {
  grid-row-start: 2; /* dimulai dari garis baris ke-2 */
  grid-row-end: 4; /* diakhiri sampai garis baris ke-4 */
}

.span-col {
  grid-column-start: 2; /* dimulai dari garis kolom ke-2 */
  grid-column-end: 4; /* diakhiri sampai garis baris ke-4 */
}
`,
  },
};

function PositionManageItemPosition12() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default PositionManageItemPosition12;
