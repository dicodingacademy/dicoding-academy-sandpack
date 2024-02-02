import React from 'react';
import PropTypes from 'prop-types';
import BaseSandpack from './base/BaseSandpack';

const baseFiles = {
  'package.json': {
    code: `\
{
  "dependencies": {
    "@tensorflow/tfjs": "4.17.0"
  },
  "main": "/index.js",
  "devDependencies": {}
}
    `,
    hidden: true,
  },
  'index.js': {
    code: `\
import * as tf from "@tensorflow/tfjs";

const constant = tf.initializers.constant({ value: 7 });
console.log(constant);
`,
  },
};

function TFJSSandpack({ files, options }) {
  return (
    <BaseSandpack
      template="vanilla"
      files={{ ...baseFiles, ...files }}
      options={options}
    />
  );
}

TFJSSandpack.defaultProps = {
  files: {},
  options: {},
};

TFJSSandpack.propTypes = {
  files: PropTypes.object,
  options: PropTypes.object,
};

export default TFJSSandpack;
