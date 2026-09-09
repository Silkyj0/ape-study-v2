import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import StudyTimerWidget from './components/StudyTimerWidget.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <StudyTimerWidget />
  </StrictMode>,
);
