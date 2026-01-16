/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from 'react';

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('app-settings');
    if (saved) {
      try { return JSON.parse(saved).theme || 'light'; } catch (e) { console.error(e); }
    }
    return 'light';
  });

  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('app-settings');
    if (saved) {
      try { return JSON.parse(saved).language || 'en'; } catch (e) { console.error(e); }
    }
    return 'en';
  });

  useEffect(() => {
    const settings = { theme, language };
    localStorage.setItem('app-settings', JSON.stringify(settings));
  }, [theme, language]);

  const resetSettings = () => {
    setTheme('light');
    setLanguage('en');
  };

  return (
    <SettingsContext.Provider value={{ theme, language, setTheme, setLanguage, resetSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
