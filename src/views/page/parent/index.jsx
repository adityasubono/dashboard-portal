import React from 'react';
import TypingCard from '@/components/TypingCard'
const Parent = () => {
  const cardContent = `Parent Page`
  return (
    <div className="app-container">
      <TypingCard title='Parent Page'  source={cardContent}/>
    </div>
  );
}

export default Parent;