import React, { useState } from 'react';

const INDIAN_STATES = [
  'Uttar Pradesh',
  'Delhi NCR',
  'Bihar',
  'Maharashtra',
  'Rajasthan',
  'Madhya Pradesh',
  'Uttarakhand',
  'Haryana',
  'Punjab',
  'West Bengal',
  'Gujarat',
  'Karnataka',
  'Telangana',
  'Odisha',
  'Jharkhand',
  'Assam'
];

const PartnerPortalPage = ({ onBackHome, onNavigateToDevoteeSignIn }) => {
  const [activeTab, setActiveTab] = useState('register'); // 'register' or 'signin'
  const [step, setStep] = useState(1); // 1: DETAILS, 2: PAYMENT, 3: SECURITY
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  // Form State - Details
  const [details, setDetails] = useState({
    fullName: '',
    gotra: '',
    mobile: '',
    email: '',
    panditType: 'Standard Pandit',
    streetAddress: '',
    state: '',
    city: '',
    pincode: '',
  });

  // Form State - Payment
  const [payment, setPayment] = useState({
    holderName: '',
    bankName: '',
    accountNumber: '',
    confirmAccountNumber: '',
    ifscCode: '',
    upiId: '',
  });

  // Form State - Security
  const [security, setSecurity] = useState({
    password: '',
    confirmPassword: '',
    otp: '',
    agreed: false,
  });

  // Sign In State
  const [loginForm, setLoginForm] = useState({
    identifier: '',
    password: '',
  });

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0].name);
    }
  };

  const handleStep1Next = (e) => {
    e.preventDefault();
    if (!details.fullName || !details.mobile || !details.city) {
      alert('Please fill in your Name, Mobile and City to proceed.');
      return;
    }
    setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStep2Next = (e) => {
    e.preventDefault();
    if (!payment.accountNumber && !payment.upiId) {
      alert('Please provide either Bank Account or UPI ID to receive dakshina payouts.');
      return;
    }
    setStep(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompleteOnboarding = (e) => {
    e.preventDefault();
    if (!security.agreed) {
      alert('Please agree to the Acharya Code of Conduct to finalize registration.');
      return;
    }
    setSubmitted(true);
  };

  const handlePartnerSignIn = (e) => {
    e.preventDefault();
    if (!loginForm.identifier || !loginForm.password) {
      alert('Please enter your registered mobile number and password.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="partner-page-root">
      {/* Top Navigation */}
      <div className="partner-top-bar">
        <button type="button" className="partner-back-btn" onClick={onBackHome}>
          <svg viewBox="0 0 20 20" fill="currentColor" className="back-arrow-icon">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 9H16a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          <span>Back to Home</span>
        </button>

        {onNavigateToDevoteeSignIn && (
          <button 
            type="button" 
            className="devotee-portal-link"
            onClick={onNavigateToDevoteeSignIn}
          >
            Devotee / Customer Login →
          </button>
        )}
      </div>

      {/* Main Container */}
      <div className="partner-card-wrapper">
        <div className="partner-main-card">
          {/* Header Title & Subtitle */}
          <div className="partner-header-section">
            {activeTab === 'signin' && (
              <div className="verified-partner-pill">
                <svg viewBox="0 0 20 20" fill="currentColor" className="verified-shield-icon">
                  <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
                </svg>
                <span>VERIFIED PARTNER</span>
              </div>
            )}

            <h1 className="partner-title">
              {activeTab === 'register' ? 'Partner Onboarding' : 'Pandit Partner Portal'}
            </h1>
            <p className="partner-subtitle">
              {activeTab === 'register'
                ? 'AUTHORIZED ACHARYA NETWORK'
                : "JOIN INDIA'S MOST TRUSTED NETWORK OF VERIFIED PANDITS"}
            </p>
          </div>

          {/* Toggle Tabs: SIGN IN vs REGISTER */}
          <div className="partner-tabs-container">
            <button 
              type="button" 
              className={`partner-tab-btn ${activeTab === 'signin' ? 'active-signin' : ''}`}
              onClick={() => { setActiveTab('signin'); setSubmitted(false); }}
            >
              SIGN IN
            </button>
            <button 
              type="button" 
              className={`partner-tab-btn ${activeTab === 'register' ? 'active-register' : ''}`}
              onClick={() => { setActiveTab('register'); setSubmitted(false); }}
            >
              REGISTER
            </button>
          </div>

          {submitted ? (
            <div className="partner-success-box">
              <span className="success-flower">🌸</span>
              <h3>
                {activeTab === 'register'
                  ? 'Acharya Application Submitted Successfully!'
                  : 'Welcome to Acharya Portal!'}
              </h3>
              <p>
                {activeTab === 'register'
                  ? 'Our Vedic Accreditation Board will verify your identity and certificates within 24 hours. Your login credentials will be activated upon approval.'
                  : 'Logging you into your ritual booking calendar...'}
              </p>
              <div className="success-contact-box">
                <span>Acharya Desk Hotline: </span>
                <strong>+91 83750 08009</strong>
              </div>
              <button 
                type="button" 
                className="partner-orange-btn mt-4" 
                onClick={onBackHome}
              >
                Return to Homepage
              </button>
            </div>
          ) : activeTab === 'signin' ? (
            /* ================= SIGN IN TAB VIEW (Screenshot 3) ================= */
            <form onSubmit={handlePartnerSignIn} className="partner-signin-form">
              {/* Registered Mobile */}
              <div className="partner-field-group">
                <label className="partner-field-label">
                  <span className="label-icon">📞</span>
                  <span>REGISTERED MOBILE</span>
                </label>
                <div className="partner-input-box">
                  <input 
                    type="text" 
                    placeholder="Email or Phone Number"
                    value={loginForm.identifier}
                    onChange={(e) => setLoginForm({ ...loginForm, identifier: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="partner-field-group">
                <label className="partner-field-label">
                  <span className="label-icon">🔒</span>
                  <span>PASSWORD</span>
                </label>
                <div className="partner-input-box password-box">
                  <input 
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    required
                  />
                  <button 
                    type="button" 
                    className="partner-eye-btn"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password"
                  >
                    {showPassword ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="eye-icon">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="eye-icon">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
                <div className="partner-forgot-wrap">
                  <button 
                    type="button" 
                    className="partner-forgot-link"
                    onClick={() => alert('Password reset SMS sent to your registered mobile number.')}
                  >
                    Forgot Password?
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="partner-orange-btn">
                Sign In to Portal
              </button>

              <div className="partner-security-pill">
                <svg viewBox="0 0 20 20" fill="currentColor" className="secure-shield-icon">
                  <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
                </svg>
                <span>SECURE PROTOCOL</span>
              </div>
            </form>
          ) : (
            /* ================= REGISTER TAB: 3-STEP ONBOARDING ================= */
            <div className="partner-onboarding-flow">
              {/* 3-Step Tracker (Screenshots 1 & 2) */}
              <div className="step-tracker-bar">
                <div className={`step-item ${step === 1 ? 'active' : step > 1 ? 'completed' : ''}`}>
                  <div className="step-circle">1</div>
                  <span className="step-label">DETAILS</span>
                </div>
                <div className={`step-connector ${step > 1 ? 'filled' : ''}`}></div>

                <div className={`step-item ${step === 2 ? 'active' : step > 2 ? 'completed' : ''}`}>
                  <div className="step-circle">2</div>
                  <span className="step-label">PAYMENT</span>
                </div>
                <div className={`step-connector ${step > 2 ? 'filled' : ''}`}></div>

                <div className={`step-item ${step === 3 ? 'active' : ''}`}>
                  <div className="step-circle">3</div>
                  <span className="step-label">SECURITY</span>
                </div>
              </div>

              {/* STEP 1: DETAILS (Screenshots 1 & 2) */}
              {step === 1 && (
                <form onSubmit={handleStep1Next} className="partner-step-form">
                  <div className="partner-form-grid">
                    {/* FULL NAME */}
                    <div className="partner-field-group">
                      <label className="partner-field-label">FULL NAME</label>
                      <div className="partner-input-box with-icon">
                        <span className="input-prefix-icon">👤</span>
                        <input 
                          type="text" 
                          placeholder="Enter name"
                          value={details.fullName}
                          onChange={(e) => setDetails({ ...details, fullName: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    {/* GOTRA */}
                    <div className="partner-field-group">
                      <label className="partner-field-label">GOTRA</label>
                      <div className="partner-input-box with-icon">
                        <span className="input-prefix-icon">🪪</span>
                        <input 
                          type="text" 
                          placeholder="Optional"
                          value={details.gotra}
                          onChange={(e) => setDetails({ ...details, gotra: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* MOBILE */}
                    <div className="partner-field-group">
                      <label className="partner-field-label">MOBILE</label>
                      <div className="partner-mobile-input-wrap">
                        <div className="mobile-code-box">+91</div>
                        <input 
                          type="tel" 
                          placeholder="Phone Number"
                          value={details.mobile}
                          onChange={(e) => setDetails({ ...details, mobile: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    {/* EMAIL */}
                    <div className="partner-field-group">
                      <label className="partner-field-label">EMAIL</label>
                      <div className="partner-input-box with-icon">
                        <span className="input-prefix-icon">✉️</span>
                        <input 
                          type="email" 
                          placeholder="acharya@mail.com"
                          value={details.email}
                          onChange={(e) => setDetails({ ...details, email: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* PANDIT TYPE */}
                    <div className="partner-field-group">
                      <label className="partner-field-label">PANDIT TYPE</label>
                      <div className="partner-select-box">
                        <select 
                          value={details.panditType}
                          onChange={(e) => setDetails({ ...details, panditType: e.target.value })}
                        >
                          <option value="Standard Pandit">Standard Pandit</option>
                          <option value="Senior Acharya">Senior Acharya (10+ Yrs)</option>
                          <option value="Jyotish Shastri">Jyotish &amp; Kundli Shastri</option>
                          <option value="Vedic Karmakandi">Vedic Karmakandi Purohit</option>
                        </select>
                      </div>
                    </div>

                    {/* UPLOAD CERT/ID */}
                    <div className="partner-field-group">
                      <label className="partner-field-label">UPLOAD CERT/ID</label>
                      <label className="partner-file-upload-btn">
                        <input 
                          type="file" 
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={handleFileUpload}
                          style={{ display: 'none' }}
                        />
                        <span className="upload-btn-text">
                          {selectedFile ? selectedFile : 'Select file'}
                        </span>
                        <span className="upload-plus-icon">+</span>
                      </label>
                    </div>

                    {/* STREET ADDRESS (Span 2 Cols) */}
                    <div className="partner-field-group span-2">
                      <label className="partner-field-label">STREET ADDRESS</label>
                      <div className="partner-input-box with-icon">
                        <span className="input-prefix-icon">🏠</span>
                        <input 
                          type="text" 
                          placeholder="Street, Landmark"
                          value={details.streetAddress}
                          onChange={(e) => setDetails({ ...details, streetAddress: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* STATE */}
                    <div className="partner-field-group">
                      <label className="partner-field-label">STATE</label>
                      <div className="partner-select-box">
                        <select 
                          value={details.state}
                          onChange={(e) => setDetails({ ...details, state: e.target.value })}
                        >
                          <option value="">Search state...</option>
                          {INDIAN_STATES.map((st) => (
                            <option key={st} value={st}>{st}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* CITY */}
                    <div className="partner-field-group">
                      <label className="partner-field-label">CITY</label>
                      <div className="partner-input-box">
                        <input 
                          type="text" 
                          placeholder="City"
                          value={details.city}
                          onChange={(e) => setDetails({ ...details, city: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    {/* PINCODE */}
                    <div className="partner-field-group">
                      <label className="partner-field-label">PINCODE</label>
                      <div className="partner-input-box">
                        <input 
                          type="text" 
                          placeholder="Pin"
                          maxLength={6}
                          value={details.pincode}
                          onChange={(e) => setDetails({ ...details, pincode: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit / Next Button */}
                  <button type="submit" className="partner-orange-btn">
                    NEXT: PAYMENT DETAILS →
                  </button>

                  {/* Security Protocol Badge (Screenshot 2) */}
                  <div className="partner-security-pill">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="secure-shield-icon">
                      <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
                    </svg>
                    <span>SECURE PROTOCOL</span>
                  </div>
                </form>
              )}

              {/* STEP 2: PAYMENT */}
              {step === 2 && (
                <form onSubmit={handleStep2Next} className="partner-step-form">
                  <div className="partner-section-note">
                    <strong>Direct Dakshina Settlement: </strong>
                    All ceremony honorariums and devotee samagri allowances will be directly credited to this account.
                  </div>

                  <div className="partner-form-grid">
                    {/* HOLDER NAME */}
                    <div className="partner-field-group">
                      <label className="partner-field-label">ACCOUNT HOLDER NAME</label>
                      <div className="partner-input-box">
                        <input 
                          type="text" 
                          placeholder="Name as per bank passbook"
                          value={payment.holderName}
                          onChange={(e) => setPayment({ ...payment, holderName: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* BANK NAME */}
                    <div className="partner-field-group">
                      <label className="partner-field-label">BANK NAME</label>
                      <div className="partner-input-box">
                        <input 
                          type="text" 
                          placeholder="e.g. State Bank of India"
                          value={payment.bankName}
                          onChange={(e) => setPayment({ ...payment, bankName: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* ACCOUNT NUMBER */}
                    <div className="partner-field-group">
                      <label className="partner-field-label">ACCOUNT NUMBER</label>
                      <div className="partner-input-box">
                        <input 
                          type="password" 
                          placeholder="Enter account number"
                          value={payment.accountNumber}
                          onChange={(e) => setPayment({ ...payment, accountNumber: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* CONFIRM ACCOUNT NUMBER */}
                    <div className="partner-field-group">
                      <label className="partner-field-label">CONFIRM ACCOUNT NUMBER</label>
                      <div className="partner-input-box">
                        <input 
                          type="text" 
                          placeholder="Re-enter account number"
                          value={payment.confirmAccountNumber}
                          onChange={(e) => setPayment({ ...payment, confirmAccountNumber: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* IFSC CODE */}
                    <div className="partner-field-group">
                      <label className="partner-field-label">IFSC CODE</label>
                      <div className="partner-input-box">
                        <input 
                          type="text" 
                          placeholder="e.g. SBIN0001234"
                          value={payment.ifscCode}
                          onChange={(e) => setPayment({ ...payment, ifscCode: e.target.value.toUpperCase() })}
                        />
                      </div>
                    </div>

                    {/* UPI ID */}
                    <div className="partner-field-group">
                      <label className="partner-field-label">UPI ID (OPTIONAL)</label>
                      <div className="partner-input-box">
                        <input 
                          type="text" 
                          placeholder="acharya@okhdfcbank"
                          value={payment.upiId}
                          onChange={(e) => setPayment({ ...payment, upiId: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Buttons Row */}
                  <div className="partner-action-row">
                    <button 
                      type="button" 
                      className="partner-secondary-btn"
                      onClick={() => setStep(1)}
                    >
                      ← Back to Details
                    </button>
                    <button type="submit" className="partner-orange-btn flex-1">
                      NEXT: SECURITY CREDENTIALS →
                    </button>
                  </div>

                  <div className="partner-security-pill">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="secure-shield-icon">
                      <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
                    </svg>
                    <span>SECURE PROTOCOL</span>
                  </div>
                </form>
              )}

              {/* STEP 3: SECURITY */}
              {step === 3 && (
                <form onSubmit={handleCompleteOnboarding} className="partner-step-form">
                  <div className="partner-form-grid">
                    {/* CREATE PASSWORD */}
                    <div className="partner-field-group">
                      <label className="partner-field-label">CREATE PORTAL PASSWORD</label>
                      <div className="partner-input-box password-box">
                        <input 
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Create strong password"
                          value={security.password}
                          onChange={(e) => setSecurity({ ...security, password: e.target.value })}
                          required
                        />
                        <button 
                          type="button" 
                          className="partner-eye-btn"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          👁️
                        </button>
                      </div>
                    </div>

                    {/* CONFIRM PASSWORD */}
                    <div className="partner-field-group">
                      <label className="partner-field-label">CONFIRM PASSWORD</label>
                      <div className="partner-input-box">
                        <input 
                          type="password" 
                          placeholder="Re-enter password"
                          value={security.confirmPassword}
                          onChange={(e) => setSecurity({ ...security, confirmPassword: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    {/* OTP */}
                    <div className="partner-field-group span-2">
                      <label className="partner-field-label">
                        ENTER 4-DIGIT MOBILE OTP (Sent to +91 {details.mobile || 'Registered Mobile'})
                      </label>
                      <div className="partner-input-box">
                        <input 
                          type="text" 
                          placeholder="• • • •"
                          maxLength={4}
                          value={security.otp}
                          onChange={(e) => setSecurity({ ...security, otp: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Terms & Code of Conduct Checkbox */}
                  <div className="partner-checkbox-wrap">
                    <input 
                      type="checkbox" 
                      id="acharya-agreement"
                      checked={security.agreed}
                      onChange={(e) => setSecurity({ ...security, agreed: e.target.checked })}
                      required
                    />
                    <label htmlFor="acharya-agreement">
                      I solemnly affirm that the Vedic credentials provided are authentic. I agree to abide by the Book My Shastri Acharya Code of Conduct, Ritual Purity Standards, and Timely Devotee Service.
                    </label>
                  </div>

                  {/* Buttons Row */}
                  <div className="partner-action-row">
                    <button 
                      type="button" 
                      className="partner-secondary-btn"
                      onClick={() => setStep(2)}
                    >
                      ← Back to Payment
                    </button>
                    <button type="submit" className="partner-orange-btn flex-1">
                      COMPLETE ONBOARDING →
                    </button>
                  </div>

                  <div className="partner-security-pill">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="secure-shield-icon">
                      <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
                    </svg>
                    <span>SECURE PROTOCOL</span>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PartnerPortalPage;
