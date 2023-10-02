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
      <div class="container" id="container">
        <div class="box span-row">
          .span-row { grid-row-start: tengah1; grid-row-end: bawah; }
        </div>
        <div class="box">Kotak dua</div>
        <div class="box span-col">
          .span-col { grid-column-start: tengah1; grid-column-end: kanan; }
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
  grid-template-columns:
    [kiri] 1fr
    [tengah1] 1fr
    [tengah2] 1fr
    [kanan];
  grid-template-rows:
    [atas] 100px
    [tengah1] 100px
    [tengah2] 100px
    [bawah];

  gap: 10px;
}

.box {
  background-color: lightgray;
}

.span-row {
  grid-row-start: tengah1; /* dimulai dari garis kolom ke-tengah1 */
  grid-row-end: bawah; /* diakhiri sampai garis baris ke-bawah */
}

.span-col {
  grid-column-start: tengah1; /* dimulai dari garis kolom ke-tengah1 */
  grid-column-end: kanan; /* diakhiri sampai garis baris ke-kanan */
}
`,
  },
};

function PositionManageItemPositionWithNamedLines13() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default PositionManageItemPositionWithNamedLines13;
