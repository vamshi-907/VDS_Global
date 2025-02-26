import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Subscribed successfully with ${email}!`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setEmail('');
  };

  return (
    <div className="newsletter-container">
      <div className="newsletter-left">
        <h2 className="newsletter-title">
          Subscribe to the free newsletter to receive the latest news & case studies!
        </h2>
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            className="newsletter-input"
            required
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
      </div>
      <div className="newsletter-right">
        <div className="image-container">
          <img
            src="https://images.pexels.com/photos/5538624/pexels-photo-5538624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Newsletter"
            className="newsletter-image"
          />
          <div className="image-overlay"></div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Newsletter;
