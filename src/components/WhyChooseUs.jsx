import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      badge: '100% VERIFIED',
      title: 'Verified Pandits',
      desc: 'Every pandit is background-checked, experienced, and certified in Vedic traditions before joining our platform.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      id: 2,
      badge: 'NO HIDDEN FEES',
      title: 'Fixed & Transparent Pricing',
      desc: 'No hidden charges. What you see is what you pay. Complete packages including Samagri, Dakshina, and ceremony.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <path d="M15 10a3 3 0 0 0-3-2H9.5a2.5 2.5 0 0 0 0 5H14a2.5 2.5 0 0 1 0 5H9a3 3 0 0 1-3-2" />
        </svg>
      ),
    },
    {
      id: 3,
      badge: 'ALWAYS PUNCTUAL',
      title: 'On-Time Guarantee',
      desc: 'Our pandit arrives well before ceremony time. The complete spiritual ritual kicks off exactly as per the auspicious Muhurat.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      id: 4,
      badge: 'ALL INCLUSIVE',
      title: 'Complete Aashirwaad Included',
      desc: 'Pure and clean samagri, divine prasad, blessed sacred threads, and authentic rituals part of your Puja experience.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="21 8 21 21 3 21 3 8" />
          <rect x="1" y="3" width="22" height="5" />
          <line x1="10" y1="12" x2="14" y2="12" />
        </svg>
      ),
    },
    {
      id: 5,
      badge: '5000+ REVIEWS',
      title: '4.9★ Rated Service',
      desc: 'Over 5,000 happy families trust us for their most sacred ceremonies. Our devotion to authenticity speaks for itself.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      id: 6,
      badge: 'DEDICATED SUPPORT',
      title: '24/7 Devotional Support',
      desc: 'Have questions about rituals, samagri, or need custom coordination? Our spiritual support team is always available.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section-wrap why-choose-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="sub-badge">OUR PROMISE TO YOU</div>
          <h2 className="section-title">Why Families should Choose Book My Sastree.</h2>
          <p className="section-subtitle">
            We combine ancient traditions with modern reliability — so you can focus on your devotion while we handle everything else.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="why-grid">
          {reasons.map((r) => (
            <div key={r.id} className="why-card">
              <div className="why-icon-box">{r.icon}</div>
              <div className="why-badge">{r.badge}</div>
              <h3 className="why-card-title">{r.title}</h3>
              <p className="why-card-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
