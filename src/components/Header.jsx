import React, { useState, useEffect, useRef } from 'react';

const Header = ({ currentPage, onNavigate, onOpenSignIn, onOpenPartner, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pindDanOpen, setPindDanOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pindDanRef = useRef(null);
  const galleryRef = useRef(null);

  const pindDanTimeout = useRef(null);
  const galleryTimeout = useRef(null);

  const handlePindDanEnter = () => {
    if (pindDanTimeout.current) clearTimeout(pindDanTimeout.current);
    setPindDanOpen(true);
  };

  const handlePindDanLeave = () => {
    pindDanTimeout.current = setTimeout(() => {
      setPindDanOpen(false);
    }, 250);
  };

  const handleGalleryEnter = () => {
    if (galleryTimeout.current) clearTimeout(galleryTimeout.current);
    setGalleryOpen(true);
  };

  const handleGalleryLeave = () => {
    galleryTimeout.current = setTimeout(() => {
      setGalleryOpen(false);
    }, 250);
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (pindDanRef.current && !pindDanRef.current.contains(e.target)) {
        setPindDanOpen(false);
      }
      if (galleryRef.current && !galleryRef.current.contains(e.target)) {
        setGalleryOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (pageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    setPindDanOpen(false);
    setGalleryOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        {/* Brand Logo */}
        <div 
          className="brand-logo" 
          onClick={() => handleLinkClick('home')}
          role="button"
          tabIndex={0}
        >
          <div className="logo-symbol">
            <svg viewBox="0 0 40 40" className="kalash-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" fill="url(#kalash-grad)" />
              <path d="M20 7L23 13H17L20 7Z" fill="#FFF" />
              <ellipse cx="20" cy="14" rx="4" ry="2" fill="#FEF08A" />
              <path d="M14 16C14 14.5 16.5 14 20 14C23.5 14 26 14.5 26 16C26 18 24 20 20 20C16 20 14 18 14 16Z" fill="#FFF" />
              <path d="M12 21C12 18.5 15 18 20 18C25 18 28 18.5 28 21C28 27 25 31 20 31C15 31 12 27 12 21Z" fill="#FFF" opacity="0.9" />
              <circle cx="20" cy="24" r="2.5" fill="#EA580C" />
              <path d="M15 32H25V34H15V32Z" fill="#FFF" />
              <defs>
                <linearGradient id="kalash-grad" x1="0" y1="0" x2="40" y2="40">
                  <stop stopColor="#F97316" />
                  <stop offset="1" stopColor="#C2410C" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="logo-text-group">
            <span className="logo-primary">bookmy<span className="logo-accent">shastri</span></span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <button 
            type="button" 
            className={`nav-item ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </button>
          <button 
            type="button" 
            className={`nav-item ${currentPage === 'home-bidding' ? 'active' : ''}`}
            onClick={() => handleLinkClick('home-bidding')}
          >
            Home Puja
          </button>
          <button 
            type="button" 
            className={`nav-item ${currentPage === 'temple-puja' ? 'active' : ''}`}
            onClick={() => handleLinkClick('temple-puja')}
          >
            Temple Puja
          </button>
          <button 
            type="button" 
            className={`nav-item ${currentPage === 'katha-jaap' ? 'active' : ''}`}
            onClick={() => handleLinkClick('katha-jaap')}
          >
            Katha Jaap
          </button>

          {/* Pind-Dan/Pitra Dosh Dropdown */}
          <div 
            className="nav-dropdown-wrapper" 
            ref={pindDanRef}
            onMouseEnter={handlePindDanEnter}
            onMouseLeave={handlePindDanLeave}
          >
            <button 
              className={`nav-item dropdown-toggle ${currentPage === 'pind-daan' || pindDanOpen ? 'active open' : ''}`}
              onClick={() => handleLinkClick('pind-daan')}
              type="button"
            >
              <span>Pind-Dan/Pitra Dosh</span>
              <svg className={`chevron-icon ${pindDanOpen ? 'rotated' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            {pindDanOpen && (
              <div 
                className="dropdown-menu"
                onMouseEnter={handlePindDanEnter}
                onMouseLeave={handlePindDanLeave}
              >
                <div 
                  className="dropdown-link" 
                  onClick={() => handleLinkClick('pind-daan')}
                  role="button"
                >
                  <span className="dropdown-icon temple-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L3 9v13h18V9L12 2z" />
                      <path d="M9 22V12h6v10" />
                      <path d="M12 5v3" />
                      <path d="M10.5 6.5h3" />
                    </svg>
                  </span>
                  <span className="dropdown-label">Temple Ritual</span>
                </div>
                <div 
                  className="dropdown-link" 
                  onClick={() => handleLinkClick('pind-daan')}
                  role="button"
                >
                  <span className="dropdown-icon globe-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </span>
                  <span className="dropdown-label">Online Ritual</span>
                </div>
              </div>
            )}
          </div>

          {/* Gallery Dropdown */}
          <div 
            className="nav-dropdown-wrapper" 
            ref={galleryRef}
            onMouseEnter={handleGalleryEnter}
            onMouseLeave={handleGalleryLeave}
          >
            <button 
              className={`nav-item dropdown-toggle ${currentPage === 'temple-gallery' || galleryOpen ? 'active open' : ''}`}
              onClick={() => handleLinkClick('temple-gallery')}
              type="button"
            >
              <span>Gallery</span>
              <svg className={`chevron-icon ${galleryOpen ? 'rotated' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            {galleryOpen && (
              <div 
                className="dropdown-menu"
                onMouseEnter={handleGalleryEnter}
                onMouseLeave={handleGalleryLeave}
              >
                <div 
                  className="dropdown-link" 
                  onClick={() => handleLinkClick('temple-gallery')}
                  role="button"
                >
                  <span className="dropdown-icon temple-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 21h18M5 21V10l7-6 7 6v11" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  </span>
                  <span className="dropdown-label">Temple</span>
                </div>
                <div 
                  className="dropdown-link" 
                  onClick={() => handleLinkClick('home-bidding')}
                  role="button"
                >
                  <span className="dropdown-icon calendar-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </span>
                  <span className="dropdown-label">Events</span>
                </div>
                <div 
                  className="dropdown-link" 
                  onClick={() => handleLinkClick('home')}
                  role="button"
                >
                  <span className="dropdown-icon flame-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                    </svg>
                  </span>
                  <span className="dropdown-label">Aarti</span>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right Action Buttons */}
        <div className="header-actions">
          <button className="btn-signin" onClick={onOpenSignIn} type="button">
            Sign In
          </button>
          <button className="btn-partner" onClick={onOpenPartner} type="button">
            Partner Login
          </button>
          
          {/* Mobile Menu Hamburger */}
          <button 
            className="mobile-hamburger" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            type="button"
          >
            {mobileMenuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-content">
            <button 
              className={`mobile-nav-link text-left ${currentPage === 'home' ? 'active' : ''}`} 
              onClick={() => handleLinkClick('home')}
            >
              Home
            </button>
            <button 
              className={`mobile-nav-link text-left ${currentPage === 'home-bidding' ? 'active' : ''}`} 
              onClick={() => handleLinkClick('home-bidding')}
            >
              Home Puja
            </button>
            <button 
              className={`mobile-nav-link text-left ${currentPage === 'temple-puja' ? 'active' : ''}`} 
              onClick={() => handleLinkClick('temple-puja')}
            >
              Temple Puja
            </button>
            <button 
              className={`mobile-nav-link text-left ${currentPage === 'katha-jaap' ? 'active' : ''}`} 
              onClick={() => handleLinkClick('katha-jaap')}
            >
              Katha Jaap
            </button>

            {/* Mobile Pind-Dan Accordion */}
            <div className="mobile-accordion">
              <button 
                className="mobile-accordion-header"
                onClick={() => setPindDanOpen(!pindDanOpen)}
                type="button"
              >
                <span>Pind-Dan/Pitra Dosh</span>
                <svg className={`chevron-icon ${pindDanOpen ? 'rotated' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {pindDanOpen && (
                <div className="mobile-accordion-body">
                  <button className="text-left" onClick={() => handleLinkClick('pind-daan')}>🏛️ Temple Ritual</button>
                  <button className="text-left" onClick={() => handleLinkClick('pind-daan')}>🌐 Online Ritual</button>
                </div>
              )}
            </div>

            {/* Mobile Gallery Accordion */}
            <div className="mobile-accordion">
              <button 
                className="mobile-accordion-header"
                onClick={() => setGalleryOpen(!galleryOpen)}
                type="button"
              >
                <span>Gallery</span>
                <svg className={`chevron-icon ${galleryOpen ? 'rotated' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {galleryOpen && (
                <div className="mobile-accordion-body">
                  <button className="text-left" onClick={() => handleLinkClick('temple-gallery')}>🏛️ Temple</button>
                  <button className="text-left" onClick={() => handleLinkClick('home-bidding')}>📅 Events</button>
                  <button className="text-left" onClick={() => handleLinkClick('home')}>🪔 Aarti</button>
                </div>
              )}
            </div>

            <div className="mobile-drawer-buttons">
              <button 
                className="btn-signin w-full"
                onClick={() => { setMobileMenuOpen(false); onOpenSignIn(); }}
                type="button"
              >
                Sign In
              </button>
              <button 
                className="btn-partner w-full"
                onClick={() => { setMobileMenuOpen(false); onOpenPartner(); }}
                type="button"
              >
                Partner Login
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
