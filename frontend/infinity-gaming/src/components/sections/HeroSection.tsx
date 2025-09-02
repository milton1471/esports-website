import React from 'react';
import { FaPlay, FaUsers, FaTrophy } from 'react-icons/fa';
import Button from '../ui/Button';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="hero-grid"></div>
      </div>
      
      <div className="hero-content">
        <div className="container">
          <div className="hero-text animate-slide-up">
            <div className="hero-logo">
              <div className="logo-symbol">⚡</div>
              <div className="logo-text">INFINITY</div>
              <div className="logo-subtitle">GAMING</div>
            </div>
            
            <h1 className="hero-title">
              <span className="gradient-text">DOMINATE</span>{' '}
              <span className="neon-text">THE ARENA</span>
            </h1>
            
            <p className="hero-subtitle">
              Professional Esports Organization
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <FaTrophy className="stat-icon" />
                <span className="stat-number">127</span>
                <span className="stat-label">Wins</span>
              </div>
              <div className="stat-item">
                <FaUsers className="stat-icon" />
                <span className="stat-number">15</span>
                <span className="stat-label">Players</span>
              </div>
              <div className="stat-item">
                <FaTrophy className="stat-icon" />
                <span className="stat-number">23</span>
                <span className="stat-label">Tournaments</span>
              </div>
            </div>
            
            <div className="hero-actions">
              <Button variant="primary" size="lg" icon={<FaUsers />}>
                Join Team
              </Button>
              <Button variant="secondary" size="lg" icon={<FaPlay />}>
                Watch Live
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;