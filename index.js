import React from 'react';  // Import React for JSX
import ReactDOM from 'react-dom';  // Import ReactDOM to render React components
import App from './App';  // Import the App component from App.js

// Find the root DOM element where the React app will be rendered
const rootElement = document.getElementById('root');

// Render the App component into the root element
ReactDOM.render(<App />, rootElement);
