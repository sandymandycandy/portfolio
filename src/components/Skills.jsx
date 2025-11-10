import React from 'react';
import './Skills.css';

const Skills = () => {
  const technologies = [
    { name: 'React', icon: '⚛️', color: '#61DAFB' },
    { name: 'Node.js', icon: '🟢', color: '#68A063' },
    { name: 'MongoDB', icon: '🍃', color: '#47A248' },
    { name: 'Express', icon: '⚡', color: '#000000' },
    { name: 'JavaScript', icon: 'JS', color: '#F7DF1E' },
    { name: 'MySQL', icon: '🐬', color: '#4479A1' },
    { name: 'PHP', icon: '🐘', color: '#777BB4' },
    { name: 'XAMPP', icon: '🔶', color: '#FB7A24' },
    { name: 'Git', icon: '📦', color: '#F05032' },
    { name: 'Docker', icon: '🐳', color: '#2496ED' },
    { name: 'Redux', icon: '🔄', color: '#764ABC' },
    { name: 'HTML5', icon: '📄', color: '#E34F26' },
    { name: 'CSS3', icon: '🎨', color: '#1572B6' },
    { name: 'PostgreSQL', icon: '🐘', color: '#336791' },
    { name: 'REST API', icon: '🔗', color: '#009688' },
    { name: 'VS Code', icon: '💻', color: '#007ACC' },
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Professional Skills</h2>
        <p className="section-subtitle">
          Cutting-edge technologies I use to build exceptional digital experiences
        </p>

        <div className="skills-billboard">
          <div className="billboard-track">
            {/* First set of technologies */}
            {technologies.map((tech, index) => (
              <div key={`tech-1-${index}`} className="tech-card">
                <div className="tech-icon" style={{ '--tech-color': tech.color }}>
                  {tech.icon}
                </div>
                <div className="tech-name">{tech.name}</div>
              </div>
            ))}
            {/* Duplicate for seamless infinite scroll */}
            {technologies.map((tech, index) => (
              <div key={`tech-2-${index}`} className="tech-card">
                <div className="tech-icon" style={{ '--tech-color': tech.color }}>
                  {tech.icon}
                </div>
                <div className="tech-name">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="expertise-grid">
          <div className="expertise-card">
            <div className="expertise-icon">🎯</div>
            <h3>MERN Stack</h3>
            <p>Full-stack development with MongoDB, Express, React, and Node.js</p>
          </div>
          <div className="expertise-card">
            <div className="expertise-icon">⚙️</div>
            <h3>XAMPP Expert</h3>
            <p>Proficient in Apache, MySQL, PHP, and Perl development environments</p>
          </div>
          <div className="expertise-card">
            <div className="expertise-icon">🚀</div>
            <h3>Modern Web Apps</h3>
            <p>Building responsive, performant, and scalable web applications</p>
          </div>
          <div className="expertise-card">
            <div className="expertise-icon">🔧</div>
            <h3>DevOps Ready</h3>
            <p>Version control, containerization, and deployment automation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
