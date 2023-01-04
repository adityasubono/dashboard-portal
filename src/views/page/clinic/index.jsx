import React from 'react';
import TypingCard from '@/components/TypingCard'
const Clinic = () => {
  const cardContent = `Clinic Page`
  return (
    <div className="app-container">
      <TypingCard title='Clinic Page'  source={cardContent}/>
    </div>
  );
}

export default Clinic;