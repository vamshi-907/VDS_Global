import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import backgroundImage from "../assets/VDS_Home_5.jpg";
import "./Home4.css";

const faqs = [
  { question: "What services do you offer?", answer: "We offer a wide range of immigration solutions." },
  { question: "What is the consultation process like?", answer: "Schedule an appointment and get expert guidance." },
  { question: "How much do your services cost?", answer: "Pricing depends on the service. Contact us for details." },
  { question: "How do I get started with your services?", answer: "Reach out to us via our website." },
  { question: "What is your success rate with visa applications?", answer: "We have a high success rate in visa approvals." },
];

const Home4 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="faq-container"
      style={{
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center"
      }}
    >
      <div className="faq-left">
        <h2 className="faq-heading">
          Frequently Asked Questions <br /> <span>Answered</span>
        </h2>
        <p className="faq-description">
          Our dedication to exceptional immigration solutions is driven by a team you can trust, committed to guiding you every step of the way.
        </p>
      </div>

      <div className="faq-right">
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? "open" : ""}`} 
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question-container">
                <div className="faq-question">{faq.question}</div>
                <div className="faq-icon">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </div>
              </div>
              {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home4;
