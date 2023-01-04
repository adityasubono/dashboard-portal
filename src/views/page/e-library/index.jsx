import React from 'react';
import TypingCard from '@/components/TypingCard'
const Elibrary = () => {
  const cardContent = `E-Library Page`
  return (
    <div className="app-container">
      <TypingCard title='E-Library'  source={cardContent}/>
    </div>
  );
}

export default Elibrary;