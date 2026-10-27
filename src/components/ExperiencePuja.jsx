import React from 'react';

const ExperiencePuja = ({ onOpenBooking }) => {
  return (
    <section className="section-wrap experience-section" id="experience">
      <div className="section-container">
        {/* Section Heading */}
        <div className="section-header text-center">
          <h2 className="section-title">How Would You Like to Experience Puja?</h2>
          <p className="section-subtitle">
            Choose the perfect way to receive divine blessings — whether you prefer a personal ritual at home or joining devotees online.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="experience-cards-grid">
          {/* Card 1: Book Offline Puja */}
          <div className="exp-card">
            <div className="exp-icon-wrap">
              <svg viewBox="0 0 24 24" className="exp-icon" fill="none" stroke="#EA580C" strokeWidth="2">
                <path d="M12 2C8 6 6 9 6 13a6 6 0 0 0 12 0c0-4-2-7-6-11z" fill="#FFF7ED" />
                <path d="M12 9c-2 2-3 3.5-3 5.5a3 3 0 0 0 6 0c0-2-1-3.5-3-5.5z" fill="#F97316" stroke="none" />
                <path d="M4 22h16" />
                <path d="M6 19h12" />
              </svg>
            </div>
            <h3 className="exp-card-title">Book Offline Puja</h3>
            <p className="exp-card-desc">
              Verified Panditji attends home with all samagri. Experience pure complete traditional ritual in person with your family.
            </p>
            <button 
              className="btn-exp-link" 
              onClick={() => onOpenBooking('Offline Puja at Home')}
              type="button"
            >
              Book Now <span className="arrow">→</span>
            </button>
          </div>

          {/* Card 2: Book Temple Puja */}
          <div className="exp-card">
            <div className="exp-icon-wrap">
              <svg viewBox="0 0 24 24" className="exp-icon" fill="none" stroke="#EA580C" strokeWidth="2">
                <rect x="2" y="7" width="15" height="12" rx="2" fill="#FFF7ED" />
                <path d="M17 10l5-3v10l-5-3v-4z" fill="#F97316" stroke="#EA580C" />
                <circle cx="9.5" cy="13" r="2.5" fill="#EA580C" />
              </svg>
            </div>
            <h3 className="exp-card-title">Book Temple Puja</h3>
            <p className="exp-card-desc">
              Join live rituals and seek blessings from sacred temples globally streaming with thousands of devotees worldwide.
            </p>
            <button 
              className="btn-exp-link" 
              onClick={() => onOpenBooking('Temple Ritual Live Stream')}
              type="button"
            >
              Join Now <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePuja;
