import React from 'react';
import '../index.css';

const GuessInput = ({ userGuess, setUserGuess, onSubmit, guessResult, isFlipped }) => {
  return (
    <div className="guess-input">
      <input 
        type="text" 
        value={userGuess} 
        onChange={(e) => setUserGuess(e.target.value)}
        placeholder="Enter your guess"
        disabled={isFlipped}
      />
      <button onClick={onSubmit} disabled={isFlipped}>Submit Guess</button>
      {guessResult !== null && (
        <span className={`guess-result ${guessResult ? 'correct' : 'incorrect'}`}>
          {guessResult ? '✓' : '✗'}
        </span>
      )}
    </div>
  );
};

export default GuessInput;