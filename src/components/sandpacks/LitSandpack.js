import React from 'react';
import PropTypes from 'prop-types';
import BaseSandpack from './base/BaseSandpack';

const shouldNotChangeFiles = {
  'package.json': {
    code: `\
{
  "name": "litelement",
  "version": "1.0.0",
  "description": "",
  "main": "index.html",
  "scripts": {
    "start": "parcel index.html --open",
    "build": "parcel build index.html"
  },
  "dependencies": {
    "@babel/plugin-syntax-class-properties": "7.12.13",
    "babel-plugin-transform-class-properties": "6.24.1",
    "lit": "2.4.1"
  },
  "devDependencies": {
    "parcel-bundler": "^1.6.1"
  },
  "keywords": []
}`,
    hidden: true,
  },
  'sandbox.config.json': {
    code: `\
{
  "infiniteLoopProtection": true,
  "hardReloadOnChange": true,
  "view": "browser"
}

`,
    hidden: true,
  },
  '.babelrc': {
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
    hidden: true,
  },
};

const changableFiles = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Parcel Sandbox</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <hello-world></hello-world>

    <script src="src/index.js"></script>
  </body>
</html>
    `,
    hidden: false,
  },
  'src/index.js': {
    code: `\
import { LitElement, html, css } from "lit";

class HelloWorld extends LitElement {
  static styles = css\`
    :host {
      font-family: sans-serif;
    }
    
    h1 {
      color: red;
    }
  \`;

  render() {
    return html\`
     <h1>Hello, World!</h1>
    \`;
  }
}

customElements.define("hello-world", HelloWorld);

`,
    hidden: false,
  },
};

function LitSandpack({ files, options }) {
  return (
    <BaseSandpack
      template="vanilla"
      files={{ ...shouldNotChangeFiles, ...changableFiles, ...files }}
      options={options}
    />
  );
}

LitSandpack.propTypes = {
  files: PropTypes.any,
  options: PropTypes.any,
};

LitSandpack.defaultProps = {
  files: {},
  options: {},
};

export default LitSandpack;
