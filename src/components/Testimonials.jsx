import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: 'Suresh Oberoi',
      location: 'South Delhi, DL',
      rating: 5,
      date: 'April 2026',
      service: 'Maha Mrityunjaya Jaap',
      comment: 'I appreciate the transparency in pricing and the expertise of the pandits here. We conducted a Maha Mrityunjaya Jaap, and the spiritual energy was palpable. Excellent Vedic knowledge and pure samagri!',
    },
    {
      id: 2,
      name: 'Ananya Chatterjee',
      location: 'Kolkata, WB',
      rating: 5,
      date: 'March 2026',
      service: 'Satyanarayan Katha at Home',
      comment: 'Arranged a Satyanarayan Katha at home on very short notice. The team was incredibly helpful and the panditji was very patient with our family elders. Very authentic ritual and complete peace of mind.',
    },
    {
      id: 3,
      name: 'Vikram Aditya',
      location: 'DLF CyberCity, Gurugram',
      rating: 5,
      date: 'April 2026',
      service: 'Corporate Office Vastu & Havan',
      comment: 'Found a highly learned pandit for our new office inauguration in Gurugram through this platform. The process was completely digital and hassle-free. Punctual, knowledgeable, and blessed experience.',
    },
  ];

  return (
    <section className="section-wrap testimonials-section" id="testimonials">
      <div className="section-container">
        {/* Header */}
        <div className="section-header text-center">
          <div className="google-rating-pill">
            <span className="google-g">G</span>
            <span className="google-text">Google Reviews</span>
            <span className="rating-score">5.0</span>
            <div className="stars">★★★★★</div>
          </div>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">Real experiences and blessings from families across India.</p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {reviews.map((r) => (
            <div key={r.id} className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">"{r.comment}"</p>
              
              <div className="testimonial-footer">
                <div className="testimonial-avatar">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h4 className="reviewer-name">{r.name}</h4>
                  <p className="reviewer-loc">{r.location} • <span className="service-tag">{r.service}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Review Button */}
        <div className="text-center mt-8">
          <a 
            href="https://google.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-google-review"
          >
            <span className="google-icon-btn">G</span> Review us on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
