import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Media Query Example</title>

  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header>
    <h1>Penggunaan CSS Media Query</h1>
  </header>
  <main>
    <div id="mainContent">
      <h2>Lorem Ipsum</h2>

      <article>
        <h3>Lorem, ipsum dolor.</h3>
        <p>
          Pellentesque venenatis mi sit amet erat tincidunt auctor. Curabitur tincidunt tellus ac
          convallis dictum. Morbi luctus leo eget leo luctus elementum. Cras at ligula eu elit
          blandit venenatis.
        </p>
      </article>
      <article>
        <h3>Lorem, ipsum dolor.</h3>
        <p>
          Nullam varius ex quis placerat dapibus. Vestibulum bibendum luctus tincidunt. Proin
          cursus velit non magna blandit hendrerit. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Cras posuere ac tellus a iaculis.
        </p>
      </article>
      <article>
        <h3>Lorem, ipsum dolor.</h3>
        <p>
          Donec pretium orci quis mauris tristique finibus sed sed felis. Nunc luctus dui et ex
          hendrerit, et feugiat ex vehicula.
        </p>
      </article>
    </div>

    <aside>
      <h3>Menu</h3>
      <ul>
        <li><a href="#">Lorem, ipsum.</a></li>
        <li><a href="#">Lorem, ipsum.</a></li>
        <li><a href="#">Lorem, ipsum.</a></li>
        <li><a href="#">Lorem, ipsum.</a></li>
      </ul>
    </aside>
  </main>
  <footer>
    <p>Hak Cipta &copy; 2023</p>
  </footer>
</body>
</html>
`,
  },
  'styles.css': {
    code: `\
body {
  font-family: sans-serif;
}

main {
  display: flex;

  flex-direction: column;
}

main aside {
  order: -1;
}

/* Styles dalam block berikut akan diterapkan saat lebar viewport minimal 400 piksel. */
@media screen and (min-width: 400px) {
  h1 {
    color: red;
  }

  h2 {
    color: green;
  }
}

/* Styles dalam block berikut akan diterapkan saat lebar viewport minimal 600 piksel. */
@media screen and (min-width: 600px) {
  main {
    flex-direction: row;
  }

  #mainContent {
    flex-basis: 70%;
  }

  main aside {
    flex-basis: 30%;

    order: 1;
  }

  h1 {
    color: initial;
  }

  h2 {
    color: initial;
  }

  h3 {
    color: green;
  }
}
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function MediaQuery87() {
  return (
    <StaticWebSandpack
      files={files}
    />
  );
}

export default MediaQuery87;
