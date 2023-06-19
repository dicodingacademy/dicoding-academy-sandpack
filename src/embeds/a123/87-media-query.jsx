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
          <li>
            <a href="#">Lorem, ipsum.</a>
          </li>
          <li>
            <a href="#">Lorem, ipsum.</a>
          </li>
          <li>
            <a href="#">Lorem, ipsum.</a>
          </li>
          <li>
            <a href="#">Lorem, ipsum.</a>
          </li>
        </ul>
      </aside>
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

main {
  display: flex;

  flex-direction: column;
}

main aside {
  order: -1;
}

/* CSS rule dalam block @media di bawah akan diterapkan jika ukuran viewport di atas 600px */
@media screen and (min-width: 600px) {
  h1 {
    color: red;
  }

  h2 {
    color: green;
  }
}

/* CSS rule dalam block @media di bawah akan diterapkan jika ukuran viewport di atas 992px */
@media screen and (min-width: 992px) {
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
    code: '',
    hidden: true,
  },
};

function MediaQuery87() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default MediaQuery87;
