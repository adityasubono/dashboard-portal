import React from 'react';
import TypingCard from '@/components/TypingCard'
const GeneralAffair = () => {
  const cardContent = `General Affair Page`
  return (
    <div className="app-container">
      <TypingCard title='General Affair' source={cardContent}/>
    </div>
  );
}

export default GeneralAffair;