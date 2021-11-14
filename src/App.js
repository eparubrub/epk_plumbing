import React from 'react';
import Navbar from './Navbar';
import Slideshow from './Slideshow';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

let standardServiceTitleDecoration = {
  "textDecoration": "none",
  "background": "none",
  "color": "#004789"
}
let selectedServiceTitleDecoration = {
  "textDecoration": "underline",
  "background": "linear-gradient(to right, #5EB1FF, white)",
  "color": "black"
}

class App extends React.Component{
  servicesImages = {
    Bathroom : ["/images/Bathroom3.jpg", "/images/Bathroom2.jpg", "/images/Bathroom1.jpg"],
    Plumbing : ["/images/Plumbing3.jpg", "/images/Plumbing2.jpg", "/images/Plumbing1.jpg"],
    Flooring : ["/images/Flooring3.jpg", "/images/Flooring2.jpg", "/images/Flooring1.jpg"],
    Painting : ["/images/Painting3.jpg", "/images/Painting2.jpg", "/images/Painting1.jpg"]
  };
  state = {
    select: {
      "Flooring": selectedServiceTitleDecoration,
      "Bathroom": standardServiceTitleDecoration,
      "Plumbing": standardServiceTitleDecoration,
      "Painting": standardServiceTitleDecoration,
    },
    currentServices: "Flooring",
    currentSlideshowImages: this.servicesImages["Flooring"],
  };
  constructor() {
    super();
    this.myRef = React.createRef();
  }
  selectServicesImages = service => {
    var new_select = {
      "Flooring": standardServiceTitleDecoration,
      "Bathroom": standardServiceTitleDecoration,
      "Plumbing": standardServiceTitleDecoration,
      "Painting": standardServiceTitleDecoration,
    };
    new_select[service] = selectedServiceTitleDecoration;
    this.setState({select: new_select})
    this.setState({currentServices: service});
    this.setState({currentSlideshowImages: this.servicesImages[service]});
    let offset = this.myRef.current.offsetHeight + (this.myRef.current.offsetHeight / 2) + this.myRef.current.offsetTop;
    window.scrollTo({ behavior: 'smooth', top: offset});
  };
  render(){
    return(
      <div className="app-container">
        <Navbar/>
        <div className="flex-container top-container">
          <div className="flex-item flex-item-large">
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
              <img className="link-png" src={"/images/phone.png"} alt="phone png"/>
                <span className="link-text">(808) 123-4567</span>
            </div>
            <div className="main-button">
              <img className="link-png" src={"/images/yelp.png"} alt="yelp png"/>
                <span className="link-text">Yelp Business Page</span>
            </div>
          </div>
          <div className="flex-item flex-item-small main-img-container">
            <img className="main-img" src={"/images/MainImg.jpg"} alt="main business pic"/>
          </div>
        </div>

        <div className="flex-container ">
          
          <div className="flex-item flex-item-small slideshow-container" ref={this.myRef}>
            <Slideshow currentSlideshowImages={this.state.currentSlideshowImages} currentServices={this.state.currentServices}/>
          </div>

          <div className="flex-item flex-item-large">
            <h1 className="available-services-title">Available Services</h1>
            <ul className="available-services-container">
              <li class="available-services-item" onClick={() => this.selectServicesImages("Plumbing")}>
                <h3 className="available-services-sub-item-title" 
                  style={{textDecoration: this.state.select.Plumbing.textDecoration, 
                    background: this.state.select.Plumbing.background,
                    color: this.state.select.Plumbing.color}}
                >Plumbing</h3>
                <li className="available-services-sub-item">Drain Installation & Cleaning</li>
                <li className="available-services-sub-item">Water Heater Installation & Repair</li>
                <li className="available-services-sub-item">Sink Installation & Repair</li>
                <li className="available-services-sub-item">Pipe Installation & Repair</li>
                <li className="available-services-sub-item">Faucet Installation & Repair</li>
                <li className="available-services-sub-item">Leak Detection</li>
                <li className="available-services-sub-item">Garbage Disposal Installation & Repair</li>
              </li>
              <li class="available-services-item" onClick={() => this.selectServicesImages("Flooring")}>
                <h3 className="available-services-sub-item-title"  
                  style={{textDecoration: this.state.select.Flooring.textDecoration, 
                    background: this.state.select.Flooring.background,
                    color: this.state.select.Flooring.color}}
                >Flooring</h3>
                <li className="available-services-sub-item">Laminate Floor Repair</li>
                <li className="available-services-sub-item">Tile Floor Installation & Restoration</li>
                <li className="available-services-sub-item">Tile Floor Repair</li>
                <li className="available-services-sub-item">Vinyl & Linoleum Floor Repair</li>
                <li className="available-services-sub-item">Vinyl & Linoleum Floor Installation</li>
                <li className="available-services-sub-item">Vinyl & Linoleum Floor Restoration</li>
                <li className="available-services-sub-item">Concrete Floor Repair</li>
                <li className="available-services-sub-item">Laminate Floor Installation</li>
              </li>
              <li class="available-services-item" onClick={() => this.selectServicesImages("Bathroom")}>
                <h3 className="available-services-sub-item-title" 
                  style={{textDecoration: this.state.select.Bathroom.textDecoration, 
                    background: this.state.select.Bathroom.background,
                    color: this.state.select.Bathroom.color}}
                >Bathroom & Other</h3>
                <li className="available-services-sub-item">Toilet Installation & Repair</li>
                <li className="available-services-sub-item">Bathtub Installation & Repair</li>
                <li className="available-services-sub-item">Shower Installation & Repair</li>
                <li className="available-services-sub-item">Residential Services</li>
                <li className="available-services-sub-item">Water Filter Services</li>
                <li className="available-services-sub-item">Water Heater Repair</li>
              </li>
              <li class="available-services-item" onClick={() => this.selectServicesImages("Painting")}>
                <h3 className="available-services-sub-item-title" 
                    style={{textDecoration: this.state.select.Painting.textDecoration, 
                      background: this.state.select.Painting.background,
                      color: this.state.select.Painting.color}}
                >Painting</h3>
                <li className="available-services-sub-item">Ceiling & Wall Painting</li>
                <li className="available-services-sub-item">Color Matching</li>
                <li className="available-services-sub-item">Interior Painting</li>
                <li className="available-services-sub-item">Exterior Painting</li>
                <li className="available-services-sub-item">Staining & Varnishing</li>
                <li className="available-services-sub-item">Trim & Baseboard Painting</li>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
