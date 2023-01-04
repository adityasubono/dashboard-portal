import React from 'react';
import TypingCard from '@/components/TypingCard'
const Finance = () => {
  const cardContent = `Finance Page`
  return (
    <div className="app-container">
      <TypingCard title='Finance'  source={cardContent}/>
    </div>
  );
}

export default Finance;