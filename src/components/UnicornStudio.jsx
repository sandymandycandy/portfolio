import React, { useEffect, useRef } from 'react';
import './UnicornStudio.css';

const UnicornStudio = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Try loading Unicorn Studio with script tag approach
    const script = document.createElement('script');
    script.src = 'https://unicorn.studio/unicornStudio.umd.js';
    script.async = true;

    script.onload = () => {
      if (window.UnicornStudio && containerRef.current) {
        window.UnicornStudio.init({
          el: containerRef.current,
          scene: '752CljhqTsG0pF2hdEYL'
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="unicorn-studio-container">
      <iframe
        src="https://unicorn.studio/remix/752CljhqTsG0pF2hdEYL"
        title="Unicorn Studio Animation"
        className="unicorn-iframe"
        allowFullScreen
        loading="lazy"
      />
      <div ref={containerRef} className="unicorn-canvas"></div>
    </div>
  );
};

export default UnicornStudio;
