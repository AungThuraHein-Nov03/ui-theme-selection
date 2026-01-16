import { useContext } from 'react';
import { SettingsContext } from '../context/SettingsContext';

const SettingsPanel = () => {
  const { theme, language, setTheme, setLanguage, resetSettings } = useContext(SettingsContext);

  return (
    <div className="settings-panel">
      <h3>Settings</h3>
      
      <div className="settings-group">
        <label className="settings-label">Theme:</label>
        <button 
          onClick={() => setTheme('light')}
          disabled={theme === 'light'}
          className="settings-button"
        >
          Light
        </button>
        <button 
          onClick={() => setTheme('dark')}
          disabled={theme === 'dark'}
        >
          Dark
        </button>
      </div>

      <div className="settings-group">
        <label className="settings-label">Language:</label>
        <button 
          onClick={() => setLanguage('en')}
          disabled={language === 'en'}
          className="settings-button"
        >
          EN
        </button>
        <button 
          onClick={() => setLanguage('th')}
          disabled={language === 'th'}
        >
          TH
        </button>
      </div>

      <button onClick={resetSettings} className="reset-button">
        Reset to Defaults
      </button>
    </div>
  );
};

export default SettingsPanel;
