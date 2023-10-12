import React from 'react';
import PropTypes from 'prop-types';
import BaseSandpack from './base/BaseSandpack';

const shouldNotChangeFiles = {
  'package.json': {
    hidden: true,
    readOnly: true,
    code: `\
{
  "name": "web-component-sandpack",
  "version": "1.0.0",
  "description": "",
  "main": "src/main.js",
  "scripts": {
    "start": "parcel index.html --open",
    "build": "parcel build index.html"
  },
  "dependencies": {
    "@babel/plugin-syntax-class-properties": "7.12.13",
    "babel-plugin-transform-class-properties": "6.24.1"
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
    active: false,
    readOnly: false,
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>Web Component Example</title>

    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <hello-world></hello-world>
  
    <script src="main.js"></script>
  </body>
</html>
`,
  },
  'index.js': {
    hidden: true,
    active: false,
    readOnly: true,
    code: '',
  },
  'main.js': {
    hidden: false,
    active: true,
    readOnly: false,
    code: `\
class HelloWorld extends HTMLElement {
  constructor() {
    super();

    this.textContent = 'Hello World!';
  }
}

customElements.define('hello-world', HelloWorld);
`,
  },
  'styles.css': {
    hidden: false,
    active: false,
    readOnly: false,
    code: '',
  },
};

function WebComponentSandpack({ files, options }) {
  return (
    <BaseSandpack
      template="vanilla"
      files={{ ...shouldNotChangeFiles, ...changableFiles, ...files }}
      options={options}
    />
  );
}

WebComponentSandpack.propTypes = {
  files: PropTypes.any,
  options: PropTypes.any,
};

WebComponentSandpack.defaultProps = {
  files: {},
  options: {},
};

export default WebComponentSandpack;
