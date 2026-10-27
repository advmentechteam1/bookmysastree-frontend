import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import DivineHomePuja from './pages/DivineHomePuja';
import DivineTemplePuja from './pages/DivineTemplePuja';
import DivineKathaJaap from './pages/DivineKathaJaap';
import PindDaanPitraDosh from './pages/PindDaanPitraDosh';
import TempleGallery from './pages/TempleGallery';
import SignInPage from './pages/SignInPage';
import PartnerPortalPage from './pages/PartnerPortalPage';
import { KundliModal, SignInModal, PartnerModal, BookingModal } from './components/Modals';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [previousPage, setPreviousPage] = useState('home');
  const [kundliOpen, setKundliOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [partnerOpen, setPartnerOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedCeremony, setSelectedCeremony] = useState('Vedic Puja Ceremony');

  const handleOpenBooking = (ceremony) => {
    setSelectedCeremony(ceremony || 'Vedic Puja Ceremony');
    setBookingOpen(true);
  };

  const handleNavigate = (page) => {
    if (currentPage !== 'signin' && currentPage !== 'partner') {
      setPreviousPage(currentPage);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromAuth = () => {
    setCurrentPage(previousPage || 'home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll Animations: Elements glide in from top, bottom, left, and right on scroll
  useEffect(() => {
    const selector = `
      [data-animate],
      .section-header,
      .section-header-split,
      .hero-left,
      .hero-right,
      .hero-cta-group,
      .stat-card,
      .exp-card,
      .group-puja-card,
      .trending-card,
      .trust-left,
      .trust-point-card,
      .why-card,
      .pandit-card,
      .step-card,
      .testimonial-card,
      .dhp-card,
      .dtp-card,
      .dkj-card,
      .dpp-card,
      .tg-card,
      .dpp-header-wrap,
      .dpp-search-section,
      .tg-hero-card,
      .tg-hero-right,
      .tg-controls-wrap,
      .footer-col
    `;

    const targets = document.querySelectorAll(selector);
    const animDirections = ['fade-left', 'fade-up', 'fade-right', 'fade-down'];

    targets.forEach((el, index) => {
      if (!el.getAttribute('data-animate')) {
        if (el.classList.contains('section-header') || el.classList.contains('section-header-split') || el.classList.contains('dpp-header-wrap')) {
          el.setAttribute('data-animate', 'fade-down'); // Top se aaye
        } else if (el.classList.contains('hero-left') || el.classList.contains('trust-left')) {
          el.setAttribute('data-animate', 'fade-left'); // Left se aaye
        } else if (el.classList.contains('hero-right') || el.classList.contains('tg-hero-right')) {
          el.setAttribute('data-animate', 'fade-right'); // Right se aaye
        } else if (el.classList.contains('hero-cta-group') || el.classList.contains('dpp-search-section') || el.classList.contains('tg-controls-wrap')) {
          el.setAttribute('data-animate', 'fade-up'); // Bottom se aaye
        } else {
          // Cards alternate between left, bottom, right, top
          el.setAttribute('data-animate', animDirections[index % animDirections.length]);
        }
      }

      // Add subtle stagger delay for harmonious entrance
      if (!el.style.transitionDelay) {
        el.style.transitionDelay = `${(index % 4) * 0.1}s`;
      }
    });

    let observer;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-animated');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -40px 0px',
        }
      );

      targets.forEach((el) => observer.observe(el));
    }

    // Scroll fallback to ensure any element in view triggers immediately
    const checkViewport = () => {
      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 60 && rect.bottom > 0) {
          el.classList.add('is-animated');
        }
      });
    };

    setTimeout(checkViewport, 60);
    setTimeout(checkViewport, 250);

    window.addEventListener('scroll', checkViewport, { passive: true });
    window.addEventListener('resize', checkViewport, { passive: true });

    return () => {
      if (observer) {
        targets.forEach((el) => observer.unobserve(el));
      }
      window.removeEventListener('scroll', checkViewport);
      window.removeEventListener('resize', checkViewport);
    };
  }, [currentPage]);

  const isAuthPage = currentPage === 'signin' || currentPage === 'partner';

  return (
    <div className="app-root">
      {/* Top Auspicious Announcement Ribbon */}
      {!isAuthPage && (
        <div className="auspicious-ribbon">
          <span>✨ Shubh Muhurat Booking Open for Akshaya Tritiya &amp; Vivah Sanskar 2026. Book Verified Pandits with 100% Pure Samagri.</span>
        </div>
      )}

      {/* Main Header / Navigation with 4% padding */}
      {!isAuthPage && (
        <Header 
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenSignIn={() => handleNavigate('signin')}
          onOpenPartner={() => handleNavigate('partner')}
          onOpenBooking={() => handleOpenBooking('Vedic Puja')}
        />
      )}

      {/* Main Page Content */}
      <main className={`main-content ${isAuthPage ? 'auth-main-content' : ''}`}>
        {currentPage === 'signin' && (
          <SignInPage 
            onBackHome={handleBackFromAuth}
            onNavigateToPartner={() => handleNavigate('partner')}
          />
        )}
        {currentPage === 'partner' && (
          <PartnerPortalPage 
            onBackHome={handleBackFromAuth}
            onNavigateToDevoteeSignIn={() => handleNavigate('signin')}
          />
        )}
        {currentPage === 'pind-daan' && (
          <PindDaanPitraDosh onOpenBooking={handleOpenBooking} />
        )}
        {currentPage === 'temple-gallery' && (
          <TempleGallery onOpenBooking={handleOpenBooking} />
        )}
        {currentPage === 'katha-jaap' && (
          <DivineKathaJaap onOpenBooking={handleOpenBooking} />
        )}
        {currentPage === 'temple-puja' && (
          <DivineTemplePuja onOpenBooking={handleOpenBooking} />
        )}
        {currentPage === 'home-bidding' && (
          <DivineHomePuja onOpenBooking={handleOpenBooking} />
        )}
        {currentPage === 'home' && (
          <Home 
            onOpenKundli={() => setKundliOpen(true)}
            onOpenBooking={handleOpenBooking}
          />
        )}
      </main>

      {/* Footer with 4% padding */}
      {!isAuthPage && <Footer />}

      {/* Modals */}
      <KundliModal 
        isOpen={kundliOpen} 
        onClose={() => setKundliOpen(false)} 
      />
      
      <SignInModal 
        isOpen={signInOpen} 
        onClose={() => setSignInOpen(false)} 
        onNavigateToPartner={() => { setSignInOpen(false); handleNavigate('partner'); }}
      />

      <PartnerModal 
        isOpen={partnerOpen} 
        onClose={() => setPartnerOpen(false)} 
        onNavigateToDevoteeSignIn={() => { setPartnerOpen(false); handleNavigate('signin'); }}
      />

      <BookingModal 
        isOpen={bookingOpen} 
        ceremonyName={selectedCeremony}
        onClose={() => setBookingOpen(false)} 
      />
    </div>
  );
}

export default App;
