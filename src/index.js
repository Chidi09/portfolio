import React from 'react';
import ReactDOM from 'react-dom/client'; // Use createRoot for React 18+
import App from './pages/App'; // Import your main App component

// This is the entry point of your React application.
// It finds the HTML element with the ID 'root' in public/index.html
// and renders your App component inside it.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Import your global CSS file here. This is crucial for Tailwind CSS to work.
import './styles/global.css';
