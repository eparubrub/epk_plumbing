import React from 'react';
import Navbar from './Navbar';

function App() {
  return (
      <div className="app-container">
        <Navbar/>
        <div className="flex-container">
          <div className="flex-item main-card-desc">
            <div className="main-description">
              <h1>EPK Plumbing</h1>
              <h3>Plumbing, Drain Cleaning, Flooring, Painting</h3>
              <p>
                EPK Plumbing is a full service plumbing business with over 20 years in 
                construction experience, specializing in plumbing, flooring, painting and 
                light carpentry. EPK Plumbing is available to service all of Windward 
                (East Side) Oahu, HI and neighboring communities. Email or call us today 
                to request a quote.
              </p>
            </div>
            <div className="main-button">
              <img className="link-png" src={"/images/mail.png"} alt="mail png"/>
              <span className="link-text">email@gmail.com</span>
            </div>
            <div className="main-button">
            <img className="link-png" src={"/images/phone.png"} alt="mail png"/>
              <span className="link-text">(808) 123-4567</span>
            </div>
            <div className="main-button">
            <img className="link-png" src={"/images/yelp.png"} alt="mail png"/>
              <span className="link-text">Yelp Business Page</span>
            </div>
          </div>
          <div className="flex-item main-card-img">
            <img className="main-img" src={"/images/MainImg.jpg"} alt="main business pic"/>
            </div>
        </div>
      </div>
  );
}

export default App;
