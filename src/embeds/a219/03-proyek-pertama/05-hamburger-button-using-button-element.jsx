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
    <title>Anchor for Button Element</title>

    <link rel="stylesheet" href="styles.css" >
    <script defer src="index.js"></script>
  </head>
  <body>
    <header>
      <nav>
        <ul id="nav-list">
          <li><a href="#">Reports</a></li>
          <li><a href="#">Bookmark</a></li>
          <li><a href="#">New</a></li>
        </ul>
      </nav>

      <button id="drawer-button">☰</button>
    </header>
  </body>
</html>
`,
  },
  'index.js': {
    code: `\
const drawerButton = document.querySelector('#drawer-button');
const drawerNavigation = document.querySelector('#nav-list');

drawerButton.addEventListener('click', () => {
  drawerNavigation.classList.toggle('open');
});

document.body.addEventListener('click', (event) => {
  if (!drawerNavigation.contains(event.target) && !drawerButton.contains(event.target)) {
    drawerNavigation.classList.remove('open');
  }
});
`,
  },
  'styles.css': {
    code: `\
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
}

header {
  display: flex;
  justify-content: space-between;
}
    
ul {
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 8px;

  min-height: 100vh;
  width: 200px;
  padding: 20px 10px;
  background-color: white;

  position: fixed;
  top: 0;
  left: 0;

  transform: translateX(-100%);
  transition: all 500ms ease-in-out;
  z-index: 9999;
}

ul li a {
  display: block;
  padding: 10px 20px;
  border-radius: 4px;

  color: #141e16;
  text-decoration: none;
  
  transition: all 150ms ease-in-out;
}

ul li a:hover {
  background-color: #141e16;
  color: #ccc;
}

ul.open {
  transform: translateX(0);
  box-shadow: 2px 0 6px 0 #777;
}
    
button {
  padding: 8px;
  border: 0;
  border-radius: 4px;
  background-color: transparent;

  font-weight: bold;
  font-size: 28px;
  color: #141e16;

  cursor: pointer;
}    
`,
  },
};

export default function HamburgerButtonUsingButtonElement05() {
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
