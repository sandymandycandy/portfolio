import React, { useState, useEffect } from 'react';
import './CursorFollower.css';

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [robotPosition, setRobotPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const smoothFollow = () => {
      setRobotPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.1,
        y: prev.y + (mousePosition.y - prev.y) * 0.1,
      }));
    };

    const animationFrame = requestAnimationFrame(smoothFollow);
    return () => cancelAnimationFrame(animationFrame);
  }, [mousePosition, robotPosition]);

  return (
    <div
      className="cursor-follower"
      style={{
        transform: `translate(${robotPosition.x}px, ${robotPosition.y}px)`,
      }}
    >
      <div className="robot">
        <div className="robot-head">
          <div className="robot-antenna">
            <div className="antenna-ball"></div>
          </div>
          <div className="robot-eyes">
            <div className="eye left-eye"></div>
            <div className="eye right-eye"></div>
          </div>
          <div className="robot-mouth"></div>
        </div>
        <div className="robot-body">
          <div className="robot-panel"></div>
          <div className="robot-light"></div>
        </div>
        <div className="robot-arms">
          <div className="arm left-arm"></div>
          <div className="arm right-arm"></div>
        </div>
        <div className="robot-legs">
          <div className="leg left-leg"></div>
          <div className="leg right-leg"></div>
        </div>
      </div>
    </div>
  );
};

export default CursorFollower;
