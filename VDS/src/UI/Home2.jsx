import React, { useEffect, useRef, useState } from "react";
import { FaNetworkWired, FaCogs, FaCheckCircle, FaUserCheck } from "react-icons/fa";
import backgroundImage from "../assets/VDS_Home_4.png";
import "./Home2.css";

const Home2 = () => {
  const statsRef = useRef(null);
  const [animatedNumbers, setAnimatedNumbers] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    const statsElements = document.querySelectorAll(".stats-box");
    statsElements.forEach((el) => observer.observe(el));

    return () => statsElements.forEach((el) => observer.unobserve(el));
  }, []);

  useEffect(() => {
    let interval;
    let startValues = [0, 0, 0, 0];
    let targetValues = [10, 15, 15, 20];

    interval = setInterval(() => {
      setAnimatedNumbers((prev) =>
        prev.map((num, index) =>
          num < targetValues[index]
            ? Math.min(num + Math.floor(Math.random() * 3), targetValues[index])
            : targetValues[index]
        )
      );
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setAnimatedNumbers(targetValues);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: <FaNetworkWired color="#FF7F50" />, number: animatedNumbers[0] + "+", label: "Visa Categories", color: "#FF7F50" },
    { icon: <FaCogs color="#1E90FF" />, number: animatedNumbers[1] + "+", label: "Visa Process", color: "#1E90FF" },
    { icon: <FaCheckCircle color="#3CB371" />, number: animatedNumbers[2] + "+", label: "Successful Cases", color: "#3CB371" },
    { icon: <FaUserCheck color="#FFD700" />, number: animatedNumbers[3] + "+", label: "Happy Clients", color: "#FFD700" },
  ];

  return (
    <section className="stats-container" ref={statsRef}>
      <div className="stats-background" style={{ backgroundImage: `url(${backgroundImage})` }}></div>

      <div className="stats-text">
        <h1>Unveiling Our Milestones:</h1>
        <h1>Success Stories That Inspire</h1>
      </div>

      <div className="stats-grid-container">
        {stats.map((stat, index) => (
          <div key={index} className="stats-box" style={{ borderLeftColor: stat.color }}>
            <div
              className="stats-icon"
              style={{
                backgroundColor: `${stat.color}20`,
                padding: "15px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: `0px 4px 10px ${stat.color}60`,
              }}
            >
              {stat.icon}
            </div>
            <h2 className="stats-heading">{stat.number}</h2>
            <p className="stats-description">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home2;
