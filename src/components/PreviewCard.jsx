import { useContext } from 'react';
import { SettingsContext } from '../context/SettingsContext';

const PreviewCard = () => {
  const { theme, language } = useContext(SettingsContext);

  const message = language === 'en' 
    ? 'This is your preference preview.' 
    : 'นี่คือหน้าตัวอย่างการตั้งค่า';

  return (
    <div className="preview-card">
      <h4>Preview</h4>
      <p>Current Theme: <strong>{theme.charAt(0).toUpperCase() + theme.slice(1)}</strong></p>
      <p>Current Language: <strong>{language.toUpperCase()}</strong></p>
      <hr className="preview-hr"/>
      <p className="preview-message">{message}</p>
    </div>
  );
};

export default PreviewCard;
