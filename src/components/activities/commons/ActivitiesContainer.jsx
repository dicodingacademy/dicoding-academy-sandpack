import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Sun, Moon } from 'lucide-react';

import './style.css';

function ActivitiesContainer({ children }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <div className="activities-container">
        {children}
      </div>
      <button type="button" onClick={toggleTheme} className="theme-switch">
        {theme === 'dark' ? <Sun /> : <Moon />}
      </button>
    </>
  );
}

// proptypes children
ActivitiesContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ActivitiesContainer;
