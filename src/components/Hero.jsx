import React from 'react';
import heroHavanImg from '../assets/hero_havan.jpg';

const Hero = ({ onOpenKundli, onOpenBooking }) => {
  return (
    <section className="hero-wrap" id="home">
      <div className="hero-container">
        {/* Left Column: Text Content */}
        <div className="hero-left">
          {/* Top Pill */}
          <div className="puja-partner-pill">
            <span className="pill-arrow">&lt;</span>
            <span className="pill-text">YOUR PUJA PARTNER</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-headline">
            Book My Sastree,<br />
            <span className="headline-highlight">Modern Convenience</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            Book verified Pandits for your sacred ceremonies. We handle everything — from the sacred Samagri to Divine Blessings.
          </p>

          {/* Call to Actions */}
          <div className="hero-cta-group">
            <button 
              className="btn-hero-primary" 
              onClick={onOpenKundli}
              type="button"
            >
              FREE KUNDLI &amp; DOSHA ANALYSIS
            </button>
            <button 
              className="btn-hero-secondary"
              onClick={onOpenBooking}
              type="button"
            >
              Name correction
            </button>
          </div>

          {/* Stats and Trust Indicators */}
          <div className="hero-stats-row">
            <div className="stat-card">
              <span className="stat-number">5,000+</span>
              <span className="stat-label">HAPPY FAMILIES</span>
            </div>
            
            <div className="stat-divider"></div>

            <div className="stat-card">
              <div className="rating-box">
                <span className="stat-number">4.9</span>
                <span className="star-icon">★</span>
              </div>
              <span className="stat-label">(1,200+ REVIEWS)</span>
            </div>
          </div>

          {/* Checkmarks */}
          <div className="hero-checkmarks">
            <div className="checkmark-item">
              <span className="check-icon">✔</span>
              <span>Verified Pandits</span>
            </div>
            <div className="checkmark-item">
              <span className="check-icon">✔</span>
              <span>Fixed Pricing</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Card */}
        <div className="hero-right">
          <div className="hero-card-frame">
            <div className="hero-img-container">
              <img 
                src={heroHavanImg} 
                alt="Sacred Havan Ceremony with Vedic Pandit" 
                className="hero-main-img"
              />
              <div className="hero-card-overlay"></div>
              
              {/* Badge on Card */}
              <div className="hero-floating-badge">
                <span className="live-pulse"></span>
                <div>
                  <h3 className="badge-title">Sacred Havan</h3>
                  <p className="badge-subtitle">Performing Live Ritual</p>
                </div>
              </div>
            </div>

            {/* Decorative Om/Sun ambient glow */}
            <div className="ambient-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
