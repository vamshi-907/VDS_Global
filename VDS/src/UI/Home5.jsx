import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Home5.css";

const Home5 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    visaType: "Student Visa",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error("Please fill in all required fields!", { position: "top-right", autoClose: 3000 });
      return;
    }
    toast.success("Message sent successfully!", { position: "top-right", autoClose: 3000 });
    setFormData({ name: "", email: "", visaType: "Student Visa", phone: "", message: "" });
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Do you have questions or want more information?</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Gmail" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <select name="visaType" value={formData.visaType} onChange={handleChange}>
              <option>Student Visa</option>
              <option>Tourist Visa</option>
              <option>Residence Visa</option>
              <option>Commercial Visa</option>
              <option>Working Visa</option>
            </select>
            <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
          </div>
          <textarea name="message" placeholder="Write Your Message..." value={formData.message} onChange={handleChange}></textarea>
          <button type="submit" className="send-button">Send Message</button>
        </form>
      </div>
      <div className="map-container">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.1178635407523!2d79.38083189999999!3d18.6096701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a32d36874d6786f%3A0xe246b48d48510acb!2sVDS%20Global%20Edusolutions!5e1!3m2!1sen!2sin!4v1740473975848!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home5;
