import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './Style/MainStyle.css';
import './Style/GalleryStyle.css';
import { WatchListProvider } from './WatchListContext';


// Render the React application into the HTML document's 'root' element
ReactDOM.render(
  // Use React.StrictMode to catch potential problems during development
  <React.StrictMode>
    {/* Wrap the entire application with the WatchListProvider */}
    <WatchListProvider>
      {/* Render the main App component */}
      <App />
    </WatchListProvider>
  </React.StrictMode>,
  // Specify the DOM container where the React application should be inserted
  document.getElementById('root')
);
