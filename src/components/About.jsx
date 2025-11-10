import React from 'react';
import './About.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const [aboutRef, aboutVisible] = useScrollAnimation({ threshold: 0.2, once: true });

  return (
    <section className="about" id="about" ref={aboutRef}>
      <div className="container">
        <h2 className={`section-title ${aboutVisible ? 'animate-in' : ''}`}>About Me</h2>
        <div className={`about-content ${aboutVisible ? 'animate-in' : ''}`}>
          <div className="about-text">
            <p>
              I'm a dedicated Full Stack Developer specializing in building scalable, high-performance web applications.
              With expertise in MERN Stack and XAMPP environments, I transform complex business requirements into
              elegant, user-centric digital solutions.
            </p>
            <p>
              My professional journey has equipped me with comprehensive knowledge in both client-side and server-side
              technologies. I excel at architecting robust applications, optimizing performance, and delivering
              exceptional user experiences across all platforms.
            </p>
            <p>
              Committed to continuous improvement, I stay current with emerging technologies and best practices.
              I thrive in collaborative environments and take pride in writing clean, maintainable code that
              drives business value.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>10+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Technologies</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
