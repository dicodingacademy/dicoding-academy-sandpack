import React from 'react';
import WebComponentSandpack from '../../../components/sandpacks/WebComponentSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <title>Template Implementation</title>

    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <template id="blogItem">
      <style>
        :host {
          padding: 1rem 0.8rem;
          display: block;

          border-radius: 4px;
          box-shadow: 0 0 2px 2px #33333377;
        }

        .blog__title {
          margin-block-start: 0;
          margin-block-end: 1rem;

          font-size: 1.3em;
          font-weight: bold;
        }

        p {
          margin-block-start: 0;
        }
      </style>

      <h5 class="blog__title">
        <slot name="title">Judul Artikel</slot>
      </h5>
      <div class="blog__description">
        <slot name="short-description">Deskripsi pendek artikel</slot>
      </div>
    </template>

    <blog-list>
      <blog-item data-id="1">
        <a href="#" slot="title">Cara Memulai Belajar Pemrograman</a>
        <p slot="short-description">
          Panduan untuk pemula yang ingin memulai belajar pemrograman.
        </p>
      </blog-item>
      <blog-item data-id="2">
        <a href="#" slot="title">Tips Efektif dalam Pengembangan Web</a>
        <p slot="short-description">
          Tips dan trik untuk menjadi pengembang web yang lebih baik.
        </p>
      </blog-item>
      <blog-item data-id="3">
        <a href="#" slot="title">Mengenal Konsep Web Component</a>
        <p slot="short-description">
          Pengenalan singkat tentang Web Component dan komponen-komponennya.
        </p>
      </blog-item>
    </blog-list>

    <hr>

    <blog-list>
      <blog-item></blog-item>
      <blog-item></blog-item>
      <blog-item></blog-item>
    </blog-list>

    <script src="main.js"></script>
  </body>
</html>
`,
  },
  'styles.css': {
    hidden: false,
    readOnly: false,
    code: '',
  },
  'main.js': {
    hidden: false,
    code: `\
import './blog-list.js';
import './blog-item.js';
`,
  },
  'blog-list.js': {
    hidden: false,
    code: `\
class BlogList extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
  }

  connectedCallback() {
    this.render();
  }

  updateStyle() {
    this._style.textContent = \`
      :host {
        display: grid;

        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
      }
    \`;
  }

  render() {
    this.updateStyle();

    const slot = document.createElement('slot');
    slot.textContent = \`
      <blog-item></blog-item>
      <blog-item></blog-item>
      <blog-item></blog-item>
    \`;

    this._shadowRoot.append(this._style, slot);
  }
}

customElements.define('blog-list', BlogList);
`,
  },
  'blog-item.js': {
    hidden: false,
    code: `\
class BlogItem extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._template = document.querySelector('template#blogItem').content.cloneNode(true);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._shadowRoot.appendChild(this._template);
  }
}

customElements.define('blog-item', BlogItem);
`,
  },
};

function TemplateImplementation15() {
  return (
    <WebComponentSandpack
      files={files}
      options={{
        editorWidthPercentage: 55,
      }}
    />
  );
}

export default TemplateImplementation15;
