import React from 'react';
import StaticWebSandpack from '../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Judul Dokumen</title>

    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header>
      <h1>Inheritance di CSS</h1>
    </header>
    <main>
      <h2>Lorem Ipsum</h2>

      <article>
        <h3>Lorem, ipsum dolor.</h3>
        <p>
          Pellentesque venenatis mi sit amet erat tincidunt auctor. Curabitur tincidunt tellus ac
          convallis dictum. Morbi luctus leo eget leo luctus elementum. Cras at ligula eu elit
          blandit venenatis.
        </p>
      </article>
    </main>
    <footer>
      <p>Hak Cipta &copy; 2023</p>
    </footer>
  </body>
</html>
`,
    hidden: false,
    active: true,
  },
  'style.css': {
    code: `\
body {
  font-family: sans-serif;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function CSSInheritanceSample30() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default CSSInheritanceSample30;
