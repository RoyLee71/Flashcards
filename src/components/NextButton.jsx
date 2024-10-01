import React from 'react';
import '../index.css';

const NextButton = ({ onClick }) => {
  return (
    <button className="next-button" onClick={onClick}>
      Next Card
    </button>
  );
};

export default NextButton;