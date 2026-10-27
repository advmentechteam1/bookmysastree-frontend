import React, { useState } from 'react';
import chantingImg from '../assets/chanting.jpg';
import havanImg from '../assets/hero_havan.jpg';
import navagrahaImg from '../assets/navagraha.jpg';
import rudraImg from '../assets/rudrabhishek.jpg';
import templeBanner from '../assets/temple_banner.jpg';
import homePujaBanner from '../assets/home_puja_banner.jpg';

const DivineKathaJaap = ({ onOpenBooking }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const kathaJaapList = [
    {
      id: 1,
      title: 'Baglamukhi Mantra Jaap & Havan',
      category: 'Durga & Shakti',
      active: true,
      image: chantingImg,
      desc: 'A potent invocation of Goddess Baglamukhi to paralyze the negative speech and actions of enemies and achieve total victory in legal or competitive matters.',
    },
    {
      id: 2,
      title: 'Satyanarayan Katha & Puja',
      category: 'Vishnu & Ramayan',
      active: true,
      image: navagrahaImg,
      desc: 'A sacred Vedic ritual dedicated to Lord Vishnu in his manifestation of truth, involving the recitation of his divine story to invoke grace and abundance.',
    },
    {
      id: 3,
      title: 'Vishnu Sahasranamam Chanting',
      category: 'Vishnu & Ramayan',
      active: true,
      image: homePujaBanner,
      desc: 'The chanting of the 1,000 names of Lord Vishnu, the preserver of the universe, to maintain balance, attract wealth, and ensure continuous protection.',
    },
    {
      id: 4,
      title: 'Lalita Sahasranama Stotram',
      category: 'Durga & Shakti',
      active: true,
      image: templeBanner,
      desc: 'The rhythmic chanting of the 1,000 esoteric names of the Divine Mother (Lalita Tripura Sundari), known for its incredibly high vibrational frequency.',
    },
    {
      id: 5,
      title: 'Gayatri Mantra Akhand Jaap',
      category: 'Mantra Jaap',
      active: true,
      image: havanImg,
      desc: 'The disciplined, sustained chanting of the Gayatri Mantra over a set number of days to invoke the divine light of the Sun for spiritual awakening.',
    },
    {
      id: 6,
      title: 'Durga Saptashati Chandi Paath',
      category: 'Durga & Shakti',
      active: true,
      image: havanImg,
      desc: 'The highly potent recitation of the 700 verses praising Goddess Durga, invoking her fierce warrior energy to conquer negativity and grant boons.',
    },
    {
      id: 7,
      title: 'Sunderkand Musical Paath',
      category: 'Vishnu & Ramayan',
      active: true,
      image: chantingImg,
      desc: "A dynamic musical recitation of the Sunderkand chapter from the Ramayana, focusing on Lord Hanuman's courage, strength, and devotion.",
    },
    {
      id: 8,
      title: 'Maha Mrityunjaya Mantra Jaap (1.25 Lakh)',
      category: 'Maha Mrityunjaya & Shiva',
      active: true,
      image: rudraImg,
      desc: 'The intense, sustained chanting of the Maha Mrityunjaya Mantra (usually 1.25 Lakh times) by a team of pandits to generate a massive healing energy vortex.',
    },
    {
      id: 9,
      title: 'Shiv Mahapuran 7-Day Katha',
      category: 'Maha Mrityunjaya & Shiva',
      active: true,
      image: rudraImg,
      desc: 'The divine discourse on the glories and cosmic manifestations of Mahadev Shiva, destroying fears and bestowing inner peace and family longevity.',
    },
    {
      id: 10,
      title: 'Shrimad Bhagwat Saptah Gyan Yagya',
      category: 'Vishnu & Ramayan',
      active: true,
      image: homePujaBanner,
      desc: 'The supreme spiritual elixir narrating the leelas of Lord Krishna, bringing Moksha, emotional healing, and immense spiritual upliftment to the family.',
    },
    {
      id: 11,
      title: 'Ramcharitmanas 24-Hr Akhand Paath',
      category: 'Vishnu & Ramayan',
      active: true,
      image: chantingImg,
      desc: 'Non-stop recitation of the sacred epic by experienced Vedic singers and pandits, invoking Lord Rama and Hanumanji for supreme home protection.',
    },
    {
      id: 12,
      title: 'Navarna Mantra & Durga Hawan',
      category: 'Durga & Shakti',
      active: true,
      image: havanImg,
      desc: 'The revered 9-syllable root mantra invoking Goddess Chamunda, destroying psychic attacks, evil eye, and severe planetary afflictions.',
    },
  ];

  const filterOptions = [
    'All',
    'Mantra Jaap',
    'Vishnu & Ramayan',
    'Durga & Shakti',
    'Maha Mrityunjaya & Shiva',
  ];

  const filtered = kathaJaapList.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      selectedFilter === 'All' || item.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="divine-katha-page">
      {/* Top Header & Sub-badge */}
      <div className="dkj-header-wrap">
        <div className="dkj-subtag">BOOK MY SASTREE</div>
        <h1 className="dkj-title">Divine Katha &amp; Jaap</h1>
        <p className="dkj-subtitle">
          Authentic Vedic rituals and sacred narrations by master priests, bringing peace and prosperity to your spiritual journey.
        </p>
      </div>

      {/* Search and Category Filter Section */}
      <div className="dkj-search-section">
        <div className="dkj-search-box">
          <span className="dkj-search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search for Katha, Jaap or Devta..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="dkj-search-input"
          />
          {searchTerm && (
            <button
              className="dkj-clear-btn"
              onClick={() => setSearchTerm('')}
              type="button"
            >
              ✕
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="dkj-filter-pills">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              className={`dkj-pill ${selectedFilter === opt ? 'active' : ''}`}
              onClick={() => setSelectedFilter(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Count Indicator */}
      <div className="dkj-count-bar">
        <span>Showing <strong>{filtered.length}</strong> Sacred Katha &amp; Jaap Ceremonies</span>
      </div>

      {/* Cards Grid */}
      <div className="dkj-grid">
        {filtered.map((item) => (
          <div key={item.id} className="dkj-card">
            <div className="dkj-img-wrap">
              <img src={item.image} alt={item.title} className="dkj-card-img" />
              {item.active && (
                <span className="dkj-active-badge">Active</span>
              )}
            </div>

            <div className="dkj-card-body">
              <div className="dkj-card-header">
                <h3 className="dkj-card-title">{item.title}</h3>
                <button
                  className="btn-dkj-book"
                  onClick={() => onOpenBooking(item.title)}
                  type="button"
                >
                  Book Now
                </button>
              </div>

              {/* Description */}
              <p className="dkj-card-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="dhp-empty-state">
          <span>🕉️</span>
          <h3>No Katha or Jaap ceremonies found for "{searchTerm}"</h3>
          <p>Try searching for Satyanarayan, Sunderkand, Gayatri, or reset filters.</p>
          <button
            className="btn-hero-primary mt-4"
            onClick={() => {
              setSearchTerm('');
              setSelectedFilter('All');
            }}
            type="button"
          >
            Reset Search
          </button>
        </div>
      )}
    </div>
  );
};

export default DivineKathaJaap;
