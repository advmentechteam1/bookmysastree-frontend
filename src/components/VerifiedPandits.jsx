import React from 'react';
import panditSunilImg from '../assets/pandit_acharya.jpg';
import panditAmitImg from '../assets/pandit_amit.jpg';
import panditDineshImg from '../assets/pandit_dinesh.jpg';
import panditRajeshImg from '../assets/pandit_rajesh.jpg';

const VerifiedPandits = ({ onOpenBooking }) => {
  const pandits = [
    {
      id: 1,
      name: 'Pandit Sunil Pandey',
      location: 'Varanasi, UP',
      exp: '15 Years Exp',
      specialty: 'Rudrabhishek & Mahamrityunjaya',
      rating: '4.98',
      reviews: '340+ Pujas',
      image: panditSunilImg,
    },
    {
      id: 2,
      name: 'Shastri Amit Mishra',
      location: 'Gurugram, HR',
      exp: '12 Years Exp',
      specialty: 'Satyanarayan & Griha Pravesh',
      rating: '4.95',
      reviews: '280+ Pujas',
      image: panditAmitImg,
    },
    {
      id: 3,
      name: 'Acharya Dinesh Vidyarthi',
      location: 'Haridwar, UK',
      exp: '18 Years Exp',
      specialty: 'Navagraha Shanti & Pitra Dosh',
      rating: '4.99',
      reviews: '520+ Pujas',
      image: panditDineshImg,
    },
    {
      id: 4,
      name: 'Pandit Rajesh Chaturvedi',
      location: 'Noida, UP',
      exp: '14 Years Exp',
      specialty: 'Vivah Sanskar & Vedic Havan',
      rating: '4.92',
      reviews: '310+ Pujas',
      image: panditRajeshImg,
    },
  ];

  return (
    <section className="section-wrap pandits-section" id="pandits">
      <div className="section-container">
        {/* Header */}
        <div className="section-header text-center">
          <div className="sub-badge">100% VETTED &amp; TRUSTED</div>
          <h2 className="section-title">Our Verified Pandits</h2>
          <p className="section-subtitle">
            Connect with highly experienced and background-verified Vedic scholars.
          </p>
        </div>

        {/* Pandits Grid */}
        <div className="pandits-grid">
          {pandits.map((p) => (
            <div key={p.id} className="pandit-card">
              <div className="pandit-img-wrap">
                <img src={p.image} alt={p.name} className="pandit-img" />
                <div className="pandit-rating-badge">
                  <span>★ {p.rating}</span>
                </div>
              </div>

              <div className="pandit-body">
                <div className="pandit-name-row">
                  <h3 className="pandit-name">{p.name}</h3>
                  <span className="verified-check" title="Background & Vedic Verified">✔</span>
                </div>

                <div className="pandit-location-exp">
                  <span>📍 {p.location}</span>
                  <span className="dot">•</span>
                  <span>{p.exp}</span>
                </div>

                <p className="pandit-specialty">{p.specialty}</p>

                <div className="pandit-footer">
                  <span className="pandit-count">{p.reviews}</span>
                  <button 
                    className="btn-pandit-book"
                    onClick={() => onOpenBooking(`Consult with ${p.name}`)}
                    type="button"
                  >
                    Consult
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerifiedPandits;
