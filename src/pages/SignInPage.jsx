import React, { useState } from 'react';

const SignInPage = ({ onBackHome, onNavigateToPartner }) => {
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    if (isRegisterMode) {
      if (!fullName || !identifier || !password) {
        setErrorMessage('Please fill in all required fields.');
        return;
      }
    } else {
      if (!identifier || !password) {
        setErrorMessage('Please enter your email/phone and password.');
        return;
      }
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      if (onBackHome) onBackHome();
    }, 2000);
  };

  return (
    <div className="signin-page-root">
      {/* Left Column: Form & Brand */}
      <div className="signin-left-col">
        {/* Top Back Link */}
        <div className="signin-top-nav">
          <button 
            type="button" 
            className="signin-back-btn" 
            onClick={onBackHome}
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="back-arrow-icon">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 9H16a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            <span>Back to Home</span>
          </button>
        </div>

        {/* Form Container */}
        <div className="signin-form-box">
          {/* Logo with Kalash Symbol */}
          <div className="signin-logo-wrap" onClick={onBackHome} role="button" tabIndex={0}>
            <div className="signin-logo-symbol">
              <svg viewBox="0 0 40 40" className="kalash-icon-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" fill="url(#kalash-grad-signin)" />
                <path d="M20 7L23 13H17L20 7Z" fill="#FFF" />
                <ellipse cx="20" cy="14" rx="4" ry="2" fill="#FEF08A" />
                <path d="M14 16C14 14.5 16.5 14 20 14C23.5 14 26 14.5 26 16C26 18 24 20 20 20C16 20 14 18 14 16Z" fill="#FFF" />
                <path d="M12 21C12 18.5 15 18 20 18C25 18 28 18.5 28 21C28 27 25 31 20 31C15 31 12 27 12 21Z" fill="#FFF" opacity="0.9" />
                <circle cx="20" cy="24" r="2.5" fill="#EA580C" />
                <path d="M15 32H25V34H15V32Z" fill="#FFF" />
                <defs>
                  <linearGradient id="kalash-grad-signin" x1="0" y1="0" x2="40" y2="40">
                    <stop stopColor="#F97316" />
                    <stop offset="1" stopColor="#C2410C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="signin-logo-text">
              <span className="signin-brand-title">bookmyshastri</span>
              <span className="signin-brand-tagline">Your Faith Partner</span>
            </div>
          </div>

          {/* Heading */}
          <div className="signin-header">
            <h1 className="signin-title">
              {isRegisterMode ? 'Create Account' : 'Welcome Back'}
            </h1>
            <p className="signin-subtitle">
              {isRegisterMode 
                ? 'Join bookmyshastri to book verified Vedic Pandits and rituals'
                : 'Sign in to manage your bookings and rituals'}
            </p>
          </div>

          {submitted ? (
            <div className="signin-success-state">
              <span className="success-emoji">🙏</span>
              <h3>{isRegisterMode ? 'Account Created Successfully!' : 'Signed In Successfully!'}</h3>
              <p>Welcome to bookmyshastri. Redirecting you to your devotional dashboard...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="signin-form">
              {errorMessage && (
                <div className="signin-error-banner">
                  <span>⚠️ {errorMessage}</span>
                </div>
              )}

              {/* If Register Mode, ask Full Name & Email */}
              {isRegisterMode && (
                <div className="form-field-group">
                  <label className="field-label">
                    <span className="label-icon">👤</span>
                    <span>FULL NAME</span>
                  </label>
                  <div className="field-input-box">
                    <input 
                      type="text" 
                      placeholder="Enter your full name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                </div>
              )}

              {/* Email or Mobile Number */}
              <div className="form-field-group">
                <label className="field-label">
                  <span className="label-icon">📞</span>
                  <span>{isRegisterMode ? 'MOBILE NUMBER' : 'EMAIL OR MOBILE NUMBER'}</span>
                </label>
                <div className="field-input-box">
                  <input 
                    type={isRegisterMode ? 'tel' : 'text'}
                    placeholder={isRegisterMode ? '10-digit mobile number' : 'Email or Mobile Number'}
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    required
                  />
                </div>
              </div>

              {isRegisterMode && (
                <div className="form-field-group">
                  <label className="field-label">
                    <span className="label-icon">✉️</span>
                    <span>EMAIL ADDRESS</span>
                  </label>
                  <div className="field-input-box">
                    <input 
                      type="email" 
                      placeholder="name@mail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* Password */}
              <div className="form-field-group">
                <label className="field-label">
                  <span className="label-icon">🔒</span>
                  <span>PASSWORD</span>
                </label>
                <div className="field-input-box password-input-box">
                  <input 
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button 
                    type="button" 
                    className="password-toggle-btn"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      /* Eye Slash */
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="eye-icon">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      /* Eye */
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="eye-icon">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
                {!isRegisterMode && (
                  <div className="forgot-password-wrap">
                    <button 
                      type="button" 
                      className="forgot-password-link"
                      onClick={() => alert('Password reset link sent to your registered mobile/email.')}
                    >
                      Forgot Password?
                    </button>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button type="submit" className="signin-submit-btn">
                {isRegisterMode ? 'Create Account' : 'Sign In'}
              </button>

              {/* Switch Mode Footer */}
              <div className="signin-footer-toggle">
                <span>
                  {isRegisterMode ? 'Already have an account? ' : 'New to bookmyshastri? '}
                </span>
                <button 
                  type="button" 
                  className="toggle-mode-btn"
                  onClick={() => {
                    setIsRegisterMode(!isRegisterMode);
                    setErrorMessage('');
                  }}
                >
                  {isRegisterMode ? 'Sign In' : 'Create Account'}
                </button>
              </div>

              {/* Quick Partner Portal Link */}
              {onNavigateToPartner && (
                <div className="partner-link-footer">
                  <span>Are you a Pandit or Shastri? </span>
                  <button 
                    type="button" 
                    className="partner-accent-link"
                    onClick={onNavigateToPartner}
                  >
                    Join Acharya Partner Network →
                  </button>
                </div>
              )}
            </form>
          )}
        </div>
      </div>

      {/* Right Column: Saffron/Orange Banner */}
      <div className="signin-right-col">
        <div className="signin-right-bg-pattern"></div>
        <div className="signin-right-content">
          {/* Big Sacred Om Symbol */}
          <div className="signin-om-symbol">
            <span className="om-text">ॐ</span>
          </div>

          {/* Heading */}
          <h2 className="signin-banner-title">
            Book My Shastri Made Simple
          </h2>

          {/* Description */}
          <p className="signin-banner-desc">
            Book verified Pandits, get complete Samagri kits, and experience authentic pujas with fixed pricing.
          </p>

          {/* Feature Badges */}
          <div className="signin-banner-features">
            <div className="banner-feature-item">
              <span className="feat-check">✓</span>
              <span>100% Certified Vedic Pandits</span>
            </div>
            <div className="banner-feature-item">
              <span className="feat-check">✓</span>
              <span>Complete Pure Samagri Included</span>
            </div>
            <div className="banner-feature-item">
              <span className="feat-check">✓</span>
              <span>Fixed Transparent Dakshina</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
