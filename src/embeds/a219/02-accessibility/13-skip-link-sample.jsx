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
    <title>Lorem ipsum dolor.</title>

    <!-- Font Type -->
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
      rel="stylesheet"
    />

    <!-- Own Style -->
    <link rel="stylesheet" href="styles.css" />
    <link rel="stylesheet" href="skip-link.css" />
  </head>
  <body>
    <a href="#maincontent" class="skip-link">Skip To Content</a>

    <header class="card">
      <div class="title">
        <h1>Skip Link Example</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#">Menu 1</a></li>
          <li><a href="#">Menu 2</a></li>
          <li><a href="#">Menu 3</a></li>
          <li><a href="#">Menu 4</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <aside class="side-menu">
        <div class="side-menu__item">
          <h2><a href="#">Lorem ipsum dolor sit amet consectetur.</a></h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae libero
            necessitatibus excepturi iusto autem nisi?
          </p>
        </div>
        <div class="side-menu__item">
          <h2><a href="#">Lorem ipsum dolor sit amet consectetur.</a></h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae libero
            necessitatibus excepturi iusto autem nisi?
          </p>
        </div>
        <div class="side-menu__item">
          <h2><a href="#">Lorem ipsum dolor sit amet consectetur.</a></h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae libero
            necessitatibus excepturi iusto autem nisi?
          </p>
        </div>
        <div class="side-menu__item">
          <h2><a href="#">Lorem ipsum dolor sit amet consectetur.</a></h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae libero
            necessitatibus excepturi iusto autem nisi?
          </p>
        </div>
        <div class="side-menu__item">
          <h2><a href="#">Lorem ipsum dolor sit amet consectetur.</a></h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae libero
            necessitatibus excepturi iusto autem nisi?
          </p>
        </div>
      </aside>
      <div id="maincontent">
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt magnam
          quisquam obcaecati natus, possimus reiciendis provident dolor autem quis
          quaerat, quia alias cumque excepturi eligendi perferendis. Optio impedit dolorem
          doloribus beatae at tempora sit qui! Suscipit ad officia necessitatibus eius,
          voluptatem vel adipisci in. Dolorum, accusantium ex, maxime nulla porro hic
          corrupti reprehenderit aut sequi quo et magni quibusdam id repudiandae facilis
          ratione obcaecati culpa doloremque? Vero, ipsa. Ad deserunt sunt magnam
          voluptatibus aut quis, at in harum magni ipsa corporis dolore numquam animi
          dolores fuga quibusdam eius rem quo?
        </p>
        <img src="https://picsum.photos/600/400" alt="Lorem Ipsum" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos,
          voluptatem consequatur aspernatur distinctio praesentium consequuntur dolores
          inventore vel vero dicta quidem corrupti, animi doloremque quisquam voluptates
          sunt aut culpa expedita necessitatibus nulla consectetur quis error veritatis.
          Esse eligendi in doloribus illo dolore ducimus ex placeat minima quia a, eum,
          laboriosam nesciunt perferendis? Perferendis hic sequi eaque. Quia, dignissimos
          voluptatem ipsam commodi culpa, accusamus officia suscipit maxime necessitatibus
          assumenda perferendis minus quasi, dicta consequatur nihil molestiae ducimus
          sint. Ea ratione, aliquam commodi quam quod aliquid aspernatur quidem fugit qui
          quo suscipit voluptatem tempore sapiente at doloribus mollitia, veritatis
          numquam perspiciatis provident eligendi odio. In, nulla. Impedit, suscipit quis
          iusto vero voluptatibus incidunt sint mollitia velit veritatis! Dignissimos
          distinctio perferendis sequi fuga.
        </p>
      </div>
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

h1,
p {
  padding: 8px 0;
}

body {
  background-color: whitesmoke;
  font-family: 'Roboto', sans-serif;
}

header {
  background-color: white;
  padding: 16px 64px;

  display: grid;
  grid-template-columns: auto 1fr;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
}

header > .title > h1 {
  font-weight: 400;
}

nav {
  display: flex;

  align-items: center;
  justify-content: flex-end;
}

nav ul > li {
  display: inline;
}

nav ul > li > a {
  display: inline-block;
  padding: 1em;
}

main {
  max-width: 1200px;
  padding: 32px;
  margin: 0 auto;

  display: flex;
}

main > .side-menu {
  min-width: 250px;
  margin-right: 32px;
}

main > .side-menu > .side-menu__item > h2 {
  font-size: 1.2em;
}

main > #maincontent > img {
  width: 100%;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
`,
  },
  'skip-link.css': {
    hidden: false,
    code: `\
.skip-link {
  background-color: #bf1722;
  padding: 8px;

  color: white;

  position: absolute;
    top: -40px;
    left: 0;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
`,
  },
};

function SkipLinkSample13() {
  return (
    <StaticWebSandpackPreviewOnly
      files={files}
    />
  );
}

export default SkipLinkSample13;
