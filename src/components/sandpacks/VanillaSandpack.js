import React from 'react';
import PropTypes from 'prop-types';
import BaseSandpack from './base/BaseSandpack';

function VanillaSandpack({ files }) {
  return (
    <BaseSandpack template="vanilla" files={files} />
  );
}

VanillaSandpack.propTypes = {
  files: PropTypes.any,
};

VanillaSandpack.defaultProps = {
  files: {},
};

export default VanillaSandpack;
