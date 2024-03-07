import React from 'react';
import StaticWebSandpackPreviewOnly from '../../../components/sandpacks/StaticWebSandpackPreviewOnly';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Giving Tab Index</title>

    <link rel="stylesheet" type="text/css" href="style.css" />
  </head>
  <body>
    <header>
      <h1 tabindex="0">Personal Blog</h1>
    </header>

    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>

    <main>
      <h2 tabindex="0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      <p tabindex="0">
        Published at <time datetime="2018-07-07">July 7</time> in London's Hyde Park.
      </p>
      <img tabindex="0" src="https://picsum.photos/600/300" />
      <p tabindex="0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus erat
        auctor fringilla pharetra. In in mauris nec ex lobortis maximus sed ut justo.
      </p>
    </main>
  </body>
</html>
`,
  },
  'styles.css': {
    hidden: false,
    code: `\
* {
  padding: 0;
  margin: 0;

  box-sizing: border-box;
}

.container {
  max-width: 515px;
  width: 90%;

  margin: 30px auto;
}

button {
  width: 150px;
  background-color: transparent;

  border: 1px solid black;
  border-radius: 8px;
  padding: 10px 15px;
  margin: 10px;

  font-family: sans-serif;
  font-size: 16px;
}

button:active {
  background-color: greenyellow;
}

.row {
  overflow: auto;
}
`,
  },
  'index.js': {
    hidden: false,
    code: '',
  },
};

function GivingTabIndex07() {
  return (
    <StaticWebSandpackPreviewOnly
      files={files}
    />
  );
}

export default GivingTabIndex07;
