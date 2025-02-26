import React, { useState } from "react";
import "./Home3.css"; 

const testimonials = [
  {
    name: "GOLADRIA GOMEZ",
    review:
      "From start to finish, evisa made my visa application a breeze. Their expertise and friendly guidance turned a complex process into a walk in the park. Grateful for their seamless service!",
  },
  {
    name: "MARINDA DILENDIRA",
    review:
      "evisa made my immigration journey stress-free. Their expertise and personalized guidance were remarkable, guiding me from application to approval. Now happily settled in the UK.",
  },
  {
    name: "DAVID JOHNSON",
    review:
      "The support and guidance from evisa were invaluable. They handled everything efficiently, and now I'm living my dream abroad. Couldn't have done it without them!",
  },
  {
    name: "SOPHIA LEE",
    review:
      "evisa is the best! Their expert team made my travel visa approval smooth and hassle-free. Highly recommended for anyone looking for a reliable service.",
  },
  {
    name: "JAMES MILLER",
    review:
      "Great experience with evisa! They provided all the support I needed for my travel and immigration process. Would recommend them to anyone!",
  },
];

const Home3 = () => {
  const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1));
  };

  return (
    <section className="testimonials-container">
      <div className="testimonials-content">
        <div className="testimonials-carousel">
          <button className="arrow left-arrow" onClick={prevTestimonial}>
            &#10094;
          </button>
          <div className="testimonials-list">
            <div className="testimonial-card">
              <h3 className="stars">★★★★★</h3>
              <p className="review">"{testimonials[index].review}"</p>
              <h4 className="author">{testimonials[index].name}</h4>
            </div>
          </div>
          <button className="arrow right-arrow" onClick={nextTestimonial}>
            &#10095;
          </button>
        </div>

        <div className="testimonials-header">
          <h2>Stories of Success: Hear from Our Happy Clients</h2>
          <p>
          Unlock Global Horizons: Experience Joy in 175+ Destinations
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home3;
