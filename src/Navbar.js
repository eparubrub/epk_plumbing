import React from 'react';
import './index.css';


function Navbar() {
  return (
    <div className="navbar-container">
        <div className="navbar-top">
            <img className="logo" src={"/images/logo.png"} alt="business logo"/>
            <a href="mailto:Edsparubrub@gmail.com">
              <div className="navbar-button">
                <span>Contact</span>
              </div>
            </a>
        </div>
        <div className="navbar-bottom"/>
    </div>
  );
}

export default Navbar;
