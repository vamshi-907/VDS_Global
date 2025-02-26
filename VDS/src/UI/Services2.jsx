import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services2.css";
import { FaBriefcase, FaPlaneArrival, FaPassport, FaUserFriends, FaFileAlt, FaHome, FaMoneyBillWave, FaGlobe, FaBookOpen, FaExchangeAlt } from "react-icons/fa";

const services = [
  { id: 1, icon: <FaBriefcase />, title: "ADMISSIONS, SCHOLARSHIPS & ASSISTANTSHIP" },
  { id: 2, icon: <FaPlaneArrival />, title: "AIRPORT PICKUP AND POST ARRIVAL SUPPORT" },
  { id: 3, icon: <FaPassport />, title: "JOB SEEKER / SEARCH VISAS" },
  { id: 4, icon: <FaUserFriends />, title: "DEPENDENT VISAS" },
  { id: 5, icon: <FaFileAlt />, title: "VISA MOCKS & FILING PROCESS" },
  { id: 6, icon: <FaMoneyBillWave />, title: "FUNDING & LOAN ADVICE" },
  { id: 7, icon: <FaGlobe />, title: "VISITING VISAS" },
  { id: 8, icon: <FaBookOpen />, title: "TRAINING FOR IELTS PTE TOEFL" },
  { id: 9, icon: <FaExchangeAlt />, title: "Support in currency exchange" }
];

export default function Services2() {
  const navigate = useNavigate();

  const handleClick = (title) => {
    navigate(`/servicedetails`, { state: { serviceTitle: title } });
  };

  return (
    <div className="services2-container">
      <h2 className="services2-title">Our Services</h2>
      <div className="services2-grid">
        {services.map((service) => (
          <div key={service.id} className="services2-card" onClick={() => handleClick(service.title)}>
            <div className="services2-icon">{service.icon}</div>
            <p className="services2-text">{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
