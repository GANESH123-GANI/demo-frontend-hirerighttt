import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/styles.css'

export default function HomePage() {
  const [countryMenuOpen, setCountryMenuOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState({ name: 'India', flag: '🇮🇳' })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const countries = [
    { name: 'India', flag: '🇮🇳' },
    { name: 'United States', flag: '🇺🇸' },
    { name: 'United Kingdom', flag: '🇬🇧' },
    { name: 'Singapore', flag: '🇸🇬' },
  ]

  return (
    <div className="page-wrapper">
      
      {/* =====================================================================
           1. TOP NAVBAR
           ===================================================================== */}
      <header className={`site-header ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="container nav-container">
          
          <div className="nav-left-group">
            {/* Official Logo */}
            <Link to="/" className="brand-logo">
              <div className="logo-main">
                <span className="logo-hire">HIRE</span>
                <span className="logo-right">RIGHT</span>
              </div>
              <span className="logo-tagline">Right People. Right Decisions.</span>
              <svg className="logo-swoosh" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 3C14 9 26 9 38 2" stroke="#e53935" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </Link>

            {/* Navigation Links */}
            <nav>
              <ul className="nav-menu">
                <li><Link to="/about-us" className="nav-link">For Job Seekers</Link></li>
                <li><a href="#why-hireright" className="nav-link">Why HireRight</a></li>
                <li><a href="#solutions" className="nav-link">Solutions</a></li>
                <li><a href="#resources" className="nav-link">Resources</a></li>
                <li><Link to="/about-us" className="nav-link">About Us</Link></li>
              </ul>
            </nav>
          </div>

          {/* Right Actions: Country Dropdown & Login */}
          <div className="nav-actions">
            
            {/* Country Selector */}
            <div className="country-dropdown-wrapper">
              <button 
                className="country-btn" 
                type="button" 
                onClick={() => setCountryMenuOpen(!countryMenuOpen)}
                aria-expanded={countryMenuOpen}
              >
                <svg className="flag-icon" viewBox="0 0 640 480" width="16" height="12" style={{ borderRadius: '2px', display: 'inline-block' }}>
                  <path fill="#f93" d="M0 0h640v160H0z"/>
                  <path fill="#fff" d="M0 160h640v160H0z"/>
                  <path fill="#128807" d="M0 320h640v160H0z"/>
                  <circle cx="320" cy="240" r="40" fill="none" stroke="#008" strokeWidth="6"/>
                  <circle cx="320" cy="240" r="8" fill="#008"/>
                </svg>
                <span className="selected-country-name">{selectedCountry.name}</span>
                <svg className="chevron-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {countryMenuOpen && (
                <ul className="country-menu show" role="menu">
                  {countries.map((c) => (
                    <li 
                      key={c.name} 
                      className="country-option"
                      onClick={() => {
                        setSelectedCountry(c)
                        setCountryMenuOpen(false)
                      }}
                    >
                      <span style={{ fontSize: '15px' }}>{c.flag}</span> {c.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Student / Job Seeker Login Button */}
            <Link to="/login" className="login-btn">
              Student / Job Seeker Login
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-nav-toggle" 
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

          </div>

        </div>
      </header>

      {/* =====================================================================
           2. HERO SECTION (100% Seamless With Glowing Rings & Badges)
           ===================================================================== */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-grid">
            
            {/* Left Column */}
            <div className="hero-copy">
              <h1 className="hero-title">
                Your Dream Job<br />
                Deserves the<br />
                <span className="hero-title-red">Right</span> Start.
              </h1>

              <p className="hero-desc">
                Background screening you can trust.<br />
                Confidence you can carry into your future.
              </p>

              <div className="hero-actions">
                <Link to="/login" className="btn-get-started">
                  Get Started
                  <span className="btn-icon-circle">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </span>
                </Link>

                <Link to="/about-us" className="btn-how-it-works">
                  How It Works
                  <span className="btn-play-circle">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="6 4 20 12 6 20"></polygon>
                    </svg>
                  </span>
                </Link>
              </div>

              {/* Social Proof Avatars */}
              <div className="social-proof-bar">
                <div className="avatar-stack">
                  <img src="/assets/avatars/avatar1.jpg" alt="Job Seeker" className="avatar-item" />
                  <img src="/assets/avatars/avatar2.jpg" alt="Job Seeker" className="avatar-item" />
                  <img src="/assets/avatars/avatar3.jpg" alt="Job Seeker" className="avatar-item" />
                  <img src="/assets/avatars/avatar4.jpg" alt="Job Seeker" className="avatar-item" />
                </div>
                <div className="proof-info">
                  <strong>Trusted by 1000+ employers</strong><br />
                  and millions of job seekers worldwide.
                </div>
              </div>
            </div>

            {/* Right Column: Hero Character & 3 Floating Badges */}
            <div className="hero-right-visual">
              <div className="hero-character-stage">
                <img 
                  src="/assets/hero-woman.png" 
                  alt="HireRight Verified Professional" 
                  className="hero-woman-img" 
                  loading="eager" 
                />
                
                <div className="hero-badges-wrapper">
                  <Link to="/login" className="floating-badge badge-1" title="Fast & Secure">
                    <img src="/assets/badge-fast.png" alt="Fast & Secure: Quick turnaround you can rely on" />
                  </Link>
                  <Link to="/login" className="floating-badge badge-2" title="Trusted by Top Employers">
                    <img src="/assets/badge-trusted.png" alt="Trusted by Top Employers globally" />
                  </Link>
                  <Link to="/login" className="floating-badge badge-3" title="Your Privacy Always Protected">
                    <img src="/assets/badge-privacy.png" alt="Your Privacy: Always Protected" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================================
           3. FLOATING COMPANY LOGOS CARD (85% Width & Optically Balanced)
           ===================================================================== */}
      <div className="container companies-banner-wrapper">
        <div className="companies-card">
          <h2 className="companies-title">Powering Confident Hiring Decisions for Top Companies</h2>
          <div className="companies-grid">
            
            {/* TATA Horizontal */}
            <div className="company-logo-item logo-tata">
              <img src="/assets/logos/tata-horizontal.png" alt="TATA" />
            </div>

            {/* WIPRO */}
            <div className="company-logo-item logo-wipro">
              <img src="/assets/logos/wipro.png" alt="Wipro" />
            </div>

            {/* INFOSYS */}
            <div className="company-logo-item logo-infosys">
              <img src="/assets/logos/infosys.png" alt="Infosys" />
            </div>

            {/* ACCENTURE */}
            <div className="company-logo-item logo-accenture">
              <img src="/assets/logos/accenture.svg" alt="Accenture" />
            </div>

            {/* AMAZON */}
            <div className="company-logo-item logo-amazon">
              <img src="/assets/logos/amazon.svg" alt="Amazon" />
            </div>

            {/* DELOITTE */}
            <div className="company-logo-item logo-deloitte">
              <img src="/assets/logos/deloitte.svg" alt="Deloitte." />
            </div>

          </div>
        </div>
      </div>

      {/* =====================================================================
           4. "WHY JOB SEEKERS CHOOSE HIRERIGHT"
           ===================================================================== */}
      {/* =====================================================================
           4. "WHY JOB SEEKERS CHOOSE HIRERIGHT"
           ===================================================================== */}
      <section className="why-section" id="why-hireright">
        <div className="container">
          <div className="section-header-centered">
            <h2 className="section-title-dark">Why Job Seekers Choose HireRight</h2>
            <div className="section-accent-bar"></div>
          </div>

          <div className="features-5-grid">
            {/* Card 1 */}
            <div className="feature-pill-card">
              <div className="feature-icon-bubble bubble-red">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
              </div>
              <h3 className="feature-card-title">Trusted &amp; Reliable</h3>
              <p className="feature-card-desc">
                Accurate background checks that help build employer trust.
              </p>
            </div>

            {/* Card 2 */}
            <div className="feature-pill-card">
              <div className="feature-icon-bubble bubble-purple">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h3 className="feature-card-title">Faster Opportunities</h3>
              <p className="feature-card-desc">
                Quick &amp; digital process that keeps you ahead in the hiring race.
              </p>
            </div>

            {/* Card 3 */}
            <div className="feature-pill-card">
              <div className="feature-icon-bubble bubble-green">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h3 className="feature-card-title">Secure &amp; Private</h3>
              <p className="feature-card-desc">
                Your data is protected with industry-leading security.
              </p>
            </div>

            {/* Card 4 */}
            <div className="feature-pill-card">
              <div className="feature-icon-bubble bubble-blue">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="feature-card-title">Stay Job-Ready</h3>
              <p className="feature-card-desc">
                A verified profile makes you a more confident candidate.
              </p>
            </div>

            {/* Card 5 */}
            <div className="feature-pill-card">
              <div className="feature-icon-bubble bubble-amber">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="feature-card-title">Global Standards</h3>
              <p className="feature-card-desc">
                Screening aligned with global compliance &amp; quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
           5. "HOW IT WORKS" DARK SECTION
           ===================================================================== */}
      <section className="how-it-works-section" id="how-it-works">
        <div className="container">
          <div className="section-header-centered">
            <h2 className="section-title-white">How It Works</h2>
            <div className="section-accent-bar"></div>
          </div>

          <div className="steps-flow-container">
            <div className="steps-connector-line"></div>
            
            <div className="steps-grid">
              {/* Step 1 */}
              <div className="step-item">
                <div className="step-icon-outer">
                  <div className="step-icon-inner">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                </div>
                <h3 className="step-title">
                  <span className="step-num-red">1</span> Create Your Profile
                </h3>
                <p className="step-desc">
                  Sign up in minutes and share the necessary details.
                </p>
              </div>

              {/* Step 2 */}
              <div className="step-item">
                <div className="step-icon-outer">
                  <div className="step-icon-inner">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                    </svg>
                  </div>
                </div>
                <h3 className="step-title">
                  <span className="step-num-purple">2</span> We Run Secure Checks
                </h3>
                <p className="step-desc">
                  Our technology verifies your information quickly &amp; accurately.
                </p>
              </div>

              {/* Step 3 */}
              <div className="step-item">
                <div className="step-icon-outer">
                  <div className="step-icon-inner">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                </div>
                <h3 className="step-title">
                  <span className="step-num-green">3</span> Results Delivered
                </h3>
                <p className="step-desc">
                  Reports are shared with employers seamlessly.
                </p>
              </div>

              {/* Step 4 */}
              <div className="step-item">
                <div className="step-icon-outer">
                  <div className="step-icon-inner">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="step-title">
                  <span className="step-num-orange">4</span> You Move Forward
                </h3>
                <p className="step-desc">
                  More trust. More confidence. More opportunities.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =====================================================================
           6. FLOATING CTA ROCKET BANNER (85% Width)
           ===================================================================== */}
      <div className="container cta-banner-wrapper">
        <div className="cta-floating-card">
          <div className="cta-rocket-visual">
            <img src="/assets/rocket.png" alt="Rocket Launch" className="cta-rocket-img" />
          </div>

          <div className="cta-center-content">
            <h3 className="cta-headline">
              Take the <span className="cta-title-red">Right</span> Step Today
            </h3>
            <p className="cta-subtext">
              A trusted screening today can open doors to endless tomorrows.
            </p>
            <Link to="/login" className="btn-cta-red">
              Get Started Now
              <span className="btn-cta-circle">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="6 4 20 12 6 20"></polygon>
                </svg>
              </span>
            </Link>
          </div>

          <div className="cta-ratings-group">
            <div className="rating-box">
              <div className="rating-score">4.8 <span className="rating-out-of">/5</span></div>
              <div className="stars-row">★★★★★</div>
              <div className="rating-label">Job Seeker Rating</div>
            </div>
            <div className="rating-box">
              <div className="rating-score">4.7 <span className="rating-out-of">/5</span></div>
              <div className="stars-row">★★★★★</div>
              <div className="rating-label">Employer Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================================
           6. FOOTER
           ===================================================================== */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top-grid">
            
            {/* Column 1: Brand Info */}
            <div className="footer-brand-col">
              <Link to="/" className="footer-logo">
                <span className="logo-hire text-white">HIRE</span>
                <span className="logo-right text-red">RIGHT</span>
              </Link>
              <p className="footer-tagline">
                Right People. Right Decisions.
              </p>
              <div className="footer-social-links">
                <a href="#linkedin" className="social-icon" aria-label="LinkedIn">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                </a>
                <a href="#twitter" className="social-icon" aria-label="Twitter">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
                </a>
                <a href="#youtube" className="social-icon" aria-label="YouTube">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#050b18"/></svg>
                </a>
              </div>
            </div>

            {/* Column 2: For Job Seekers */}
            <div className="footer-links-col">
              <h4 className="footer-col-title">For Job Seekers</h4>
              <ul className="footer-links-list">
                <li><Link to="/about-us">Profile Verification</Link></li>
                <li><Link to="/about-us">How to Get Started</Link></li>
                <li><a href="#faq">Candidate FAQs</a></li>
                <li><a href="#privacy">Privacy Protection</a></li>
              </ul>
            </div>

            {/* Column 3: Products */}
            <div className="footer-links-col">
              <h4 className="footer-col-title">Products</h4>
              <ul className="footer-links-list">
                <li><a href="#solutions">Background Checks</a></li>
                <li><a href="#solutions">Identity Verification</a></li>
                <li><a href="#solutions">Education Screening</a></li>
                <li><a href="#solutions">Global Screening</a></li>
              </ul>
            </div>

            {/* Column 4: Stay Connected */}
            <div className="footer-links-col">
              <h4 className="footer-col-title">Stay Connected</h4>
              <p style={{ fontSize: '12.5px', color: '#94a3b8', marginBottom: '14px' }}>
                Subscribe to our newsletter for insights and product updates.
              </p>
              <div className="newsletter-box">
                <input type="email" placeholder="Enter your email" className="newsletter-input" />
                <button type="button" className="btn-newsletter" aria-label="Subscribe">
                  &rarr;
                </button>
              </div>
            </div>

          </div>

          <div className="footer-bottom-bar">
            <div className="copyright-text">
              &copy; {new Date().getFullYear()} HireRight, LLC. All Rights Reserved.
            </div>
            <div className="footer-legal-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
