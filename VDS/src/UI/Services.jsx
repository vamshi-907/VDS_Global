import React from 'react';
import Navbar from './Navbar';
import image from '../assets/VDS_Home.jpeg';
import './Services.css';
import Services2 from './Services2';
import Countries from './Countries';
import Home5 from './Home5';
import Footer from './Footer';
import Newsletter from './Newsletter';
import Helpdesk from './Helpdesk';

export default function Services() {
  return (
    <div>
      <div>
        <Helpdesk/>
      </div>
      <Navbar />
      <div className="service-container">
        <div className="service-image-section">
          <img src={image} alt="Professional" className="service-main-image" />
          <div className="service-overlay"></div>
        </div>

        <div className="service-text-container">
          <h1 className="popper-text">Services</h1>
          <div className="service-card">
            <p>VDS Global Edusolutions :- services</p>
          </div>
        </div>
      </div>
      <div>
        <Services2/>
      </div>
      <div>
        <Countries/>
      </div>
      <div>
        <Newsletter/>
      </div>
      <div>
        <Home5/>
      </div>
      <div>
        <Footer/>
      </div>
      </div>
  );
}