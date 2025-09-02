import React from 'react';
import { FaPlay, FaCalendarAlt, FaTrophy, FaUsers, FaGamepad, FaDotCircle } from 'react-icons/fa';
import Card from '../ui/Card';
import Button from '../ui/Button';
import './FeaturedContent.css';

interface FeaturedItem {
  id: number;
  type: 'tournament' | 'stream' | 'event';
  title: string;
  subtitle: string;
  date: string;
  status: 'live' | 'upcoming' | 'completed';
  game: string;
  viewers?: number;
  prize?: string;
  image: string;
}

const featuredItems: FeaturedItem[] = [
  {
    id: 1,
    type: 'stream',
    title: 'Infinity LoL vs Phoenix Gaming',
    subtitle: 'Championship Finals',
    date: 'Live Now',
    status: 'live',
    game: 'League of Legends',
    viewers: 15420,
    image: 'https://via.placeholder.com/400x225/1a1a1a/00d4ff?text=LoL+Championship',
  },
  {
    id: 2,
    type: 'tournament',
    title: 'Valorant Pro Series',
    subtitle: 'Regional Qualifiers',
    date: 'Dec 25, 2024',
    status: 'upcoming',
    game: 'Valorant',
    prize: '$50,000',
    image: 'https://via.placeholder.com/400x225/1a1a1a/8b00ff?text=Valorant+Tournament',
  },
  {
    id: 3,
    type: 'event',
    title: 'CS2 Community Event',
    subtitle: 'Fan Meet & Greet',
    date: 'Dec 30, 2024',
    status: 'upcoming',
    game: 'Counter-Strike 2',
    image: 'https://via.placeholder.com/400x225/1a1a1a/00ffff?text=CS2+Event',
  },
];

const FeaturedContent: React.FC = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'live':
        return <FaDotCircle className="status-icon live" />;
      case 'upcoming':
        return <FaCalendarAlt className="status-icon upcoming" />;
      default:
        return <FaTrophy className="status-icon completed" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'live':
        return 'LIVE';
      case 'upcoming':
        return 'UPCOMING';
      default:
        return 'COMPLETED';
    }
  };

  return (
    <section className="featured-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">Featured Content</span>
          </h2>
          <p className="section-subtitle">
            Don't miss our latest tournaments, streams, and events
          </p>
        </div>
        
        <div className="featured-grid">
          {featuredItems.map((item, index) => (
            <Card key={item.id} className={`featured-card ${item.status} animate-slide-up`}>
              <div className="featured-image">
                <img src={item.image} alt={item.title} />
                <div className="image-overlay">
                  <div className="status-badge">
                    {getStatusIcon(item.status)}
                    <span>{getStatusText(item.status)}</span>
                  </div>
                  {item.status === 'live' && (
                    <div className="live-indicator">
                      <div className="live-dot"></div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="featured-content">
                <div className="content-header">
                  <h3 className="content-title">{item.title}</h3>
                  <p className="content-subtitle">{item.subtitle}</p>
                </div>
                
                <div className="content-meta">
                  <div className="meta-item">
                    <FaGamepad className="meta-icon" />
                    <span>{item.game}</span>
                  </div>
                  <div className="meta-item">
                    <FaCalendarAlt className="meta-icon" />
                    <span>{item.date}</span>
                  </div>
                  {item.viewers && (
                    <div className="meta-item">
                      <FaUsers className="meta-icon" />
                      <span>{item.viewers.toLocaleString()} viewers</span>
                    </div>
                  )}
                  {item.prize && (
                    <div className="meta-item">
                      <FaTrophy className="meta-icon" />
                      <span>{item.prize} prize pool</span>
                    </div>
                  )}
                </div>
                
                <div className="content-actions">
                  {item.status === 'live' ? (
                    <Button variant="primary" icon={<FaPlay />}>
                      Watch Live
                    </Button>
                  ) : (
                    <Button variant="secondary" icon={<FaCalendarAlt />}>
                      Learn More
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;