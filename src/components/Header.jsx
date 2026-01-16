import { useContext } from 'react';
import { SettingsContext } from '../context/SettingsContext';

const Header = () => {
  const { language } = useContext(SettingsContext);

  const title = language === 'en' ? 'Welcome' : 'ยินดีต้อนรับ';

  return (
    <header className="app-header">
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
