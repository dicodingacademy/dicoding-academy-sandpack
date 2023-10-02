import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>CSS Grid Area</title>

    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="grid">
      <header>
        <p>Header Content</p>
      </header>

      <main>
        <p>Main Content</p>
      </main>

      <aside>
        <p>Side Content</p>
      </aside>

      <footer>
        <p>Footer Content</p>
      </footer>
    </div>
  </body>
</html>
`,
  },
  'styles.css': {
    active: true,
    code: `\
* {
  box-sizing: border-box;
}

body,
.grid {
  min-height: 95vh;

  font-family: Arial, Helvetica, sans-serif;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 5fr 2fr;

  grid-template-areas:
    'header  header  header  header'
    'content content content sidebar'
    'footer  footer  footer  footer';
}

.grid > * {
  display: flex;
}

.grid > * p {
  margin: auto;

  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

header {
  grid-area: header;

  background-color: lightsalmon;
}

main {
  grid-area: content;

  background-color: lightblue;
}

aside {
  grid-area: sidebar;

  background-color: lightgreen;
}

footer {
  grid-area: footer;

  background-color: lightgrey;
}

@media (max-width: 500px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 5fr 2fr 2fr;
    grid-template-areas:
      'header  header  header'
      'content content content'
      'sidebar sidebar sidebar'
      'footer  footer  footer';
  }
}
`,
  },
};

function Area15() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default Area15;
