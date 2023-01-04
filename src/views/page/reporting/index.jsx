import React from 'react';
import TypingCard from '@/components/TypingCard'
const Reporting = () => {
  const cardContent = `Reporting Page`
  return (
    <div className="app-container">
      <TypingCard title='Reporting Page'  source={cardContent}/>
    </div>
  );
}

export default Reporting;