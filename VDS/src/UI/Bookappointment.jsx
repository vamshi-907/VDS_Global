import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Bookappointment.css';
import Helpdesk from './Helpdesk';
import Navbar from './Navbar';
import Newsletter from './Newsletter';
import Home5 from './Home5';
import Footer from './Footer';

const Bookappointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Appointment Confirmed Successfully!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setFormData({ name: '', email: '', phone: '', date: ''});
  };

  return (
    <div>
      <Helpdesk />
      <Navbar />
      <div className="book-appointment-container">
        <h2>Book an Appointment</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          <button type="submit">Confirm Appointment</button>
        </form>
      </div>
      <ToastContainer />
      <Newsletter />
      <Home5 />
      <Footer />
    </div>
  );
};

export default Bookappointment;
