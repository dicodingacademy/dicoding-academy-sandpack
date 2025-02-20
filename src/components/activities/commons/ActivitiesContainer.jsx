import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

function ActivitiesContainer({ children }) {
  return (
    <div className="activities-container">
      {children}
    </div>
  );
}

// proptypes children
ActivitiesContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ActivitiesContainer;
