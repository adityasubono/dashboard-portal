import React from 'react';
import TypingCard from '@/components/TypingCard'
const Student = () => {
  const cardContent = `Student Page`
  return (
    <div className="app-container">
      <TypingCard title='Student Page'  source={cardContent}/>
    </div>
  );
}

export default Student;