import React from 'react';
import TypingCard from '@/components/TypingCard'
const Teacher = () => {
  const cardContent = `Teacher Page`
  return (
    <div className="app-container">
      <TypingCard title='Teacher Page'  source={cardContent}/>
    </div>
  );
}

export default Teacher;