import React, { useState, useEffect } from 'react';
import FlashCard from './FlashCard';
import NavigationButtons from './NavigationButtons';
import { triviaData } from '../data/triviaData';
import ProgressIndicator from './ProgressIndicator';
import GuessInput from './GuessInput';
import '../index.css';

const TriviaFlashcards = () => {
  const [cards, setCards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [userGuess, setUserGuess] = useState('');
  const [guessResult, setGuessResult] = useState(null);



  useEffect(() => {
    const shuffledCards = [...triviaData].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  }, []);

  const handleNextCard = () => {
    // setIsFlipped(false);
    // handleCardClick();
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(prevIndex => prevIndex + 1);
      resetCard();
    }
  };

  const handlePreviousCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(prevIndex => prevIndex - 1);
      resetCard();
    }
  };

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleGuessSubmit = () => {
    const currentCard = cards[currentCardIndex];
    const isCorrect = userGuess.toLowerCase() === currentCard.answer.toLowerCase();
    setGuessResult(isCorrect);
    setIsFlipped(true);
  };

  const resetCard = () => {
    setIsFlipped(false);
    setUserGuess('');
    setGuessResult(null);
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
      <GuessInput 
        userGuess={userGuess}
        setUserGuess={setUserGuess}
        onSubmit={handleGuessSubmit}
        guessResult={guessResult}
        isFlipped={isFlipped}
      />
      <NavigationButtons 
        onPrevious={handlePreviousCard} 
        onNext={handleNextCard}
        hasPrevious={currentCardIndex > 0}
        hasNext={currentCardIndex < cards.length - 1}
      />
    </div>
  );
};

export default TriviaFlashcards;