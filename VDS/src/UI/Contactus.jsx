import React from 'react';
import Navbar from './Navbar';
import image from '../assets/VDS_Home.jpeg';
import './Contactus.css';
import Newsletter from './Newsletter';
import Home5 from './Home5';
import Footer from './Footer';
import Helpdesk from './Helpdesk';

export default function Contactus() {
  return (
    <div>
      <div>
        <Helpdesk/>
      </div>
      <Navbar />
      <div className="contactus-container">
        <div className="contactus-image-section">
          <img src={image} alt="Professional" className="contactus-main-image" />
          <div className="contactus-overlay"></div>
          <div className="contactus-text-container">
            <h1 className="popper-text">Contact us</h1>
            <div className="contactus-card">
              <p>VDS Global Edusolutions :- Contact us</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contactus-statistics-container">
        <div className="contactus-stat-card">
          <h2>📞Phone</h2>
          <p>+91 9000225946</p>
        </div>
        <div className="contactus-stat-card">
          <h2>✉ Email</h2>
          <p>info@vdsglobaledusolutions.com</p>
        </div>
        <div className="contactus-stat-card">
          <h2>✉ Email</h2>
          <p>vdsglobaledusolutions@gmail.com</p>
        </div>
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
