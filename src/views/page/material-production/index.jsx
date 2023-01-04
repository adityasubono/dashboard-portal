import React from 'react';
import TypingCard from '@/components/TypingCard'
const MaterialProduction = () => {
  const cardContent = `Material Production`
  return (
    <div className="app-container">
      <TypingCard title='Material Production'  source={cardContent}/>
    </div>
  );
}

export default MaterialProduction;