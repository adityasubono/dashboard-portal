import React from 'react';
import TypingCard from '@/components/TypingCard'
const AdminSystem = () => {
  const cardContent = `Admin System Page`
  return (
    <div className="app-container">
      <TypingCard title='Admin System'  source={cardContent}/>
    </div>
  );
}

export default AdminSystem;