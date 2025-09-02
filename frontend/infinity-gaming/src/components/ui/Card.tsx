import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  glow = false,
}) => {
  const baseClasses = 'card';
  const hoverClasses = hover ? 'hover:transform hover:-translate-y-1' : '';
  const glowClasses = glow ? 'animate-pulse' : '';
  
  const classes = `${baseClasses} ${hoverClasses} ${glowClasses} ${className}`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Card;