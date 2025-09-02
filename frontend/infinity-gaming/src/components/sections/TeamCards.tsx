import React from 'react';
import { FaGamepad, FaBullseye, FaCar, FaFistRaised } from 'react-icons/fa';
import Card from '../ui/Card';
import Button from '../ui/Button';
import './TeamCards.css';

interface Team {
  id: number;
  name: string;
  game: string;
  icon: React.ReactNode;
  players: number;
  rank: string;
  description: string;
  color: string;
}

const teams: Team[] = [
  {
    id: 1,
    name: 'Infinity LoL',
    game: 'League of Legends',
    icon: <FaFistRaised />,
    players: 5,
    rank: 'Diamond',
    description: 'Elite MOBA team dominating the Rift with strategic gameplay and mechanical prowess.',
    color: 'var(--neon-blue)',
  },
  {
    id: 2,
    name: 'Infinity VAL',
    game: 'Valorant',
    icon: <FaBullseye />,
    players: 5,
    rank: 'Immortal',
    description: 'Tactical FPS specialists with precision aim and coordinated team plays.',
    color: 'var(--neon-purple)',
  },
  {
    id: 3,
    name: 'Infinity CS2',
    game: 'Counter-Strike 2',
    icon: <FaGamepad />,
    players: 5,
    rank: 'Global Elite',
    description: 'Veteran CS team with years of experience in competitive shooting.',
    color: 'var(--neon-cyan)',
  },
  {
    id: 4,
    name: 'Infinity RL',
    game: 'Rocket League',
    icon: <FaCar />,
    players: 3,
    rank: 'Grand Champion',
    description: 'High-speed car football masters with incredible aerial mechanics.',
    color: 'var(--neon-pink)',
  },
];

const TeamCards: React.FC = () => {
  return (
    <section className="teams-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">Our Teams</span>
          </h2>
          <p className="section-subtitle">
            Elite gaming squads competing at the highest level
          </p>
        </div>
        
        <div className="teams-grid">
          {teams.map((team, index) => (
            <Card key={team.id} className={`team-card animate-fade-${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="team-header">
                <div 
                  className="team-icon"
                  style={{ color: team.color, textShadow: `0 0 10px ${team.color}` }}
                >
                  {team.icon}
                </div>
                <div className="team-info">
                  <h3 className="team-name">{team.name}</h3>
                  <p className="team-game">{team.game}</p>
                </div>
              </div>
              
              <div className="team-stats">
                <div className="team-stat">
                  <span className="stat-label">Players</span>
                  <span className="stat-value">{team.players}</span>
                </div>
                <div className="team-stat">
                  <span className="stat-label">Rank</span>
                  <span className="stat-value">{team.rank}</span>
                </div>
              </div>
              
              <p className="team-description">{team.description}</p>
              
              <div className="team-actions">
                <Button variant="primary" size="sm">
                  View Roster
                </Button>
                <Button variant="secondary" size="sm">
                  Watch Games
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamCards;