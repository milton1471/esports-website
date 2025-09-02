import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import FeaturedContent from '../components/sections/FeaturedContent';
import TeamCards from '../components/sections/TeamCards';
import StatsSection from '../components/sections/StatsSection';
import NewsSection from '../components/sections/NewsSection';

const HomePage: React.FC = () => {
  return (
    <main className="homepage">
      <HeroSection />
      <FeaturedContent />
      <TeamCards />
      <StatsSection />
      <NewsSection />
    </main>
  );
};

export default HomePage;