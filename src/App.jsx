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
  const [currentPage, setCurrentPage] = useState('pind-daan');
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
    const handleAnimate = () => {
      const targets = document.querySelectorAll(
        '[data-animate], .experience-card, .puja-card, .trending-card, .pandit-card, .why-card, .step-card, .testimonial-card, .dhp-card, .dtp-card, .dkj-card, .dpp-card, .tg-card'
      );

      targets.forEach((el, index) => {
        if (!el.getAttribute('data-animate')) {
          const animTypes = ['fade-up', 'fade-left', 'fade-right', 'fade-down'];
          el.setAttribute('data-animate', animTypes[index % animTypes.length]);
        }
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 80) {
          el.classList.add('is-animated');
        }
      });
    };

    // Run on initial page load / navigation
    setTimeout(handleAnimate, 50);
    setTimeout(handleAnimate, 250);

    window.addEventListener('scroll', handleAnimate, { passive: true });
    window.addEventListener('resize', handleAnimate, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleAnimate);
      window.removeEventListener('resize', handleAnimate);
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
