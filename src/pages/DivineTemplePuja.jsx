import React, { useState } from 'react';
import templeBanner from '../assets/temple_banner.jpg';
import rudraImg from '../assets/rudrabhishek.jpg';
import navagrahaImg from '../assets/navagraha.jpg';
import chantingImg from '../assets/chanting.jpg';
import havanImg from '../assets/hero_havan.jpg';

const DivineTemplePuja = ({ onOpenBooking }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const templePujas = [
    {
      id: 1,
      title: 'Rudrabhishek',
      category: 'Jyotirlinga',
      location: 'Kashi Vishwanath Temple (Varanasi, Uttar Pradesh)',
      date: '04 May',
      time: '03:20 AM',
      active: true,
      image: rudraImg,
      desc: 'A live streamed, highly sacred ritual at the holiest Shiva temple, where the Lingam is bathed to wash away negative karma and spiritual impurities.',
    },
    {
      id: 2,
      title: 'Rahu-Ketu Shanti',
      category: 'Navagraha & Dosha',
      location: 'Sri Kalahasteeswara Temple (Srikalahasti, Andhra Pradesh)',
      date: '24 Jun',
      time: '02:50 AM',
      active: true,
      image: navagrahaImg,
      desc: 'A remote astrological appeasement to calm the shadow planets Rahu and Ketu, stopping sudden massive losses, confusion, and hidden diseases.',
    },
    {
      id: 3,
      title: 'Baglamukhi Mantra Jaap & Havan',
      category: 'Protection & Shanti',
      location: 'Maa Baglamukhi Temple (Nalkheda, Madhya Pradesh)',
      date: '08 Sept',
      time: '01:40 AM',
      active: false,
      image: chantingImg,
      desc: 'A potent invocation of Goddess Baglamukhi to paralyze the negative speech and actions of enemies and achieve total victory in legal or competitive matters.',
    },
    {
      id: 4,
      title: 'Maha Mrityunjaya Jaap (1.25 Lakh Chants)',
      category: 'Protection & Shanti',
      location: 'Kashi & Haridwar Ganga Sanctum',
      date: '28 Jul',
      time: '06:15 PM',
      active: true,
      image: chantingImg,
      desc: 'The intense, sustained chanting of the Maha Mrityunjaya Mantra (usually 1.25 Lakh times) by a team of pandits to generate a massive healing energy vortex.',
    },
    {
      id: 5,
      title: 'Diwali Maha Laxmi Kubera Puja',
      category: 'Wealth & Prosperity',
      location: 'Trimbakeshwar Temple Complex (Nashik)',
      date: '06 May',
      time: '10:42 AM',
      active: true,
      image: havanImg,
      desc: 'A highly popular online group ritual performed on the night of Diwali to unlock collective wealth generation and business expansion for all participants.',
    },
    {
      id: 6,
      title: 'Maha Shivratri Akhand Puja',
      category: 'Jyotirlinga',
      location: 'Somnath Jyotirlinga (Gujarat)',
      date: '27 Apr',
      time: '05:03 PM',
      active: false,
      image: rudraImg,
      desc: 'A massive online group healing ritual performed during Maha Shivratri, broadcasting the collective power of thousands of chants to all participants.',
    },
    {
      id: 7,
      title: 'Navagraha Shanti Mahayagya',
      category: 'Navagraha & Dosha',
      location: 'Suryanar Kovil Temple (Tamil Nadu)',
      date: '05 May',
      time: '11:30 AM',
      active: false,
      image: navagrahaImg,
      desc: "A comprehensive remote temple puja directed at all nine planetary deities to align an individual's astrological chart with positive cosmic flows.",
    },
    {
      id: 8,
      title: 'Kaal Sarp Dosh Nivaran',
      category: 'Navagraha & Dosha',
      location: 'Trimbakeshwar Jyotirlinga Temple (Nashik, Maharashtra)',
      date: '05 May',
      time: '02:53 AM',
      active: false,
      image: navagrahaImg,
      desc: 'A remote ritual facilitated at the most potent site for breaking the karmic entrapment when all planets are trapped between Rahu and Ketu.',
    },
    {
      id: 9,
      title: 'Mangal Dosh Shanti',
      category: 'Navagraha & Dosha',
      location: 'Mangalnath Temple (Ujjain, Madhya Pradesh)',
      date: '09 Jun',
      time: '02:33 PM',
      active: false,
      image: havanImg,
      desc: 'A targeted remote astrological remedy performed at the birthplace of Mars to neutralize severe Mangal Dosha causing anger and marriage delays.',
    },
    {
      id: 10,
      title: 'Ganpati Atharvashirsha Path',
      category: 'Wealth & Prosperity',
      location: 'Shree Siddhivinayak Temple (Mumbai, Maharashtra)',
      date: '26 May',
      time: '06:16 AM',
      active: false,
      image: templeBanner,
      desc: 'The remote recitation of the powerful Atharvashirsha text to Lord Ganesha, specifically to guarantee success in massive business or political endeavors.',
    },
    {
      id: 11,
      title: 'Maa Kamakhya Devi Tantra Puja',
      category: 'Shaktipeeth',
      location: 'Kamakhya Shaktipeeth (Guwahati, Assam)',
      date: '11 May',
      time: '05:29 AM',
      active: false,
      image: templeBanner,
      desc: 'A highly secretive and powerful remote tantric-vedic puja performed to destroy severe negative energies, evil eye, and ensure victory in unwinnable situations.',
    },
    {
      id: 12,
      title: 'Kashi Vishwanath Annapurna Mahapuja',
      category: 'Jyotirlinga',
      location: 'Kashi Vishwanath Dham (Varanasi, UP)',
      date: '15 Jun',
      time: '08:00 AM',
      active: true,
      image: rudraImg,
      desc: 'Sacred Annapurna and Shiva Abhishek in Kashi to bestow eternal health, family abundance, and liberation from ancestral karmic bondages.',
    },
  ];

  const filterOptions = ['All', 'Jyotirlinga', 'Shaktipeeth', 'Navagraha & Dosha', 'Wealth & Prosperity', 'Protection & Shanti'];

  const filtered = templePujas.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'All' || p.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="divine-temple-page">
      {/* Top Header & Sub-badge */}
      <div className="dtp-header-wrap">
        <div className="dtp-subtag">SACRED LUXURY RITUALS</div>
        <h1 className="dtp-title">Divine Temple Puja</h1>
        <p className="dtp-subtitle">
          Authentic Vedic rituals and sacred narrations by master priests bringing peace and prosperity to your spiritual journey.
        </p>
      </div>

      {/* Panoramic Sanctum Banner with Quote */}
      <div className="dtp-banner-card">
        <img 
          src={templeBanner} 
          alt="Divine Temple Sanctum with Ancient Bells" 
          className="dtp-banner-img"
        />
        <div className="dtp-banner-overlay">
          <blockquote className="dtp-banner-quote">
            “In the silence of the temple, the soul speaks its truest prayers.”
          </blockquote>
        </div>
      </div>

      {/* Search and Category Filter Section */}
      <div className="dtp-search-section">
        <div className="dtp-search-box">
          <span className="dtp-search-icon">🔍</span>
          <input 
            type="text" 
            placeholder="Search for Temple, Ritual or Deity..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="dtp-search-input"
          />
          {searchTerm && (
            <button className="dtp-clear-btn" onClick={() => setSearchTerm('')}>✕</button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="dtp-filter-pills">
          {filterOptions.map((opt) => (
            <button 
              key={opt}
              className={`dtp-pill ${selectedFilter === opt ? 'active' : ''}`}
              onClick={() => setSelectedFilter(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Count Indicator */}
      <div className="dtp-count-bar">
        <span>Showing <strong>{filtered.length}</strong> Sacred Temple Ceremonies</span>
      </div>

      {/* Temple Cards Grid */}
      <div className="dtp-grid">
        {filtered.map((item) => (
          <div key={item.id} className="dtp-card">
            <div className="dtp-img-wrap">
              <img src={item.image} alt={item.title} className="dtp-card-img" />
              {item.active && (
                <span className="dtp-active-badge">Active</span>
              )}
            </div>

            <div className="dtp-card-body">
              <div className="dtp-card-header">
                <h3 className="dtp-card-title">{item.title}</h3>
                <button 
                  className="btn-dtp-book"
                  onClick={() => onOpenBooking(item.title)}
                  type="button"
                >
                  Book Now
                </button>
              </div>

              {/* Location */}
              <div className="dtp-location-row">
                <span className="dtp-pin">📍</span>
                <span className="dtp-location-text">{item.location}</span>
              </div>

              {/* Date & Time */}
              <div className="dtp-datetime-row">
                <span className="dtp-cal">📅</span>
                <span className="dtp-datetime-text">{item.date} | {item.time}</span>
              </div>

              {/* Description */}
              <p className="dtp-card-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="dhp-empty-state">
          <span>🕉️</span>
          <h3>No temple ceremonies found for "{searchTerm}"</h3>
          <p>Try searching for Shiva, Laxmi, Rahu-Ketu, or reset filters.</p>
          <button className="btn-hero-primary mt-4" onClick={() => { setSearchTerm(''); setSelectedFilter('All'); }}>
            Reset Search
          </button>
        </div>
      )}
    </div>
  );
};

export default DivineTemplePuja;
