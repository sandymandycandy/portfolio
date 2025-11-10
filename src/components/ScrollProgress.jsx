import React from 'react';
import { useScrollProgress } from '../hooks/useScrollAnimation';
import './ScrollProgress.css';

const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div className="scroll-progress-container">
      <div
        className="scroll-progress-bar"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
};

export default ScrollProgress;
