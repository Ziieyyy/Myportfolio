import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Set default theme to dark if no preference is saved
const savedTheme = localStorage.getItem('theme');
if (!savedTheme) {
  localStorage.setItem('theme', 'dark');
  document.documentElement.classList.add('dark');
} else if (savedTheme === 'dark') {
  document.documentElement.classList.add('dark');
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);