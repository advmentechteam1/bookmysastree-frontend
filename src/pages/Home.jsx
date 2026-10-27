import React from 'react';
import Hero from '../components/Hero';
import ExperiencePuja from '../components/ExperiencePuja';
import GroupPujas from '../components/GroupPujas';
import TrendingPujas from '../components/TrendingPujas';
import TrustBanner from '../components/TrustBanner';
import WhyChooseUs from '../components/WhyChooseUs';
import VerifiedPandits from '../components/VerifiedPandits';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';

const Home = ({ onOpenKundli, onOpenBooking }) => {
  return (
    <div className="home-page-container">
      {/* 1. Hero Section */}
      <Hero onOpenKundli={onOpenKundli} onOpenBooking={() => onOpenBooking('General Vedic Pooja')} />

      {/* 2. How Would You Like to Experience Puja? */}
      <ExperiencePuja onOpenBooking={onOpenBooking} />

      {/* 3. Upcoming Group Pujas */}
      <GroupPujas onOpenBooking={onOpenBooking} />

      {/* 4. Trending Pujas */}
      <TrendingPujas onOpenBooking={onOpenBooking} />

      {/* 5. India's Largest Devotional Platform (Trust Banner) */}
      <TrustBanner />

      {/* 6. Why Families Should Choose BookMySastree */}
      <WhyChooseUs />

      {/* 7. Our Verified Pandits */}
      <VerifiedPandits onOpenBooking={onOpenBooking} />

      {/* 8. How BookMySastree Works & Referral Code */}
      <HowItWorks onOpenBooking={onOpenBooking} />

      {/* 9. What Our Customers Say (Testimonials) */}
      <Testimonials />
    </div>
  );
};

export default Home;
