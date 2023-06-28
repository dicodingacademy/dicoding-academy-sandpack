import React from 'react';
import PropTypes from 'prop-types';
import BaseSandpack from './base/BaseSandpack';

function VanillaSandpack({ files, options }) {
  return (
    <BaseSandpack template="vanilla" files={files} options={options} />
  );
}

VanillaSandpack.propTypes = {
  files: PropTypes.any,
  options: PropTypes.any,
};

VanillaSandpack.defaultProps = {
  files: {},
  options: {},
};

export default VanillaSandpack;
