import React, { useEffect, useState } from 'react';
import './Home.css';
import image from '../assets/VDS_Home.jpeg';
import image2 from '../assets/VDS_Home_2.jpg';
import image3 from '../assets/VDS_Home_3.png';
import Navbar from './Navbar';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home2 from './Home2';
import Home3 from './Home3';
import Home4 from './Home4';
import Home5 from './Home5';
import Footer from './Footer';
import Countries from './Countries';
import Newsletter from './Newsletter';
import Helpdesk from './Helpdesk';
import { useNavigate } from 'react-router-dom';



const Home = () => {
  const [showScroll, setShowScroll] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div>
      <Helpdesk />
      <Navbar />
      <div className="home-container">
        <div className="image-section animate-on-scroll">
          <img src={image} alt="Professional" className="main-image" />
          <div className="overlay"></div>
        </div>

        <div className="text-container animate-on-scroll">
          <h1>VDS Immigration Visa Consulting</h1>
          <p>Your Trusted Partner for a Hassle-Free Immigration Experience</p>
          <ul>
            {visaFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="button-group">
          <button className="book-button" onClick={() => navigate('/bookappointment')}>
        Book Appointment
      </button>
          </div>
        </div>
      </div>

      <div className="visa-section animate-on-scroll">
        <div className="visa-image">
          <img src={image2} alt="Visa Services" />
        </div>
        <div className="visa-content">
          <h2 className="visa-title">Visa Types and Eligibility Assessment</h2>
          <div className="visa-cards">
            {visaData.map((visa, index) => (
              <div className="visa-card animate-on-scroll" key={index}>
                <div className={`visa-icon ${visa.className}`}>
                  <i className={visa.icon}></i>
                </div>
                <h3>{visa.title}</h3>
                <p>{visa.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="visa-container3 animate-on-scroll" >
        <div className="visa-overlay3"></div>
        <div className="visa-content3">
          <h2 className="visa-title3">Your Gateway to Global Adventures</h2>
          <p className="visa-description3">Simplify your journey - follow these steps for a hassle-free visa process!</p>
          <div className="visa-steps3">
            {stepsData.map((step, index) => (
              <div className="step3 animate-on-scroll" key={index}>
                <div className="step-number3">{step.number}</div>
                <h3 className="step-title3">{step.title}</h3>
                <p className="step-description3">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Home2 />
      <Countries />
      <Newsletter />
      <Home3 />
      <Home4 />
      <Home5 />
      <Footer />

      {showScroll && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
};

const visaFeatures = [
  "Professional Legal Assistance",
  "Personalized Solutions for Your Journey",
  "Custom Immigration Strategies"
];

const visaData = [
  { title: "Tourist Visa", description: "Visit new places to discover.", icon: "fas fa-plane", className: "visa-tourist" },
  { title: "Commercial Visa", description: "Expand your business.", icon: "fas fa-chart-line", className: "visa-business" },
  { title: "Student Visa", description: "Start your educational journey.", icon: "fas fa-graduation-cap", className: "visa-student" },
  { title: "Resident Visa", description: "Relocate with ease.", icon: "fas fa-home", className: "visa-resident" },
  { title: "Working Visa", description: "Begin your career abroad.", icon: "fas fa-briefcase", className: "visa-work" }
];

const stepsData = [
  { number: "1", title: "Free Counseling Session", description: "Get expert guidance on study options." },
  { number: "2", title: "University Selection", description: "Choose the right university and course." },
  { number: "3", title: "Application Processing", description: "Complete and submit applications accurately." },
  { number: "4", title: "Visa Assistance", description: "Get step-by-step guidance on visa applications." },
  { number: "5", title: "Travel Arrangements", description: "We help with flight bookings and accommodation." },
  { number: "6", title: "Arrival Support", description: "Assistance with settling into your destination." }
];

export default Home;
