import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-top-wave">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
          <path d="M0,32L80,37.3C160,43,320,53,480,48C640,43,800,21,960,16C1120,11,1280,21,1360,26.7L1440,32L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z" fill="#1C140E" />
        </svg>
      </div>

      <div className="footer-main-container">
        {/* Upper Footer Columns */}
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <a href="#home" className="footer-logo">
              <span className="footer-kalash">🕉️</span>
              <span className="footer-logo-text">bookmy<span className="footer-highlight">shastri</span></span>
            </a>
            <p className="footer-motto">Sacred Tradition, Seamlessly Delivered</p>
            <p className="footer-about">
              India's premier digital platform connecting devotees with certified Vedic Pandits for sacred ceremonies, temple pujas, and astrological remedies.
            </p>

            <div className="footer-contact-details">
              <div className="contact-item">
                <span className="c-icon">📞</span>
                <a href="tel:+918375008009" className="footer-contact-link">+91 83750 08009</a>
              </div>
              <div className="contact-item">
                <span className="c-icon">✉️</span>
                <a href="mailto:info@bookmyshastri.com" className="footer-contact-link">info@bookmyshastri.com</a>
              </div>
              <div className="contact-item">
                <span className="c-icon">📍</span>
                <span>T-4B-506, NX One Plot no.17, Techzone-4, Greater Noida West, GAUTAM BUDDHA NAGAR, Pin 201308</span>
              </div>
            </div>
          </div>

          {/* Links Column 1: Services */}
          <div className="footer-links-col">
            <h4 className="footer-heading">SERVICES</h4>
            <ul className="footer-links-list">
              <li><a href="#experience">Home Offline Puja</a></li>
              <li><a href="#experience">Temple Live Puja</a></li>
              <li><a href="#group-pujas">Katha Jaap &amp; Havans</a></li>
              <li><a href="#trending">Pind-Dan &amp; Pitra Dosh</a></li>
              <li><a href="#trending">Kundli &amp; Dosha Nivaran</a></li>
              <li><a href="#pandits">Corporate Office Vastu</a></li>
            </ul>
          </div>

          {/* Links Column 2: Community */}
          <div className="footer-links-col">
            <h4 className="footer-heading">COMMUNITY</h4>
            <ul className="footer-links-list">
              <li><a href="#home">Spiritual Blog</a></li>
              <li><a href="#home">Daily Hindu Panchang</a></li>
              <li><a href="#experience">Live Temple Aarti</a></li>
              <li><a href="#group-pujas">Auspicious Muhurat</a></li>
              <li><a href="#home">Festival Calendar 2026</a></li>
              <li><a href="#pandits">Vedic Mantras Library</a></li>
            </ul>
          </div>

          {/* Links Column 3: Support */}
          <div className="footer-links-col">
            <h4 className="footer-heading">SUPPORT</h4>
            <ul className="footer-links-list">
              <li><a href="#home">Help &amp; Support Center</a></li>
              <li><a href="#pandits">Track Your Pandit</a></li>
              <li><a href="#home">Samagri Quality Check</a></li>
              <li><a href="#home">Frequently Asked Questions</a></li>
              <li><a href="#home">Partner With Us</a></li>
              <li><a href="#home">Pandit Registration</a></li>
            </ul>
          </div>

          {/* Links Column 4: Newsletter */}
          <div className="footer-newsletter-col">
            <h4 className="footer-heading">DIVINE UPDATES</h4>
            <p className="newsletter-desc">
              Subscribe to receive weekly auspicious Tithi alerts, Ekadashi dates, and Panchang updates.
            </p>

            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                {subscribed ? 'Subscribed! 🕉️' : 'Join'}
              </button>
            </form>
            {subscribed && (
              <p className="subscribe-success">Hari Om! You have joined our devotional circle.</p>
            )}

            {/* Social Links */}
            <div className="footer-social-row">
              <a href="#facebook" className="social-pill" title="Facebook">FB</a>
              <a href="#instagram" className="social-pill" title="Instagram">IG</a>
              <a href="#youtube" className="social-pill" title="YouTube">YT</a>
              <a href="https://wa.me/918375008009" target="_blank" rel="noopener noreferrer" className="social-pill" title="WhatsApp (+91 83750 08009)">WA</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} Book My Shastri. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <a href="#privacy">Privacy Policy</a>
            <span>•</span>
            <a href="#terms">Terms of Service</a>
            <span>•</span>
            <a href="#cancellation">Cancellation &amp; Refund</a>
            <span>•</span>
            <a href="#security">Security &amp; Trust</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
