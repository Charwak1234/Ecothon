import React from "react";

function Testimonials() {
  const reviews = [
    {
      quote: "The Soil Analysis tool helped me reduce fertilizer costs by 30%. I finally know exactly what my land needs.",
      name: "Suresh Patil",
      location: "Wheat Farmer • Punjab",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
      impact: "30% Savings"
    },
    {
      quote: "The weather alerts are incredibly accurate. It helped us time our harvest perfectly before the rains.",
      name: "Anjali Devi",
      location: "Rice Farmer • Andhra Pradesh",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
      impact: "Zero Loss"
    }
  ];

  return (
    <section className="testimonial-section">
      <div className="testimonial-header">
        <span className="badge">Success Stories</span>
        <h2>Trusted by the <span>Backbone of India</span></h2>
      </div>

      <div className="testimonial-grid">
        {reviews.map((review, index) => (
          <div className="testimonial-card" key={index}>
            <div className="quote-mark">“</div>
            <p className="testimonial-text">{review.quote}</p>
            <div className="testimonial-footer">
              <div className="farmer-info">
                <img src={review.img} alt={review.name} className="farmer-img" />
                <div>
                  <h4>{review.name}</h4>
                  <p>{review.location}</p>
                </div>
              </div>
              <div className="impact-tag">{review.impact}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;