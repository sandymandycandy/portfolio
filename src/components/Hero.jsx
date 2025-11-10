import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Your Name</span>
        </h1>
        <h2 className="hero-subtitle">Professional Full Stack Developer</h2>
        <p className="hero-description">
          Crafting exceptional web experiences with modern technologies. Specialized in MERN Stack development and enterprise-level solutions using XAMPP.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
      <div className="scroll-down">
        <span>Scroll Down</span>
        <div className="arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
