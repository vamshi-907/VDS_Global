import React from "react";
import { useLocation } from "react-router-dom";
import image from '../assets/VDS_Home.jpeg';
import Navbar from "./Navbar";
import './Services3.css';
import { FaUserGraduate, FaBookOpen, FaClock, FaBook } from "react-icons/fa";
import Home5 from "./Home5";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import Helpdesk from "./Helpdesk";



export default function Services3() {
  const location = useLocation();
  const { serviceTitle } = location.state || { serviceTitle: "Service Details" };

  

  const serviceDetails = {
  "ADMISSIONS, SCHOLARSHIPS & ASSISTANTSHIP": {
    benefits: [
      "Customized university selection process",
      "Scholarship and grant eligibility guidance",
      "Assistantship applications (Teaching & Research)"
    ],

  },
  "AIRPORT PICKUP AND POST ARRIVAL SUPPORT": {
    benefits: [
      "Scheduled airport pickup service",
      "Temporary accommodation assistance",
      "Help with setting up banking, mobile connections, and local transportation"
    ],
 
  },
  "JOB SEEKER / SEARCH VISAS": {
    benefits: [
      "Assistance in applying for job seeker visas",
      "Guidance on country-specific requirements",
      "Tips on securing employment and extending visas"
    ],

  },
  "DEPENDENT VISAS": {
    benefits: [
      "Assistance in applying for dependent visas",
      "Understanding sponsorship requirements",
      "Guidance on rights and restrictions for dependents"
    ],
 
  },
  "VISA MOCKS & FILING PROCESS": {
    benefits: [
      "Mock visa interview preparation",
      "Complete visa documentation assistance",
      "Step-by-step guidance on filing process"
    ],

  },
  "HOUSING & LOAN ADVICE": {
    benefits: [
      "Guidance on renting or buying a home",
      "Connecting with trusted housing providers",
      "Assistance in securing educational loans"
    ],
  
  },
  "FUNDING & LOAN ADVICE": {
    benefits: [
      "Help in securing education loans",
      "Guidance on repayment and interest rates",
      "Assistance in exploring funding options"
    ],
  
  },
  "VISITING VISAS": {
    benefits: [
      "Step-by-step application support",
      "Document verification services",
      "Interview preparation for visa approval"
    ],
 
  },
  "TRAINING FOR IELTS PTE TOEFL": {
    benefits: [
      "Expert-led test preparation sessions",
      "Access to practice materials and mock tests",
      "Strategies to improve test scores"
    ],

  },
  "Support in currency exchange": {
    benefits: [
      "Best exchange rates for students",
      "Safe and secure international money transfers",
      "Guidance on currency regulations and limits"
    ],
  
  }
};


  const details = serviceDetails[serviceTitle] || {
    benefits: [],
    faqs: []
  };

  const features = [
    { icon: <FaUserGraduate />, title: "Certified Tutors", color: "#FF6B6B" },
    { icon: <FaBookOpen />, title: "Doubt Solving Sessions", color: "#339AF0" },
    { icon: <FaClock />, title: "Flexible & Regular Batches", color: "#12B886" },
    { icon: <FaBook />, title: "Free Study Materials", color: "#FAB005" },
  ];

  return (
    <div>
      <Helpdesk/>
    <Navbar/>
    <div className="services3-container">
            <div className="services3-image-section">
              <img src={image} alt="Professional" className="services3-main-image" />
              <div className="services3-overlay"></div>
              <div className="services3-text-container">
                <h1 className="popper-text">{serviceTitle}</h1>
                <div className="services3-card">
                  <p>Details about {serviceTitle} will go here.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="services3-details">
          <h2 className="services3-heading">Key Benefits</h2>
          <ul className="services3-list">
            {details.benefits.map((benefit, index) => (
              <li key={index} className="services3-list-item">{benefit}</li>
            ))}
          </ul>

        
        </div>
        <div className="why-choose-us">
      <h2 className="heading">Why choose us?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <span className="icon" style={{ backgroundColor: feature.color }}>
              {feature.icon}
            </span>
            <p className="feature-text">{feature.title}</p>
          </div>
        ))}
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
