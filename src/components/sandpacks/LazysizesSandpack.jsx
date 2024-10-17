import React from 'react';
import PropTypes from 'prop-types';
import BaseSandpack from './base/BaseSandpack';

const shouldNotChangeFiles = {
  'package.json': {
    hidden: true,
    readOnly: true,
    code: `\
{
  "name": "lazysizes-sandpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "parcel index.html --open",
    "build": "parcel build index.html"
  },
  "dependencies": {
    "@babel/plugin-syntax-class-properties": "7.12.13",
    "babel-plugin-transform-class-properties": "6.24.1",
    "lazysizes": "^5.3.2"
  },
  "devDependencies": {
    "parcel-bundler": "^1.6.1"
  },
  "keywords": []
}
`,
  },
  'sandbox.config.json': {
    hidden: true,
    readOnly: true,
    code: `\
{
  "infiniteLoopProtection": true,
  "hardReloadOnChange": true,
  "view": "browser"
}
`,
  },
  '.babelrc': {
    hidden: true,
    readOnly: true,
    code: `\
{
  "presets": [
    "es2016"
  ],
  "plugins": [
    [
      "transform-runtime",
      {
        "polyfill": false,
        "regenerator": true
      }
    ],
    "transform-object-rest-spread",
    "syntax-class-properties",
    "transform-class-properties"
  ]
}
`,
  },
};

const changableFiles = {
  'index.html': {
    hidden: false,
    active: true,
    readOnly: false,
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>Lazysizes Example</title>
  </head>
  <body>
    <ul class="images-list">
      <li>
        <img
          class="lazyload" 
          src="https://picsum.photos/1200/800?random=1"
          data-src="https://picsum.photos/1200/800?random=1"
          alt=""
        >
      </li>
      <li>
        <img
          class="lazyload" 
          src="" 
          data-src="https://picsum.photos/1200/800?random=2"
          alt=""
        >
      </li>
      <li>
        <img
          class="lazyload" 
          src="" 
          data-src="https://picsum.photos/1200/800?random=3"
          alt=""
        >
      </li>
      <li>
        <img
          class="lazyload" 
          src="" 
          data-src="https://picsum.photos/1200/800?random=4"
          alt=""
        >
      </li>
      <li>
        <img
          class="lazyload" 
          src="" 
          data-src="https://picsum.photos/1200/800?random=5"
          alt=""
        >
      </li>
    </ul>
  
    <script src="index.js"></script>
  </body>
</html>
`,
  },
  'styles.css': {
    readOnly: false,
    code: `\
.images-list {
  padding: 0;
  margin: 0;
  list-style: none;

  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

li {
  background-color: #fff;
  min-height: 400px;
  padding: 4px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.075);
  transition: border .2s ease-in-out;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
`,
  },
  'index.js': {
    readOnly: false,
    code: `\
import './styles.css';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// Do your work here...
`,
  },
};

export default function LazysizesSandpack({ files, options }) {
  return (
    <BaseSandpack
      template="vanilla"
      files={{ ...shouldNotChangeFiles, ...changableFiles, ...files }}
      options={options}
    />
  );
}

LazysizesSandpack.propTypes = {
  files: PropTypes.any,
  options: PropTypes.any,
};

LazysizesSandpack.defaultProps = {
  files: {},
  options: {},
};
