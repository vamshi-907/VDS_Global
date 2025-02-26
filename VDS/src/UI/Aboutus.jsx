import React from 'react';
import Navbar from './Navbar';
import image from '../assets/VDS_Home.jpeg';
import './AboutUs.css';
import Newsletter from './Newsletter';
import Home5 from './Home5';
import Footer from './Footer';
import Helpdesk from './Helpdesk';

export default function AboutUs() {
  return (
    <div>
      <div>
        <Helpdesk/>
      </div>
      <Navbar />
      <div className="aboutus-container">
        <div className="aboutus-image-section">
          <img src={image} alt="Professional" className="aboutus-main-image" />
          <div className="aboutus-overlay"></div>
          <div className="aboutus-text-container">
            <h1 className="popper-text">About us</h1>
            <div className="aboutus-card">
              <p>VDS Global Edusolutions :- About us</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mission-vision-container">
        <h2 className="section-title">Our Mission & Vision</h2>
        <div className="mission-vision-content">
          <div className="mission-card">
            <img 
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Mission" 
              className="mission-image" 
            />
            <div className="mission-text">
              <h3>Our Mission</h3>
              <p>To empower students with the best guidance and resources to achieve their academic and career dreams. We strive to provide personalized mentoring, innovative learning experiences, and a supportive environment that nurtures intellectual and professional growth. Our mission is to bridge the gap between aspirations and opportunities, ensuring that every student has access to world-class education and career pathways.</p>
            </div>
          </div>
          <div className="vision-card">
            <img 
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Vision" 
              className="vision-image" 
            />
            <div className="vision-text">
              <h3>Our Vision</h3>
              <p>To become a global leader in education consultancy, shaping future leaders through innovation and commitment. We envision a world where every student, regardless of background, has the tools and confidence to succeed in an increasingly competitive and dynamic landscape. Through continuous improvement, technological integration, and unwavering dedication, we aim to redefine the standards of educational excellence.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="statistics-container">
        <div className="stat-card">
          <h2>30K</h2>
          <p>We Have Worked With Clients</p>
        </div>
        <div className="stat-card">
          <h2>100%</h2>
          <p>Successful Visa Process Rate</p>
        </div>
        <div className="stat-card">
          <h2>1 DAY</h2>
          <p>Application Approval Processing Time</p>
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
