import React from 'react';
import TypingCard from '@/components/TypingCard'
const Admission = () => {
  const cardContent = `Admission Page`
  return (
    <div className="app-container">
      <TypingCard title='Admin System'  source={cardContent}/>
    </div>
  );
}

export default Admission;