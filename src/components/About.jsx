import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Full Stack Developer with expertise in building modern web applications.
              I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p>
              My journey in software development has equipped me with a strong foundation in both
              frontend and backend technologies. I'm always eager to learn new technologies and
              stay up-to-date with industry trends.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
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
