import React from 'react';
import './index.css';


function Navbar() {
  return (
    <div className="navbar-container">
        <div className="navbar-top">
            <img className="logo" src={"/images/logo.png"} alt="business logo"/>
            <div className="navbar-button">Contact</div>
        </div>
        <div className="navbar-bottom"/>
    </div>
  );
}

export default Navbar;
