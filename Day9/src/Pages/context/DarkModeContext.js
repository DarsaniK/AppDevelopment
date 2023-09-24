import React, { createContext, useContext, useState } from 'react';

// Create a context
const DarkModeContext = createContext();

// Create a provider component
export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const body = document.querySelector('body');
    body.classList.toggle('dark');
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Create a custom hook to access the context
export const useDarkMode = () => {
  return useContext(DarkModeContext);
};