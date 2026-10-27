import React from 'react';
import rudraImg from '../assets/rudrabhishek.jpg';
import navagrahaImg from '../assets/navagraha.jpg';
import chantingImg from '../assets/chanting.jpg';

const GroupPujas = ({ onOpenBooking }) => {
  const pujas = [
    {
      id: 1,
      title: 'Rudrabhishek',
      date: '04 May',
      time: '07:30 AM',
      image: rudraImg,
      location: 'Trimbakeshwar Shiva Temple',
      description: 'Maha Shivratri special Rudrabhishek performed in holy Trimbakeshwar Shiva Temple to ward off negative energy & spiritual upliftment.',
      price: '₹1,501',
    },
    {
      id: 2,
      title: 'Rahu-Ketu peace',
      date: '09 May',
      time: '09:00 AM',
      image: navagrahaImg,
      location: 'Sri Kalahasti Temple, AP',
      description: 'An astrologically recommended puja at Sri Kalahasti temple for relief from Kaal Sarp, planetary hurdles, and Rahu-Ketu doshas.',
      price: '₹2,100',
    },
    {
      id: 3,
      title: 'Chanting the Mahamrityunjaya',
      date: '11 May',
      time: '06:00 AM',
      image: chantingImg,
      location: 'Kashi Vishwanath Mandir',
      description: 'A continuous session of collective 108 Vedic chants for health, longevity, inner peace, and divine ancestral protection.',
      price: '₹1,100',
    },
  ];

  return (
    <section className="section-wrap group-pujas-section" id="group-pujas">
      <div className="section-container">
        {/* Section Heading */}
        <div className="section-header text-center">
          <h2 className="section-title">Upcoming Group Pujas</h2>
          <p className="section-subtitle">
            Join thousands of devotees in collective worship, receiving blessings from anywhere.
          </p>
        </div>

        {/* Pujas Grid */}
        <div className="group-pujas-grid">
          {pujas.map((item) => (
            <div key={item.id} className="group-puja-card">
              <div className="puja-img-wrap">
                <img src={item.image} alt={item.title} className="puja-img" />
                <div className="date-time-pill">
                  <span className="cal-icon">📅</span> {item.date} | {item.time}
                </div>
              </div>

              <div className="puja-card-body">
                <div className="puja-header-row">
                  <h3 className="puja-name">{item.title}</h3>
                  <button 
                    className="btn-book-sm"
                    onClick={() => onOpenBooking(item.title)}
                    type="button"
                  >
                    Book Now
                  </button>
                </div>

                <div className="puja-location">
                  <span className="loc-icon">📍</span> {item.location}
                </div>

                <p className="puja-desc">{item.description}</p>

                <div className="puja-footer-row">
                  <span className="puja-price">Starting from {item.price}</span>
                  <span className="puja-sankalp-tag">Includes E-Sankalp</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button 
            className="btn-view-all" 
            onClick={() => onOpenBooking('All Group Pujas')}
            type="button"
          >
            View All Group Pujas →
          </button>
        </div>
      </div>
    </section>
  );
};

export default GroupPujas;
