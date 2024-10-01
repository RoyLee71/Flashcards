import React from 'react';
import '../index.css';

const ProgressIndicator = ({ current, total }) => {
  return (
    <div className="progress-indicator">
      Card {current} of {total}
    </div>
  );
};

export default ProgressIndicator;