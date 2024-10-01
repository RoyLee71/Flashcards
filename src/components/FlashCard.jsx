// import React, { useState } from 'react';
import '../index.css';

const FlashCard = ({ card, isFlipped, onFlip }) => {
  // const [isFlipped, setIsFlipped] = useState(false);

  // const handleCardClick = () => {
  //   setIsFlipped(!isFlipped);
  // };

  return (
    <div className={`flash-card ${isFlipped ? 'flipped' : ''}`} onClick={onFlip}>
      <div className="card-inner">
        <div className="card-front">
          <p>{card.question}</p>
        </div>
        <div className="card-back">
          <p>{card.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;