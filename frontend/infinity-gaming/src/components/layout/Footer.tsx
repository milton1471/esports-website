import React from 'react';
import { FaTwitter, FaInstagram, FaYoutube, FaTwitch, FaDiscord } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
    { icon: <FaYoutube />, href: '#', label: 'YouTube' },
    { icon: <FaTwitch />, href: '#', label: 'Twitch' },
    { icon: <FaDiscord />, href: '#', label: 'Discord' },
  ];

  const footerLinks = {
    'Organization': ['About Us', 'Our Teams', 'Achievements', 'Contact'],
    'Support': ['Help Center', 'Community', 'Press Kit', 'Careers'],
    'Legal': ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'DMCA'],
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">⚡</div>
              <div className="logo-text">
                <span className="logo-primary">INFINITY</span>
                <span className="logo-secondary">GAMING</span>
              </div>
            </div>
            <p className="footer-description">
              Professional esports organization dominating the competitive gaming scene with elite teams and exceptional talent.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="social-link"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="footer-links">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="footer-section">
                <h4 className="section-title">{category}</h4>
                <ul className="section-links">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="footer-link">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Infinity Gaming. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#" className="bottom-link">Privacy</a>
              <a href="#" className="bottom-link">Terms</a>
              <a href="#" className="bottom-link">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;