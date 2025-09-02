import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPlay, FaDotCircle } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header: React.FC = () => {
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

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/equipos', label: 'Teams' },
    { path: '/nosotros', label: 'About' },
    { path: '/staff', label: 'Staff' },
    { path: '/contacto', label: 'Contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="header-logo">
            <div className="logo-icon">⚡</div>
            <div className="logo-text">
              <span className="logo-primary">INFINITY</span>
              <span className="logo-secondary">GAMING</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="header-nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${
                  location.pathname === link.path ? 'nav-link--active' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Live Button */}
          <div className="header-actions">
            <button className="live-button">
              <FaDotCircle className="live-icon" />
              <span>LIVE</span>
              <div className="live-dot"></div>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu--open' : ''}`}>
          <nav className="mobile-nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`mobile-nav-link ${
                  location.pathname === link.path ? 'mobile-nav-link--active' : ''
                }`}
                onClick={toggleMobileMenu}
              >
                {link.label}
              </Link>
            ))}
            <button className="mobile-live-button">
              <FaDotCircle className="live-icon" />
              <span>WATCH LIVE</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;