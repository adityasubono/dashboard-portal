import React from 'react';
import TypingCard from '@/components/TypingCard'
const Curriculum = () => {
  const cardContent = `Curriculum Page`
  return (
    <div className="app-container">
      <TypingCard title='Admin System'  source={cardContent}/>
    </div>
  );
}

export default Curriculum;