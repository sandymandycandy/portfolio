import React, { useEffect, useRef } from 'react';
import './UnicornStudio.css';

const UnicornStudio = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Load Framer Unicorn Studio Embed component
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://framer.com/m/UnicornStudioEmbed-wWy9.js';
    script.async = true;

    script.onload = () => {
      console.log('Unicorn Studio Framer component loaded');
    };

    script.onerror = () => {
      console.error('Failed to load Unicorn Studio component');
    };

    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="unicorn-studio-container">
      <div ref={containerRef} className="unicorn-wrapper">
        <unicornstudioembed-wwy9
          scene-id="752CljhqTsG0pF2hdEYL"
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0
          }}
        />
      </div>
    </div>
  );
};

export default UnicornStudio;
