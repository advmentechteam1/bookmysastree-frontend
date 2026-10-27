import React from 'react';

const TrustBanner = () => {
  const points = [
    {
      id: 1,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'Connect with Like-Minded Souls',
      desc: 'Network for a collective journey of faith and sacred satsang.',
    },
    {
      id: 2,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      ),
      title: 'Serving a Rising Community',
      desc: 'Connecting Hindu households and temples across India and abroad.',
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      title: 'Verified Quality & Authenticity',
      desc: 'From 100% pure sacred samagri to strictly verified Vedic rituals.',
    },
    {
      id: 4,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <path d="M12 6v6" />
          <path d="M9 9h6" />
        </svg>
      ),
      title: 'Your Complete Spiritual Guide',
      desc: 'Holistic support for muhurat, kundli remedies, and ceremonies.',
    },
  ];

  return (
    <section className="trust-banner-section">
      <div className="trust-banner-container">
        {/* Left Column */}
        <div className="trust-left">
          <div className="trust-pill">
            TRUSTED BY OVER 50 MILLION DEVOTEES
          </div>
          <h2 className="trust-headline">
            India's Largest Devotional Platform
          </h2>
          <p className="trust-desc">
            We are committed to building the most trusted destination that serves the devotional needs of millions of devotees in India and abroad.
          </p>
        </div>

        {/* Right Column: 4 Cards */}
        <div className="trust-right-grid">
          {points.map((pt) => (
            <div key={pt.id} className="trust-card">
              <div className="trust-card-icon">{pt.icon}</div>
              <h4 className="trust-card-title">{pt.title}</h4>
              <p className="trust-card-desc">{pt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;
