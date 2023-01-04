import React from 'react';
import TypingCard from '@/components/TypingCard'
const Alumni = () => {
  const cardContent = `Alumni Page`
  return (
    <div className="app-container">
      <TypingCard title='Alumni Page'  source={cardContent}/>
    </div>
  );
}

export default Alumni;