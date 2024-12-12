import React, { useState, useEffect } from 'react'

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    
    useEffect(() => {
      const darkModePreference = localStorage.getItem('darkmode')
      if (darkModePreference === 'enabled') {
        enableDarkMode();
      }
    }, []);
  
    
    const enableDarkMode = () => {   
        setIsDarkMode(true);
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkmode', 'enabled');
    };
  
    const disableDarkMode = () => {  
        setIsDarkMode(false);
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkmode', 'disabled'); 
    };

    const toggleDarkMode = () => {
        console.log('toggleDarkMode körs. Nuvarande state:', isDarkMode)
        if (isDarkMode) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    };
  
    return (
      <div className="darkmode-toggle">
        <p>Dark mode</p>
        <label className="toggle">
          <input
            id="darkmode-switch"
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleDarkMode} 
          />
          <span className="slider"></span>
        </label>
      </div>
    );
  };

export default DarkModeToggle