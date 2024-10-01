import React, { useState, useEffect } from 'react';
import FlashCard from './FlashCard';
import NextButton from './NextButton';
import { triviaData } from '../data/triviaData';
import ProgressIndicator from './ProgressIndicator';
import '../index.css';

const TriviaFlashcards = () => {
  const [cards, setCards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);


  useEffect(() => {
    const shuffledCards = [...triviaData].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  }, []);

  const handleNextCard = () => {
    setIsFlipped(false);
    // handleCardClick();
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  if (cards.length === 0) {
    return <div>Loading...</div>;
  }
  //prevent code from breaking

  return (
    <div className="trivia-flashcards">
      <h1>Trivia Flashcards</h1>
      <h2>Ready to test your knowledge?</h2>
      <ProgressIndicator current={currentCardIndex + 1} total={cards.length} />
      <FlashCard card={cards[currentCardIndex]} isFlipped={isFlipped} onFlip={handleCardFlip} />
      <NextButton onClick={handleNextCard} />
    </div>
  );
};

export default TriviaFlashcards;