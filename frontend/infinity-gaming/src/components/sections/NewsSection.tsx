import React from 'react';
import { FaClock, FaUser, FaArrowRight } from 'react-icons/fa';
import Card from '../ui/Card';
import Button from '../ui/Button';
import './NewsSection.css';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: number;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'Infinity Gaming Wins Regional Championship',
    excerpt: 'Our League of Legends team dominated the regional finals with a perfect 3-0 victory against Phoenix Gaming.',
    author: 'Sarah Mitchell',
    date: 'Dec 15, 2024',
    category: 'Tournament',
    image: 'https://via.placeholder.com/300x200/1a1a1a/00d4ff?text=Championship+Win',
    readTime: 3,
  },
  {
    id: 2,
    title: 'New Valorant Roster Announcement',
    excerpt: 'We\'re excited to introduce our new Valorant lineup featuring top-tier talent from across the region.',
    author: 'Mike Chen',
    date: 'Dec 12, 2024',
    category: 'Team Update',
    image: 'https://via.placeholder.com/300x200/1a1a1a/8b00ff?text=New+Roster',
    readTime: 2,
  },
  {
    id: 3,
    title: 'Gaming Setup Guide: Pro Tips',
    excerpt: 'Learn how our professional players optimize their gaming setups for maximum performance.',
    author: 'Alex Rivera',
    date: 'Dec 10, 2024',
    category: 'Guide',
    image: 'https://via.placeholder.com/300x200/1a1a1a/00ffff?text=Gaming+Setup',
    readTime: 5,
  },
];

const NewsSection: React.FC = () => {
  return (
    <section className="news-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">Latest News</span>
          </h2>
          <p className="section-subtitle">
            Stay updated with our latest achievements and announcements
          </p>
        </div>
        
        <div className="news-grid">
          {newsItems.map((article, index) => (
            <Card key={article.id} className={`news-card animate-fade-${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="news-image">
                <img src={article.image} alt={article.title} />
                <div className="news-category">{article.category}</div>
              </div>
              
              <div className="news-content">
                <h3 className="news-title">{article.title}</h3>
                <p className="news-excerpt">{article.excerpt}</p>
                
                <div className="news-meta">
                  <div className="meta-group">
                    <div className="meta-item">
                      <FaUser className="meta-icon" />
                      <span>{article.author}</span>
                    </div>
                    <div className="meta-item">
                      <FaClock className="meta-icon" />
                      <span>{article.readTime} min read</span>
                    </div>
                  </div>
                  <span className="news-date">{article.date}</span>
                </div>
                
                <Button variant="secondary" size="sm" icon={<FaArrowRight />}>
                  Read More
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="news-actions">
          <Button variant="primary" size="lg">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;