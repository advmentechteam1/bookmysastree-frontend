import React, { useState } from 'react';
import SignInPage from '../pages/SignInPage';
import PartnerPortalPage from '../pages/PartnerPortalPage';

export const KundliModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    gender: 'Male',
    dob: '',
    tob: '',
    birthPlace: '',
    gotra: '',
    phone: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} type="button">✕</button>

        <div className="modal-header">
          <div className="modal-icon">📜</div>
          <h3 className="modal-title">Free Kundli &amp; Dosha Analysis</h3>
          <p className="modal-subtitle">
            Get accurate Vedic Janam Kundli calculations, Manglik, Kaal Sarp &amp; Pitra Dosha report.
          </p>
        </div>

        {submitted ? (
          <div className="modal-success-state">
            <span className="success-emoji">🕉️</span>
            <h4>Kundli Request Submitted!</h4>
            <p>Our senior Jyotish Acharya is preparing your detailed birth chart report. We will send it to your WhatsApp within 2 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="modal-form">
            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Ramesh Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Gender *</label>
                <select 
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Date of Birth *</label>
                <input 
                  type="date" 
                  required
                  value={formData.dob}
                  onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Time of Birth *</label>
                <input 
                  type="time" 
                  required
                  value={formData.tob}
                  onChange={(e) => setFormData({ ...formData, tob: e.target.value })}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Place of Birth (City/State) *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Varanasi, UP"
                  value={formData.birthPlace}
                  onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Family Gotra (Optional)</label>
                <input 
                  type="text" 
                  placeholder="e.g. Kashyap / Bhardwaj"
                  value={formData.gotra}
                  onChange={(e) => setFormData({ ...formData, gotra: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label>WhatsApp Number for Report *</label>
              <input 
                type="tel" 
                required 
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <button type="submit" className="btn-modal-submit">
              Generate Free Kundli Report
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export const SignInModal = ({ isOpen, onClose, onNavigateToPartner }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop-fullscreen" onClick={onClose}>
      <div className="modal-fullscreen-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-corner" onClick={onClose} type="button" aria-label="Close">✕</button>
        <SignInPage 
          onBackHome={onClose} 
          onNavigateToPartner={onNavigateToPartner} 
        />
      </div>
    </div>
  );
};

export const PartnerModal = ({ isOpen, onClose, onNavigateToDevoteeSignIn }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop-fullscreen" onClick={onClose}>
      <div className="modal-fullscreen-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-corner" onClick={onClose} type="button" aria-label="Close">✕</button>
        <PartnerPortalPage 
          onBackHome={onClose} 
          onNavigateToDevoteeSignIn={onNavigateToDevoteeSignIn} 
        />
      </div>
    </div>
  );
};

export const BookingModal = ({ isOpen, ceremonyName, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} type="button">✕</button>

        <div className="modal-header">
          <div className="modal-icon">🪔</div>
          <h3 className="modal-title">Book Sacred Ceremony</h3>
          <p className="modal-subtitle">
            Booking: <strong>{ceremonyName || 'Vedic Pooja Ceremony'}</strong>
          </p>
        </div>

        {submitted ? (
          <div className="modal-success-state">
            <span className="success-emoji">🕉️</span>
            <h4>Ceremony Booking Confirmed!</h4>
            <p>We have assigned a certified Vedic Pandit. A confirmation receipt with Muhurat timings and Pandit details has been sent to your phone.</p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => { setSubmitted(false); onClose(); }, 2500); }} className="modal-form">
            <div className="form-row">
              <div className="form-group">
                <label>Devotee / Yajman Name *</label>
                <input type="text" required placeholder="e.g. Rajesh Kumar" />
              </div>
              <div className="form-group">
                <label>Family Gotra *</label>
                <input type="text" required placeholder="e.g. Kashyap / Vashistha" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Preferred Date *</label>
                <input type="date" required />
              </div>
              <div className="form-group">
                <label>Puja Language *</label>
                <select>
                  <option>Hindi</option>
                  <option>Sanskrit</option>
                  <option>Tamil</option>
                  <option>Telugu</option>
                  <option>Bengali</option>
                  <option>Marathi</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Complete Address / Venue *</label>
              <textarea rows={2} required placeholder="Flat / House No, Landmark, City &amp; Pincode"></textarea>
            </div>

            <div className="form-group">
              <label>WhatsApp Number for Pandit Tracking *</label>
              <input type="tel" required placeholder="+91 98765 43210" />
            </div>

            <div className="included-perks-box">
              <span>✔ 100% Pure Organic Samagri Included</span>
              <span>✔ Blessed Prasad &amp; Kalawa</span>
              <span>✔ Verified Pandit Guaranteed</span>
            </div>

            <button type="submit" className="btn-modal-submit">
              Confirm &amp; Proceed to E-Sankalp
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
