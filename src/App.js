import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './Pages/HomePage.js';
import AboutPage from './Pages/AboutPage.js';
import WatchListPage from './Pages/WatchListPage.js';
import Mtitle from './components/MainTitle.js';
import Clock from './components/Clock.js';



function App() {
  return (
    <div className="app-container">
      <header>
        {/* Include a Clock component */}
        <Clock />
        {/* Include a Main Title component */}
        <Mtitle />
        {/* Add routing using React Router */}
        <Router>
          <nav>
            <ul>
              {/* Use Links for navigation */}
              <Link to="/">
                <button id="Home_btn" type="button" className="btn btn-light m-4 mb-3">
                  Characters
                </button>
              </Link>
              <Link to="/WatchList">
                <button id="Watch_btn" type="button" className="btn btn-light m-4 mb-3">
                  Watch List
                </button>
              </Link>
              <Link to="/About">
                <button id="About_btn" type="button" className="btn btn-light m-4 mb-3">
                  About
                </button>
              </Link>
            </ul>
          </nav>
          {/* Define routes using Routes and Route components */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/WatchList" element={<WatchListPage />} />
            <Route path="/About" element={<AboutPage />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;