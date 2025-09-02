import React from 'react';
import { FaTrophy, FaUsers, FaGamepad, FaClock } from 'react-icons/fa';
import './StatsSection.css';

interface Stat {
  id: number;
  icon: React.ReactNode;
  number: string;
  label: string;
  color: string;
}

const stats: Stat[] = [
  {
    id: 1,
    icon: <FaTrophy />,
    number: '127',
    label: 'Wins',
    color: 'var(--neon-blue)',
  },
  {
    id: 2,
    icon: <FaTrophy />,
    number: '23',
    label: 'Tournaments',
    color: 'var(--neon-purple)',
  },
  {
    id: 3,
    icon: <FaUsers />,
    number: '15',
    label: 'Players',
    color: 'var(--neon-cyan)',
  },
  {
    id: 4,
    icon: <FaClock />,
    number: '5',
    label: 'Years',
    color: 'var(--neon-pink)',
  },
];

const StatsSection: React.FC = () => {
  return (
    <section className="stats-section">
      <div className="stats-background"></div>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">Our Achievements</span>
          </h2>
          <p className="section-subtitle">
            Numbers that showcase our dominance in the esports arena
          </p>
        </div>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div 
              key={stat.id} 
              className={`stat-card animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="stat-icon"
                style={{ 
                  color: stat.color,
                  textShadow: `0 0 20px ${stat.color}`,
                }}
              >
                {stat.icon}
              </div>
              <div className="stat-number" style={{ color: stat.color }}>
                {stat.number}
              </div>
              <div className="stat-label">{stat.label}</div>
              <div 
                className="stat-glow" 
                style={{ background: `radial-gradient(circle, ${stat.color}20 0%, transparent 70%)` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;