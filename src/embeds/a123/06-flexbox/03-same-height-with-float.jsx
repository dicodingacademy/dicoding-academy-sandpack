import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    hidden: false,
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Same Height With Float</title>

    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div id="app">
      <main>
        <section tabindex="0" id="productList" class="product-list">
          <article tabindex="0" class="product-item">
            <header class="product__image">
              <img src="https://academy-sandpack.dicoding.dev/assets/imac.jpg" alt="iMac" width="100%" />
            </header>
            <main>
              <h5 class="product__title">Computer</h5>
              <div class="product__description">
                This is the best computer money can buy, if you don't have much money.
                <ul>
                  <li>Computer</li>
                  <li>Monitor</li>
                  <li>Keyboard</li>
                  <li>Mouse</li>
                </ul>
              </div>
            </main>
          </article>

          <article tabindex="0" class="product-item">
            <header class="product__image">
              <img
                src="https://academy-sandpack.dicoding.dev/assets/iphone.jpg"
                alt="iphone"
                width="100%"
              />
            </header>
            <main>
              <h5 class="product__title">Smartphone</h5>
              <div class="product__description">
                This is the best cellphone.
                <ul>
                  <li>Cellphone</li>
                  <li>Earphone</li>
                </ul>
              </div>
            </main>
          </article>
        </section>
        <div class="clear"></div>
      </main>

      <footer style="background-color: lightskyblue">Footer Content</footer>
    </div>
  </body>
</html>
`,
  },
  'styles.css': {
    hidden: false,
    active: true,
    code: `\
* {
  box-sizing: border-box;
  margin: 0;
}

.product-list > .product-item {
  float: left;

  width: 50%;

  /* Nyalakan kode berikut agar mencapai kesamaan tinggi */
  /* height: 400px; */
}

.product-item {
  border: 1px solid black;

  transition: all 150ms ease-in;
}

.product-item main {
  padding: 16px;
}

.product-item .product__title {
  font-size: 2rem;
  margin: 0;
}

.product-item .char__description {
  margin-block: 0.5rem;
}

.clear {
  clear: both;
}

footer {
  padding: 18px 28px;
}
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function SameHeightWithFloat03() {
  return (
    <StaticWebSandpack
      files={files}
      options={{
        showConsoleButton: false,
        editorWidthPercentage: 55,
      }}
    />
  );
}

export default SameHeightWithFloat03;
