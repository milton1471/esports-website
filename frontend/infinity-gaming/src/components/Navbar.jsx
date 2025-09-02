import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">

        {/* Top Navigation - Social Media Icons */}
        <div className="navbar__top">
          <div className="top-nav">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon social-icon--instagram">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-icon social-icon--tiktok">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon social-icon--twitter">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon social-icon--facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="navbar__main">

          {/* Logo Section - con imagen circular */}
          <div className="navbar__brand">
            <Link to="/" className="brand__logo">
              <div className="logo__image">
                <img
                  src="https://pbs.twimg.com/profile_images/1940673674647912448/biQcHkWw_400x400.jpg"
                  alt="FARENVEHN Logo"
                  className="logo__img"
                />
              </div>
              <span className="logo__text">FARENVEHN</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="navbar__nav">
            <Link
              to="/"
              className={`nav__link ${location.pathname === '/' ? 'nav__link--active' : ''}`}
            >
              HOME
            </Link>
            <Link
              to="/partners"
              className={`nav__link ${location.pathname === '/partners' ? 'nav__link--active' : ''}`}
            >
              PARTNERS
            </Link>
            <Link
              to="/teams"
              className={`nav__link ${location.pathname === '/teams' ? 'nav__link--active' : ''}`}
            >
              TEAMS
            </Link>
            <Link
              to="/content"
              className={`nav__link ${location.pathname === '/content' ? 'nav__link--active' : ''}`}
            >
              CONTENT
            </Link>
            <Link
              to="/sen-society"
              className={`nav__link ${location.pathname === '/sen-society' ? 'nav__link--active' : ''}`}
            >
              SEN SOCIETY
            </Link>
            <Link
              to="/news"
              className={`nav__link ${location.pathname === '/news' ? 'nav__link--active' : ''}`}
            >
              NEWS
            </Link>
            <Link
              to="/shop"
              className={`nav__link nav__link--special ${location.pathname === '/shop' ? 'nav__link--active' : ''}`}
            >
              SHOP
            </Link>
          </nav>

          {/* Argentina Flag */}
          <div className="navbar__actions">
            <div className="argentina-flag" aria-label="Argentina">
              <div className="flag-container">
                <div className="flag-stripe flag-stripe--blue"></div>
                <div className="flag-stripe flag-stripe--white">
                  <div className="flag-sun">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700">
                      <circle cx="12" cy="12" r="3" fill="#FFD700" />
                      <path d="M12 1v6m0 10v6m11-7h-6m-10 0H1m17.07-4.93l-4.24 4.24M5.17 5.17l4.24 4.24m8.48 0l-4.24 4.24M5.17 18.83l4.24-4.24"
                        stroke="#FFD700" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <div className="flag-stripe flag-stripe--blue"></div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`navbar__mobile-toggle ${isMobileMenuOpen ? 'mobile-toggle--active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${isMobileMenuOpen ? 'navbar__mobile--open' : ''}`}>
        <nav className="mobile__nav">
          <div className="mobile__section">
            <h4 className="mobile__section-title">Navigation</h4>
            <Link to="/" className="mobile__link" onClick={toggleMobileMenu}>HOME</Link>
            <Link to="/partners" className="mobile__link" onClick={toggleMobileMenu}>PARTNERS</Link>
            <Link to="/teams" className="mobile__link" onClick={toggleMobileMenu}>TEAMS</Link>
            <Link to="/content" className="mobile__link" onClick={toggleMobileMenu}>CONTENT</Link>
            <Link to="/sen-society" className="mobile__link" onClick={toggleMobileMenu}>SEN SOCIETY</Link>
            <Link to="/news" className="mobile__link" onClick={toggleMobileMenu}>NEWS</Link>
            <Link to="/shop" className="mobile__link mobile__link--special" onClick={toggleMobileMenu}>SHOP</Link>
          </div>

          <div className="mobile__section">
            <h4 className="mobile__section-title">About</h4>
            <Link to="/about" className="mobile__link" onClick={toggleMobileMenu}>About</Link>
            <Link to="/history" className="mobile__link" onClick={toggleMobileMenu}>History</Link>
            <Link to="/championships" className="mobile__link" onClick={toggleMobileMenu}>Championships</Link>
            <Link to="/investors" className="mobile__link" onClick={toggleMobileMenu}>Investors</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;