import React from 'react';
import TypingCard from '@/components/TypingCard'
const SchoolManagement = () => {
  const cardContent = `School Management Page`
  return (
    <div className="app-container">
      <TypingCard title='School Management Page'  source={cardContent}/>
    </div>
  );
}

export default SchoolManagement;