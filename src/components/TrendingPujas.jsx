import React from 'react';
import karanBhedanImg from '../assets/karan_bhedan.jpg';
import navagrahaImg from '../assets/navagraha.jpg';
import havanImg from '../assets/hero_havan.jpg';

const TrendingPujas = ({ onOpenBooking }) => {
  const trendingList = [
    {
      id: 'karan-bhedan',
      title: 'Karan-bhedan (Ear Piercing)',
      tag: 'Sanskar Ritual',
      image: karanBhedanImg,
      description: 'The traditional ear piercing ceremony performed for young children rooted in ancient Ayurvedic science for intellect and health.',
      duration: '1.5 Hours',
      price: '₹2,499',
    },
    {
      id: 'nadi-dosha',
      title: 'Nadi Dosha Nivaran',
      tag: 'Kundli Shanti',
      image: navagrahaImg,
      description: 'An astrological remedy performed when a prospective bride and groom share identical Nadi to bring harmony and progeny blessings.',
      duration: '3.0 Hours',
      price: '₹5,100',
    },
    {
      id: 'mool-nakshatra',
      title: 'Mool Nakshatra Shanti',
      tag: 'Graha Shanti',
      image: havanImg,
      description: 'A comprehensive 27-leaf ritual for children born in gandmool nakshatras to pacify planetary influences and safeguard family.',
      duration: '3.5 Hours',
      price: '₹4,500',
    },
  ];

  return (
    <section className="section-wrap trending-section" id="trending">
      <div className="section-container">
        {/* Header with Title and View All */}
        <div className="section-header-split">
          <div>
            <h2 className="section-title">Trending Pujas</h2>
            <p className="section-subtitle">Most booked ceremonies this month</p>
          </div>
          <button 
            className="view-all-link"
            onClick={() => onOpenBooking('All Trending Pujas')}
            type="button"
          >
            View All <span className="arrow">→</span>
          </button>
        </div>

        {/* Cards Grid */}
        <div className="trending-grid">
          {trendingList.map((item) => (
            <div key={item.id} className="trending-card">
              <div className="trending-img-box">
                <img src={item.image} alt={item.title} className="trending-img" />
                <span className="trending-tag">{item.tag}</span>
              </div>

              <div className="trending-body">
                <div className="trending-top-line">
                  <h3 className="trending-name">{item.title}</h3>
                </div>

                <p className="trending-desc">{item.description}</p>

                <div className="trending-meta">
                  <span className="duration-badge">⏱ {item.duration}</span>
                  <span className="price-tag">{item.price}</span>
                </div>

                <button 
                  className="btn-trending-book"
                  onClick={() => onOpenBooking(item.title)}
                  type="button"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingPujas;
