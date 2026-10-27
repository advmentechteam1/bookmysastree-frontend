import React, { useState } from 'react';

const HowItWorks = ({ onOpenBooking }) => {
  const [copied, setCopied] = useState(false);
  const referralCode = 'SASTREE10';

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'BookMySastree - Sacred Vedic Puja',
        text: `Use my code ${referralCode} to get 10% off your first Vedic ceremony on BookMySastree!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      handleCopy();
    }
  };

  return (
    <section className="section-wrap how-it-works-section" id="how-it-works">
      <div className="section-container">
        {/* Header */}
        <div className="section-header text-center">
          <h2 className="section-title">How Book My Sastree Works</h2>
          <p className="section-subtitle">Simple, authentic, and completely guided process in three easy steps.</p>
        </div>

        {/* 3 Step Cards */}
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number-circle">1</div>
            <h3 className="step-title">Choose Your Puja</h3>
            <p className="step-desc">
              Select from our curated list of 100+ authentic Vedic ceremonies, Sanskars, and Havans.
            </p>
          </div>

          <div className="step-connector"></div>

          <div className="step-card">
            <div className="step-number-circle">2</div>
            <h3 className="step-title">Book with E-Sankalp</h3>
            <p className="step-desc">
              Enter your family details, Gotra, birth star, preferred language, and auspicious Muhurat.
            </p>
          </div>

          <div className="step-connector"></div>

          <div className="step-card">
            <div className="step-number-circle">3</div>
            <h3 className="step-title">Experience Blessings</h3>
            <p className="step-desc">
              Vedic Pandit performs the sacred ceremony at your doorstep or join via live interactive stream.
            </p>
          </div>
        </div>

        {/* Referral / Share Code Banner */}
        <div className="referral-banner">
          <div className="referral-left">
            <div className="referral-gift-icon">🎁</div>
            <div>
              <h4 className="referral-title">Share your code with friends &amp; family</h4>
              <p className="referral-desc">
                Give your companion their first puja, you'll earn <strong>10% off</strong> on your next booking!
              </p>
            </div>
          </div>

          <div className="referral-actions">
            <div className="referral-code-box">
              <span className="code-label">CODE:</span>
              <span className="code-val">{referralCode}</span>
            </div>
            <button 
              className={`btn-copy-code ${copied ? 'copied' : ''}`}
              onClick={handleCopy}
              type="button"
            >
              {copied ? '✔ Copied!' : 'Copy Code'}
            </button>
            <button 
              className="btn-share-code"
              onClick={handleShare}
              type="button"
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
