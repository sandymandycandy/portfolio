import React from 'react';
import './UnicornStudio.css';

const UnicornStudio = () => {
  return (
    <div className="unicorn-studio-container">
      <iframe
        src="https://unicorn.studio/embed/752CljhqTsG0pF2hdEYL"
        title="Unicorn Studio Animation"
        className="unicorn-iframe"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

export default UnicornStudio;
