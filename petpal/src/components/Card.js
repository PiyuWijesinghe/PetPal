import React from 'react';

const Card = ({ pet }) => {
  return (
    <div style={{ 
      border: '1px solid #ddd', 
      borderRadius: '8px', 
      padding: '1rem', 
      margin: '1rem',
      maxWidth: '300px'
    }}>
      <h3>{pet.name}</h3>
      <p>{pet.breed} • {pet.age}</p>
      <p>📍 {pet.location}</p>
      <button style={{ 
        backgroundColor: '#007bff', 
        color: 'white', 
        border: 'none', 
        padding: '0.5rem 1rem',
        borderRadius: '4px'
      }}>
        View Details
      </button>
    </div>
  );
};

export default Card;