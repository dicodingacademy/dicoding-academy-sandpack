import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    active: true,
    code: `\
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Skip To Content Sample</title>
  
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div style="margin-block-end: 16px; padding: 8px; border: 2px solid red">
    Klik di sini biar kibor fokus di aku dulu!<br>
    Lalu, klik tombol Tab di kibor.
  </div>

  <header>
    <a href="#main-content" class="skip-to-content">Skip to main content</a>
    <nav>
      <ul>
        <li><a href="#">Menu item 1</a></li>
        <li><a href="#">Menu item 2</a></li>
        <li><a href="#">Menu item 3</a></li>
        <li><a href="#">Menu item 4</a></li>
        <li><a href="#">Menu item 5</a></li>
      </ul>
    </nav>
  </header>

  <main tabindex="-1" id="main-content">
    <h1>Hello world!</h1>
    <div>
      Cupcake ipsum dolor sit amet soufflé gingerbread.
      Tart cake biscuit cotton candy cake donut cake marshmallow jelly beans.
      Oat cake shortbread pudding soufflé cookie dragée icing.
      Danish <a href="#">gummi bears</a> donut cake lollipop jelly-o.
      Candy toffee croissant fruitcake soufflé sesame snaps bonbon bear claw.
      Jelly toffee bear claw sweet dragée marshmallow bonbon cookie jelly.
      Cupcake gingerbread brownie tiramisu.
      Pastry danish fruitcake sugar plum candy jelly beans jelly-o.
    </div>
  </main>
</body>
</html>
`,
  },
  'styles.css': {
    code: `\
:root {
  font-family: segoe UI, system-ui, -apple-system, sans-serif;
}

ul {
  list-style: none;
  padding-inline-start: 0;
  
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.skip-to-content {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  color: red;
}

.skip-to-content:focus {
  position: unset !important;
}
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

export default function SkipToContentSample10() {
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
