import React, { useState } from 'react';
import homePujaBanner from '../assets/home_puja_banner.jpg';
import karanBhedanImg from '../assets/karan_bhedan.jpg';
import navagrahaImg from '../assets/navagraha.jpg';
import havanImg from '../assets/hero_havan.jpg';
import rudraImg from '../assets/rudrabhishek.jpg';
import chantingImg from '../assets/chanting.jpg';

const DivineHomePuja = ({ onOpenBooking }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const pujas = [
    {
      id: 1,
      title: 'Karan-chedan (Ear Piercing)',
      category: 'Sanskar',
      image: karanBhedanImg,
      desc: 'The traditional ear piercing ceremony performed for young children rooted in ancient Ayurvedic scriptures principles to open inner ear channels and promote health.',
    },
    {
      id: 2,
      title: 'Nadi Dosha',
      category: 'Dosha Nivaran',
      image: navagrahaImg,
      desc: 'An astrological remedy performed when a prospective bride and groom have severe mismatches in their Kundli matching, which threaten health or progeny.',
    },
    {
      id: 3,
      title: 'Mool Nakshatra Shanti',
      category: 'Dosha Nivaran',
      image: havanImg,
      desc: 'A pacification ritual performed precisely 27 days after birth for a child born in difficult nakshatras using water from 27 different sacred sources.',
    },
    {
      id: 4,
      title: 'Mangal Dosha Nivaran',
      category: 'Dosha Nivaran',
      image: navagrahaImg,
      desc: 'A corrective ritual for those with a strong Mars affliction, involving a mock marriage to a pot or tree to absorb the negative karmic impact before wedding.',
    },
    {
      id: 5,
      title: 'Chanting Maha Mrityunjaya',
      category: 'Jaap & Havan',
      image: chantingImg,
      desc: 'A life-saving fire ritual invoking Lord Shiva as the conqueror of death, performed to heal critical illnesses and prevent untimely demise.',
    },
    {
      id: 6,
      title: 'Chandi Havan (Maa Durga)',
      category: 'Jaap & Havan',
      image: havanImg,
      desc: 'An intense and complex fire sacrifice dedicated to Goddess Durga, performed to obliterate severe negativity, black magic, and formidable obstacles.',
    },
    {
      id: 7,
      title: 'Marriage Ceremony (Vivah)',
      category: 'Sanskar',
      image: karanBhedanImg,
      desc: 'The complete Hindu wedding ceremony consisting of multiple rituals uniting a man and a woman in physical, mental, and spiritual matrimony.',
    },
    {
      id: 8,
      title: 'Shishu Mundan Sanskar',
      category: 'Sanskar',
      image: karanBhedanImg,
      desc: 'The first haircut or head-shaving ceremony of a child, signifying the shedding of past life karma and promoting healthy hair and brain growth.',
    },
    {
      id: 9,
      title: 'Namakaran Sanskar',
      category: 'Sanskar',
      image: homePujaBanner,
      desc: 'The official naming ceremony held on the 11th or 12th day after birth, where the child receives a religiously and astrologically significant name.',
    },
    {
      id: 10,
      title: 'Tulsi Marriage (Tulsi Vivah)',
      category: 'Festive Puja',
      image: homePujaBanner,
      desc: 'The ceremonial and highly auspicious wedding of the sacred Tulsi plant (representing Goddess Vrinda/Lakshmi) to Lord Vishnu or Shaligram.',
    },
    {
      id: 11,
      title: 'Saraswati Puja',
      category: 'Festive Puja',
      image: chantingImg,
      desc: 'A devotional worship of Goddess Saraswati, the patron deity of knowledge, arts, and wisdom, to enhance learning focus and creative expression.',
    },
    {
      id: 12,
      title: 'Navagraha Shanti Puja',
      category: 'Dosha Nivaran',
      image: navagrahaImg,
      desc: 'A complex ritual designed to pacify and balance the cosmic energies of the nine planetary deities, ensuring they cast positive influences rather than hurdles.',
    },
    {
      id: 13,
      title: 'Birthday Havan (Ayushya)',
      category: 'Family Ritual',
      image: havanImg,
      desc: 'A life-affirming ritual typically performed on birthdays, invoking the Ayur Devata (Deity of Life) to grant long life, vitality, and robust health.',
    },
    {
      id: 14,
      title: 'Office / Shop Opening Puja',
      category: 'Vastu & Business',
      image: homePujaBanner,
      desc: 'A specialized ritual for business owners, focused on opening a new venture, inaugurating a shop, or blessing financial books for exponential growth.',
    },
    {
      id: 15,
      title: 'Bhoomi Pujan',
      category: 'Vastu & Business',
      image: havanImg,
      desc: 'A foundational laying ceremony honoring Mother Earth (Bhumi Devi) and Vastu Purusha, performed before any digging or construction begins on a plot of land.',
    },
    {
      id: 16,
      title: 'Vastu Shanti Puja',
      category: 'Vastu & Business',
      image: homePujaBanner,
      desc: 'A targeted ritual performed to correct spatial, directional or architectural energy imbalances in a building without requiring physical demolition.',
    },
    {
      id: 17,
      title: 'Home Entry Puja (Griha Pravesh)',
      category: 'Vastu & Business',
      image: homePujaBanner,
      desc: 'A comprehensive housewarming ceremony performed before moving into a new residence to purify the space and seek blessings from deities for prosperity.',
    },
    {
      id: 18,
      title: 'Rudrabhishek',
      category: 'Jaap & Havan',
      image: rudraImg,
      desc: 'Mighty sacred ritual dedicated to Lord Shiva, where the Lingam is bathed with sacred fluids to wash away negative karma and spiritual stagnation.',
    },
    {
      id: 19,
      title: 'Vighnaharta Ganesh Puja',
      category: 'Family Ritual',
      image: homePujaBanner,
      desc: 'A foundational worship of Lord Ganesha, specifically in his form as the "Remover of Obstacles," to ensure success in any auspicious endeavor.',
    },
    {
      id: 20,
      title: 'Godh Bharai (Baby Shower)',
      category: 'Family Ritual',
      image: karanBhedanImg,
      desc: 'A joyful Vedic ritual for an expectant mother in her seventh month to bless her and the unborn child with health, abundance, and divine protection.',
    },
    {
      id: 21,
      title: 'Vishwakarma Puja',
      category: 'Vastu & Business',
      image: homePujaBanner,
      desc: 'A dedicated worship of Lord Vishwakarma, the divine cosmic architect, performed to bless tools, machinery, and creative projects for excellence.',
    },
    {
      id: 22,
      title: 'Yagnopavit Sanskar (Janeu)',
      category: 'Sanskar',
      image: chantingImg,
      desc: 'The sacred thread ceremony that initiates a young man into formal Vedic studies and marks his spiritual "second birth" (Dvija).',
    },
    {
      id: 23,
      title: 'Roka Ceremony (Engagement)',
      category: 'Sanskar',
      image: karanBhedanImg,
      desc: 'A formal commitment ritual marking the beginning of a wedding union, where both families officially announce the alliance and exchange sacred blessings.',
    },
    {
      id: 24,
      title: 'Satyanarayan Puja & Katha',
      category: 'Family Ritual',
      image: homePujaBanner,
      desc: 'A sacred Vedic ritual dedicated to Lord Vishnu in his manifestation of Truth, involving the recitation of his divine Katha to invoke peace and abundance.',
    },
  ];

  const categories = ['All', 'Sanskar', 'Dosha Nivaran', 'Jaap & Havan', 'Vastu & Business', 'Family Ritual', 'Festive Puja'];

  const filteredPujas = pujas.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="divine-home-page">
      {/* Top Breadcrumb & Tag */}
      <div className="dhp-header-wrap">
        <div className="dhp-subtag">BOOK MY SHASTRI</div>
        <h1 className="dhp-title">Divine Home Puja</h1>
        <p className="dhp-subtitle">
          Bring the sanctity of the temple to your doorstep with authentic Vedic ceremonies performed by master priests
        </p>
      </div>

      {/* Hero Banner with Quote */}
      <div className="dhp-banner-card">
        <img 
          src={homePujaBanner} 
          alt="Divine Home Puja with Family and Vedic Pandit" 
          className="dhp-banner-img"
        />
        <div className="dhp-banner-overlay">
          <blockquote className="dhp-banner-quote">
            “A home filled with sacred rituals is a home blessed by the gods.”
          </blockquote>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="dhp-search-section">
        <div className="dhp-search-box">
          <span className="dhp-search-icon">🔍</span>
          <input 
            type="text" 
            placeholder="Search for Temple, God or Dosha..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="dhp-search-input"
          />
          {searchTerm && (
            <button className="dhp-clear-btn" onClick={() => setSearchTerm('')}>✕</button>
          )}
        </div>

        {/* Category Filter Chips */}
        <div className="dhp-category-chips">
          {categories.map((cat) => (
            <button 
              key={cat}
              className={`dhp-chip ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Puja Count Summary */}
      <div className="dhp-count-bar">
        <span>Showing <strong>{filteredPujas.length}</strong> Sacred Vedic Ceremonies</span>
      </div>

      {/* 24 Puja Cards Grid */}
      <div className="dhp-grid">
        {filteredPujas.map((item) => (
          <div key={item.id} className="dhp-card">
            <div className="dhp-img-wrap">
              <img src={item.image} alt={item.title} className="dhp-card-img" />
              <span className="dhp-active-badge">Active</span>
            </div>

            <div className="dhp-card-body">
              <div className="dhp-card-header">
                <h3 className="dhp-card-title">{item.title}</h3>
                <button 
                  className="btn-dhp-book"
                  onClick={() => onOpenBooking(item.title)}
                  type="button"
                >
                  Book Now
                </button>
              </div>

              <p className="dhp-card-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredPujas.length === 0 && (
        <div className="dhp-empty-state">
          <span>🕉️</span>
          <h3>No ceremonies found matching "{searchTerm}"</h3>
          <p>Try searching for Dosha, Sanskar, Havan, or reset filters.</p>
          <button className="btn-hero-primary mt-4" onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}>
            Reset Search
          </button>
        </div>
      )}
    </div>
  );
};

export default DivineHomePuja;
