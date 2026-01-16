import { useContext } from 'react';
import { SettingsProvider, SettingsContext } from './context/SettingsContext';
import Header from './components/Header';
import SettingsPanel from './components/SettingsPanel';
import PreviewCard from './components/PreviewCard';
import './App.css';

function AppContent() {
  const { theme } = useContext(SettingsContext);

  return (
    <div className={`app-container ${theme}-theme`}>
      <div className="content-wrapper">
        <Header />
        <div className="main-grid">
          <SettingsPanel />
          <PreviewCard />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <SettingsProvider>
      <AppContent />
    </SettingsProvider>
  );
}

export default App;
