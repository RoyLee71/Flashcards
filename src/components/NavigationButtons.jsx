import React from 'react';
import '../index.css';

const NavigationButtons = ({ onPrevious, onNext, hasPrevious, hasNext }) => {
  return (
    <div className="navigation-buttons">
      <button onClick={onPrevious} disabled={!hasPrevious}>Previous</button>
      <button onClick={onNext} disabled={!hasNext}>Next</button>
    </div>
  );
};

export default NavigationButtons;