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
        
        {/* Top Navigation */}
        <div className="navbar__top">
          <div className="top-nav">
            <Link to="/about" className="top-nav__link">About</Link>
            <Link to="/history" className="top-nav__link">History</Link>
            <Link to="/championships" className="top-nav__link">Championships</Link>
            <Link to="/investors" className="top-nav__link">Investors</Link>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="navbar__main">
          
          {/* Logo Section */}
          <div className="navbar__brand">
            <Link to="/" className="brand__logo">
              <div className="logo__icon">
                <div className="logo__symbol">∞</div>
              </div>
              <span className="logo__text">SENTINELS</span>
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

          {/* User Actions */}
          <div className="navbar__actions">
            <button className="action__user" aria-label="User account">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </button>
            
            <button className="action__cart" aria-label="Shopping cart">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="8" cy="21" r="1"/>
                <circle cx="19" cy="21" r="1"/>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57L23 6H6"/>
              </svg>
              <span className="cart__badge">0</span>
            </button>
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