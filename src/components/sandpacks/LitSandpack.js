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
    "lit": "2.4.1",
    "lit-html": "2.4.0"
  },
  "devDependencies": {
    "parcel-bundler": "^1.6.1"
  },
  "keywords": []
}
 `,
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
  "presets": ["es2017"],
  "plugins": [
    [
      "transform-runtime",
      {
        "polyfill": false,
        "regenerator": true
      }
    ],
    "transform-object-rest-spread"
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
import "./styles.css";
import { LitElement } from "lit";
import { html } from "lit-html";

class HelloWorld extends LitElement {
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
  'src/styles.css': {
    code: `\
body {
  font-family: sans-serif;
}
`,
    hidden: false,
  },
};

function LitSandpack({ files }) {
  return (
    <BaseSandpack
      template="vanilla"
      files={{ ...shouldNotChangeFiles, ...changableFiles, ...files }}
    />
  );
}

LitSandpack.propTypes = {
  files: PropTypes.any,
};

LitSandpack.defaultProps = {
  files: {},
};

export default LitSandpack;
