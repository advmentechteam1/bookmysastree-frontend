import React, { useState } from 'react';
import havanImg from '../assets/hero_havan.jpg';
import navagrahaImg from '../assets/navagraha.jpg';
import chantingImg from '../assets/chanting.jpg';
import templeBanner from '../assets/temple_banner.jpg';
import homePujaBanner from '../assets/home_puja_banner.jpg';
import rudraImg from '../assets/rudrabhishek.jpg';

const PindDaanPitraDosh = ({ onOpenBooking }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const rituals = [
    {
      id: 1,
      title: 'Pitra Dosh Nivaran Puja',
      location: 'TBA (Trimbakeshwar / Haridwar / Gaya)',
      date: '26 May',
      time: '07:51 PM',
      active: true,
      image: havanImg,
      category: 'Dosha Nivaran',
      desc: 'A corrective ritual performed to appease unhappy ancestors whose karmic debts may be causing stagnation, family discord, or suffering in the current generation.',
    },
    {
      id: 2,
      title: 'Varshika Shradh',
      location: 'Noida (In-Person / Home)',
      date: '23 Jun',
      time: '07:07 PM',
      active: true,
      image: navagrahaImg,
      category: 'Annual Shradh',
      desc: "The annual in-person death anniversary ritual performed exactly one lunar year after the passing, solidifying the soul's place among the revered ancestors.",
    },
    {
      id: 3,
      title: 'Mahalaya Tarpan',
      location: 'Noida / Holy Riverbank',
      date: '09 Jun',
      time: '06:05 AM',
      active: true,
      image: chantingImg,
      category: 'Tarpan',
      desc: 'The physical offering of sacred water mixed with black sesame seeds performed at a holy riverbank on the final, most crucial day of the Pitru Paksha period.',
    },
    {
      id: 4,
      title: 'Pret Shila Shraddh',
      location: 'Pret Shila Hill, Gaya',
      date: '08 Jul',
      time: '11:32 AM',
      active: true,
      image: templeBanner,
      category: 'Gaya Tirth',
      desc: "A highly specific physical pilgrimage to the 'hill of ghosts' in Gaya, performed to appease and liberate violent, aggressive, or deeply troubled ancestral spirits.",
    },
    {
      id: 5,
      title: 'Tripindi Shradh',
      location: 'Trimbakeshwar / Noida',
      date: '23 Jun',
      time: '11:30 AM',
      active: true,
      image: navagrahaImg,
      category: 'Dosha Nivaran',
      desc: 'An in-person ritual utilizing three sacred kalashas to liberate ancestors who passed away prematurely, were unmarried, or are stuck due to unfulfilled desires.',
    },
    {
      id: 6,
      title: 'Parvan Shradh (5 Vedi Gaya)',
      location: 'Gaya Ji Sanctum, Bihar',
      date: '02 Jul',
      time: '11:28 AM',
      active: true,
      image: homePujaBanner,
      category: 'Gaya Tirth',
      desc: 'An extensive, multi-day physical pilgrimage in Gaya performing targeted rituals across up to 54 specific sacred locations for complete 7-generation lineage liberation.',
    },
    {
      id: 7,
      title: 'Ekodrishti Gaya Shradh',
      location: 'Phalgu River, Gaya',
      date: '20 May',
      time: '11:27 AM',
      active: true,
      image: rudraImg,
      category: 'Gaya Tirth',
      desc: 'The standard, physically attended one-day Pind Daan ritual performed at three primary sacred spots (Phalgu River, Vishnu Pad, Akshaya Vat) in Gaya.',
    },
    {
      id: 8,
      title: 'Narayan Bali & Nagbali Puja',
      location: 'Trimbakeshwar Temple Complex, Nashik',
      date: '15 Jun',
      time: '08:30 AM',
      active: true,
      image: havanImg,
      category: 'Dosha Nivaran',
      desc: 'An essential Vedic fire ceremony performed to neutralize accidental deaths, ancestral curses, and severe Kaal Sarp & Pitru doshas for family peace.',
    },
  ];

  const filterOptions = ['All', 'Gaya Tirth', 'Dosha Nivaran', 'Annual Shradh', 'Tarpan'];

  const filtered = rituals.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'All' || item.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="divine-pind-page">
      {/* Top Header & Sub-badge */}
      <div className="dpp-header-wrap" data-animate="fade-down">
        <div className="dpp-subtag">BOOK MY SHASTRI</div>
        <h1 className="dpp-title">Pind Daan / Pitra Dosh</h1>
        <p className="dpp-subtitle">
          Pind Daan is a sacred Hindu ritual offering peace to departed souls. By offering pind daan at holy sites, it frees ancestors from earthly attachments, helping them attain salvation.
        </p>
      </div>

      {/* Search and Category Filter Section */}
      <div className="dpp-search-section" data-animate="fade-up">
        <div className="dpp-search-box">
          <span className="dpp-search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search for Pind Daan or Ritual site..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="dpp-search-input"
          />
          {searchTerm && (
            <button className="dpp-clear-btn" onClick={() => setSearchTerm('')} type="button">
              ✕
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="dpp-filter-pills">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              className={`dpp-pill ${selectedFilter === opt ? 'active' : ''}`}
              onClick={() => setSelectedFilter(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Count Indicator */}
      <div className="dpp-count-bar">
        <span>Showing <strong>{filtered.length}</strong> Sacred Pitru Ceremonies</span>
      </div>

      {/* Cards Grid */}
      <div className="dpp-grid">
        {filtered.map((item, idx) => (
          <div
            key={item.id}
            className="dpp-card"
            data-animate={idx % 2 === 0 ? 'fade-left' : 'fade-right'}
          >
            <div className="dpp-img-wrap">
              <img src={item.image} alt={item.title} className="dpp-card-img" />
              {item.active && <span className="dpp-active-badge">Active</span>}
            </div>

            <div className="dpp-card-body">
              <div className="dpp-card-header">
                <h3 className="dpp-card-title">{item.title}</h3>
                <button
                  className="btn-dpp-book"
                  onClick={() => onOpenBooking(item.title)}
                  type="button"
                >
                  Book Now
                </button>
              </div>

              {/* Location */}
              <div className="dpp-location-row">
                <span className="dpp-pin">📍</span>
                <span className="dpp-location-text">{item.location}</span>
              </div>

              {/* Date & Time */}
              <div className="dpp-datetime-row">
                <span className="dpp-cal">📅</span>
                <span className="dpp-datetime-text">{item.date} | {item.time}</span>
              </div>

              {/* Description */}
              <p className="dpp-card-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="dhp-empty-state">
          <span>🕉️</span>
          <h3>No rituals found matching "{searchTerm}"</h3>
          <p>Try searching for Gaya, Shradh, Tarpan, or reset filters.</p>
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

export default PindDaanPitraDosh;
