import React from 'react';
import WebComponentSandpack from '../../../components/sandpacks/WebComponentSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nested Element Web Component</title>
  </head>
  <body>
    <blog-list></blog-list>

    <script src="main.js"></script>
  </body>
</html>

`,
  },
  'styles.css': {
    hidden: true,
    readOnly: true,
    code: `\
/* Silakan buat styling milik Anda sendiri untuk bereksplorasi */
`,
  },
  'main.js': {
    hidden: false,
    code: `\
import './blog-list.js';
import './blog-item.js';

const blogs = [
  {
    id: 1,
    title: 'Cara Memulai Belajar Pemrograman',
    shortDescription: 'Panduan untuk pemula yang ingin memulai belajar pemrograman.',
  },
  {
    id: 2,
    title: 'Tips Efektif dalam Pengembangan Web',
    shortDescription: 'Tips dan trik untuk menjadi pengembang web yang lebih baik.',
  },
  {
    id: 3,
    title: 'Mengenal Konsep Web Component',
    shortDescription:
      'Pengenalan singkat tentang Web Component dan komponen-komponennya.',
  },
  {
    id: 4,
    title: 'Mengenal Konsep React.js',
    shortDescription: 'Pengenalan singkat tentang React.js dan komponen-komponennya.',
  },
  {
    id: 5,
    title: 'Panduan Penggunaan Vue.js',
    shortDescription: 'Pengenalan singkat tentang Vue.js dan komponen-komponennya.',
  },
  {
    id: 6,
    title: 'Belajar Bahasa Pemrograman Python',
    shortDescription: 'Cara mudah memulai belajar bahasa pemrograman Python.',
  },
];

const blogListEl = document.querySelector('blog-list');
blogListEl.setBlogList(blogs);
`,
  },
  'blog-list.js': {
    hidden: false,
    code: `\
class BlogList extends HTMLElement {
  constructor() {
    super();

    this._blogList = [];

    this._style = document.createElement('style');
  }

  setBlogList(value) {
    this._blogList = value;

    // Render ulang setelah \`blogList\` di-update
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  updateStyle() {
    this._style.textContent = \`
      blog-list {
        display: grid;

        grid-template-columns: 1fr 1fr;
        gap: 1rem;
      }
    \`;
  }

  render() {
    this.updateStyle();

    const blogItemElements = this._blogList.map((item) => {
      const blog = document.createElement('blog-item');
      blog.setBlog(item);

      return blog;
    });

    this.innerHTML = '';
    this.append(this._style, ...blogItemElements);
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

    this._blog = {
      id: 0,
      title: 'NEED_TITLE',
      shortDescription: 'NEED_SHORT_DESCRIPTION',
    };

    this._style = document.createElement('style');
  }

  setBlog(value) {
    this._blog['id'] = value.id;
    this._blog['title'] = value.title;
    this._blog['shortDescription'] = value.shortDescription;

    // Render ulang setelah \`blog\` di-update
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  updateStyle() {
    this._style.textContent = \`
      blog-item {
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
    \`;
  }

  render() {
    this.updateStyle();

    this.setAttribute('data-id', this._blog.id);

    this.innerHTML = \`
      \${this._style.outerHTML}

      <h5 class="blog__title">
        <a href="#">\${this._blog.title}</a>
      </h5>
      <div class="blog__description">
        <p>\${this._blog.shortDescription}</p>
      </p>
    \`;
  }
}

customElements.define('blog-item', BlogItem);
`,
  },
};

function NestedElement07() {
  return (
    <WebComponentSandpack
      files={files}
      options={{
        editorWidthPercentage: 55,
      }}
    />
  );
}

export default NestedElement07;
