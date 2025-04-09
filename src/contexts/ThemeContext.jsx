import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const STORAGE_KEY_NAME = 'theme';

const ThemeContext = React.createContext({
  theme: 'light',
  changeTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const current = () => localStorage.getItem(STORAGE_KEY_NAME) ?? 'light';
  const [theme, setTheme] = useState(current);

  function changeTheme(value) {
    setTheme(value);
  }

  useEffect(() => {
    document
      .documentElement
      .setAttribute('data-theme', theme.toString() === 'light' ? 'light' : 'dark');
    localStorage.setItem(STORAGE_KEY_NAME, theme.toString());
  }, [theme]);

  const contextValue = React.useMemo(
    () => ({ theme, changeTheme }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
