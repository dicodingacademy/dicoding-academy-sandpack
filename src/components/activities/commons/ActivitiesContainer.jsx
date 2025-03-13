import './style.css';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Sun, Moon } from 'lucide-react';

export default function ActivitiesContainer({ children, title = 'Komponen Interaktif' }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme.toString());
    localStorage.setItem('theme', theme.toString());
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <article className="activities-container">
      <header>
        <div className="activities__header">
          <div>
            <h5 className="activities__title">
              <img src="/assets/learning-activities-icon.png" alt="Learning activities icon" width={20} height={20} />
              <span>{title}</span>
            </h5>
          </div>
          <div className="activities__buttons">
            <button type="button" className="activities__buttons-item theme-switch" onClick={() => toggleTheme()}>
              {theme === 'dark' ? <Sun /> : <Moon />}
            </button>
          </div>
        </div>
      </header>
      <hr className="activities__divider" />
      <main>
        {children}
      </main>
    </article>
  );
}

// proptypes children
ActivitiesContainer.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};
