import React, { useState } from 'react';
import { useDarkMode } from "../hooks/useDarkMode";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Navbar = (key, initialValue) => {
  const [darkMode, setDarkMode] = useDarkMode(key, initialValue);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
