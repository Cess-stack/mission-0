// This is the main entry point for the React application.
// It uses ReactDOM to render the root <App /> component into the HTML element with the id 'root'.
// React.StrictMode is used to highlight potential problems in an application.

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);