import React from 'react';
import '../Style/Style.css';

function Navbar() {
  return (
    <nav id="AppNav" className="navbar">
      <div className='navbar-center'>
      <ul>
          <a href='index.html'><button id="Home_btn" type="button" className="btn btn-light m-4 mb-0">Characters</button></a>
          <a href='About.html'><button id="About_btn" type="button" className="btn btn-light m-4 mb-0">About</button></a>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
