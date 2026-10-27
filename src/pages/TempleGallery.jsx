import React, { useState } from 'react';
import templeBanner from '../assets/temple_banner.jpg';
import rudraImg from '../assets/rudrabhishek.jpg';
import navagrahaImg from '../assets/navagraha.jpg';
import chantingImg from '../assets/chanting.jpg';
import havanImg from '../assets/hero_havan.jpg';
import homePujaBanner from '../assets/home_puja_banner.jpg';

const TempleGallery = ({ onOpenBooking }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [activeTempleModal, setActiveTempleModal] = useState(null);

  const temples = [
    {
      id: 1,
      name: 'Vishnupad Temple',
      location: 'Gaya, Bihar',
      region: 'North & East',
      image: navagrahaImg,
      desc: "Ancient shrine with Lord Vishnu's 40cm footprint on solid basalt rock. Situated on the Phalgu river banks, this is India's prime sanctum for ancestral Pind Daan.",
      timings: '05:00 AM - 09:00 PM',
      deity: 'Lord Vishnu',
    },
    {
      id: 2,
      name: 'Mahabodhi Temple',
      location: 'Bodh Gaya, Bihar',
      region: 'North & East',
      image: templeBanner,
      desc: 'UNESCO World Heritage site where Gautama Buddha attained supreme enlightenment under the sacred Bodhi Tree. Revered across the world for peace and contemplation.',
      timings: '05:00 AM - 09:00 PM',
      deity: 'Lord Buddha',
    },
    {
      id: 3,
      name: 'Prem Mandir',
      location: 'Vrindavan, UP',
      region: 'North & East',
      image: homePujaBanner,
      desc: 'Stunning white Italian Carrara marble temple complex dedicated to the divine love of Radha-Krishna and Sita-Rama, known for breathtaking evening light displays.',
      timings: '05:30 AM - 08:30 PM',
      deity: 'Radha Krishna',
    },
    {
      id: 4,
      name: 'Kashi Vishwanath',
      location: 'Varanasi, UP',
      region: 'North & East',
      image: rudraImg,
      desc: 'One of the twelve holiest Jyotirlingas located on the holy banks of river Ganga in Varanasi. Liberates the soul from the endless cycle of birth and death.',
      timings: '03:00 AM - 11:00 PM',
      deity: 'Lord Shiva (Mahadev)',
    },
    {
      id: 5,
      name: 'Meenakshi Amman',
      location: 'Madurai, TN',
      region: 'South',
      image: chantingImg,
      desc: 'Dravidian architectural masterpiece with 14 towering colorful gopurams dedicated to Goddess Meenakshi (Parvati) and her consort Sundareswarar.',
      timings: '05:00 AM - 10:00 PM',
      deity: 'Maa Meenakshi & Shiva',
    },
    {
      id: 6,
      name: 'Jagannath Temple',
      location: 'Puri, Odisha',
      region: 'North & East',
      image: havanImg,
      desc: 'Sacred Char Dham coastal shrine famous for the grand annual Ratha Yatra, mysterious wind-defying temple flags, and blessed Mahaprasad.',
      timings: '05:30 AM - 09:30 PM',
      deity: 'Lord Jagannath, Balabhadra, Subhadra',
    },
    {
      id: 7,
      name: 'Somnath Temple',
      location: 'Veraval, Gujarat',
      region: 'West',
      image: rudraImg,
      desc: 'The eternal First Jyotirlinga standing proudly on the Arabian Sea coast, rebuilt multiple times throughout history as an unbreakable symbol of Hindu faith.',
      timings: '06:00 AM - 09:30 PM',
      deity: 'Lord Somnath (Shiva)',
    },
    {
      id: 8,
      name: 'Banke Bihari Temple',
      location: 'Vrindavan, UP',
      region: 'North & East',
      image: navagrahaImg,
      desc: 'Lively temple where Lord Krishna is lovingly worshipped in his charming child form. Priests continuously pull the curtain to prevent the Lord from being overwhelmed by devotees.',
      timings: '07:45 AM - 09:30 PM',
      deity: 'Thakur Banke Bihari',
    },
    {
      id: 9,
      name: 'Ram Janmabhoomi',
      location: 'Ayodhya, UP',
      region: 'North & East',
      image: templeBanner,
      desc: 'The sacred birthplace of Maryada Purushottam Lord Rama, featuring a magnificent new Nagara-style pink sandstone temple complex.',
      timings: '06:30 AM - 09:30 PM',
      deity: 'Ram Lalla',
    },
    {
      id: 10,
      name: 'Tirupati Balaji',
      location: 'Tirumala, AP',
      region: 'South',
      image: chantingImg,
      desc: 'The world’s most visited and prosperous pilgrimage shrine perched on Venkatadri Hill, dedicated to Lord Sri Venkateswara for fulfilling deepest worldly desires.',
      timings: '03:00 AM - 11:30 PM',
      deity: 'Lord Venkateswara',
    },
    {
      id: 11,
      name: 'Kedarnath Temple',
      location: 'Kedarnath, Uttarakhand',
      region: 'Himalayan',
      image: rudraImg,
      desc: 'The highest and most revered Shiva Jyotirlinga shrine nestled at 3,583 meters against the majestic Kedarnath peak and Mandakini river.',
      timings: '05:00 AM - 09:00 PM (Seasonal)',
      deity: 'Kedarnath Jyotirlinga',
    },
    {
      id: 12,
      name: 'Kamakhya Temple',
      location: 'Guwahati, Assam',
      region: 'North & East',
      image: havanImg,
      desc: 'Most venerated Shakti Peetha located on Nilachal Hill celebrating the creative primal power and natural cycles of the Divine Mother Goddess.',
      timings: '05:30 AM - 08:00 PM',
      deity: 'Maa Kamakhya',
    },
    {
      id: 13,
      name: 'Golden Temple (Harmandir Sahib)',
      location: 'Amritsar, Punjab',
      region: 'North & East',
      image: homePujaBanner,
      desc: 'A shimmering gold-plated holy sanctuary surrounded by the sacred Amrit Sarovar lake, symbolizing universal brotherhood, equality, and 24/7 free community langar.',
      timings: 'Open 24 Hours',
      deity: 'Guru Granth Sahib Ji',
    },
    {
      id: 14,
      name: 'Vaishno Devi',
      location: 'Katra, J&K',
      region: 'Himalayan',
      image: templeBanner,
      desc: 'Holy cave shrine in the Trikuta mountains where Maa Vaishno Devi resides as three sacred natural rock pindies (Mahakali, Mahalakshmi, Mahasaraswati).',
      timings: 'Open 24 Hours (All Year)',
      deity: 'Mata Vaishno Devi',
    },
    {
      id: 15,
      name: 'Badrinath Temple',
      location: 'Badrinath, Uttarakhand',
      region: 'Himalayan',
      image: navagrahaImg,
      desc: 'Crucial Himalayan Char Dham shrine along the Alaknanda river, dedicated to Lord Vishnu seated in deep meditative Padmasana posture.',
      timings: '04:30 AM - 09:00 PM (Seasonal)',
      deity: 'Lord Badri Vishal',
    },
  ];

  const regions = ['All', 'North & East', 'South', 'West', 'Himalayan'];

  const filtered = temples.filter((t) => {
    const matchesSearch =
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.deity.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === 'All' || t.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="temple-gallery-page">
      {/* Top Hero Section with Map Banner */}
      <div className="tg-hero-card" data-animate="fade-down">
        <div className="tg-hero-left">
          <div className="tg-tag">EXPLORE DIVINE INDIA</div>
          <h1 className="tg-hero-title">Connect with Divine Temples</h1>
          <p className="tg-hero-subtitle">
            Discover the history, timings, and spiritual essence of India's most sacred pilgrimages.
          </p>
        </div>

        {/* Right Stylized Map Badge */}
        <div className="tg-hero-right" data-animate="fade-left">
          <div className="tg-map-card">
            <div className="tg-pin tg-pin-1">
              <span className="pin-dot"></span>
              <span className="pin-text">Salasar Balaji, Rajasthan</span>
            </div>
            <div className="tg-pin tg-pin-2">
              <span className="pin-dot"></span>
              <span className="pin-text">Mahakaleshwar, MP</span>
            </div>
            <div className="tg-pin tg-pin-3">
              <span className="pin-dot"></span>
              <span className="pin-text">Kolhapur Mahalakshmi, Maharashtra</span>
            </div>
            <div className="map-art-watermark">🕉️ BHARAT DARSHAN</div>
          </div>
        </div>
      </div>

      {/* Section Subheader & Controls */}
      <div className="tg-controls-wrap" data-animate="fade-up">
        <div className="tg-section-header">
          <h2 className="tg-section-title">Prasiddh Mandir</h2>
          <span className="tg-count">Showing {filtered.length} temples</span>
        </div>

        {/* Search & Region Pills */}
        <div className="tg-filter-bar">
          <div className="tg-search-box">
            <span className="tg-search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search temple, deity or holy city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="tg-search-input"
            />
            {searchTerm && (
              <button className="tg-clear-btn" onClick={() => setSearchTerm('')} type="button">
                ✕
              </button>
            )}
          </div>

          <div className="tg-region-pills">
            {regions.map((reg) => (
              <button
                key={reg}
                type="button"
                className={`tg-pill ${selectedRegion === reg ? 'active' : ''}`}
                onClick={() => setSelectedRegion(reg)}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 15 Temple Cards Grid (4 columns on desktop, responsive) */}
      <div className="tg-grid">
        {filtered.map((temple, idx) => (
          <div
            key={temple.id}
            className="tg-card"
            data-animate={idx % 3 === 0 ? 'fade-up' : idx % 3 === 1 ? 'fade-left' : 'fade-right'}
          >
            <div className="tg-img-wrap">
              <img src={temple.image} alt={temple.name} className="tg-card-img" />
              <div className="tg-location-badge">
                <span className="tg-pin-icon">📍</span>
                <span>{temple.location.toUpperCase()}</span>
              </div>
            </div>

            <div className="tg-card-body">
              <h3 className="tg-temple-name">{temple.name}</h3>
              <p className="tg-temple-desc">{temple.desc}</p>

              <div className="tg-card-footer">
                <button
                  className="btn-tg-explore"
                  onClick={() => setActiveTempleModal(temple)}
                  type="button"
                >
                  <span>Explore Now</span>
                  <span className="tg-arrow-circle">›</span>
                </button>
                <button
                  className="btn-tg-book"
                  onClick={() => onOpenBooking(`Temple Darshan & Puja at ${temple.name}`)}
                  type="button"
                >
                  Book Puja
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Temple Detail Modal */}
      {activeTempleModal && (
        <div className="modal-backdrop" onClick={() => setActiveTempleModal(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveTempleModal(null)} type="button">
              ✕
            </button>
            <div className="tg-modal-img-wrap">
              <img
                src={activeTempleModal.image}
                alt={activeTempleModal.name}
                className="tg-modal-img"
              />
            </div>
            <div className="modal-header text-left mt-4">
              <div className="tg-tag mb-2">SACRED PILGRIMAGE SANCTUM</div>
              <h3 className="modal-title">{activeTempleModal.name}</h3>
              <p className="tg-location-modal">📍 {activeTempleModal.location}</p>
            </div>
            <div className="tg-modal-details">
              <div className="tg-detail-chip">
                <strong>Main Deity:</strong> {activeTempleModal.deity}
              </div>
              <div className="tg-detail-chip">
                <strong>Darshan Timings:</strong> {activeTempleModal.timings}
              </div>
              <p className="tg-modal-desc mt-3">{activeTempleModal.desc}</p>
            </div>
            <div className="mt-4 flex gap-3">
              <button
                className="btn-modal-submit flex-1"
                onClick={() => {
                  const tName = activeTempleModal.name;
                  setActiveTempleModal(null);
                  onOpenBooking(`Special Darshan & Sankalp at ${tName}`);
                }}
                type="button"
              >
                Book Sankalp Puja at this Temple 🕉️
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TempleGallery;
