import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Home.css';

const Home = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/team-members');
      setTeamMembers(response.data);
    } catch (error) {
      console.error('Error fetching team members:', error);
      // Datos de ejemplo si no hay conexión con el backend
      setTeamMembers([
        { id: 1, name: 'Logitech G', image: 'https://via.placeholder.com/200x100/000000/FFFFFF?text=Logitech+G', type: 'sponsor' },
        { id: 2, name: 'SG1', image: 'https://via.placeholder.com/200x100/000000/FFFFFF?text=SG1', type: 'sponsor' }
      ]);
    }
  };

  return (
    <div className="home">
      {/* Hero Section con solo la imagen de fondo */}
      <div className="hero-section">
        <div className="hero-background">
          <img 
            src="https://pbs.twimg.com/profile_banners/1575021617100513280/1751527636/1500x500" 
            alt="Sentinels Banner" 
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
      </div>
      
      <div className="sponsors-section">
        <div className="sponsors-container">
          {teamMembers.map(member => (
            <div key={member.id} className="sponsor-logo">
              <img src={member.image} alt={member.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;