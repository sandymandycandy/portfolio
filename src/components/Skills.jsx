import React, { useState, useRef, useEffect } from 'react';
import './Skills.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
  const [skillsRef, skillsVisible] = useScrollAnimation({ threshold: 0.2, once: true });
  const [billboardRef, billboardVisible] = useScrollAnimation({ threshold: 0.3, once: true });
  const trackRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (trackRef.current) {
        const billboard = trackRef.current.parentElement;
        const rect = billboard.getBoundingClientRect();

        // Calculate mouse position relative to billboard (0 to 1)
        const mouseX = e.clientX - rect.left;
        const relativePosition = mouseX / rect.width;

        // Calculate scroll range (half the track width for seamless loop)
        const trackWidth = trackRef.current.scrollWidth / 2;
        const maxScroll = trackWidth;

        // Map mouse position to scroll position (reversed for natural feel)
        const newScrollPosition = -(relativePosition * maxScroll);

        setScrollPosition(newScrollPosition);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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
    <section className="skills" id="skills" ref={skillsRef}>
      <div className="container">
        <h2 className={`section-title ${skillsVisible ? 'animate-in' : ''}`}>Professional Skills</h2>
        <p className={`section-subtitle ${skillsVisible ? 'animate-in' : ''}`}>
          Cutting-edge technologies I use to build exceptional digital experiences
        </p>

        <div className={`skills-billboard ${billboardVisible ? 'animate-in' : ''}`} ref={billboardRef}>
          <div
            className="billboard-track"
            ref={trackRef}
            style={{ transform: `translateX(${scrollPosition}px)` }}
          >
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

        <div className={`expertise-grid ${skillsVisible ? 'animate-in' : ''}`}>
          <div className={`expertise-card ${skillsVisible ? 'animate-card-1' : ''}`}>
            <div className="expertise-icon">🎯</div>
            <h3>MERN Stack</h3>
            <p>Full-stack development with MongoDB, Express, React, and Node.js</p>
          </div>
          <div className={`expertise-card ${skillsVisible ? 'animate-card-2' : ''}`}>
            <div className="expertise-icon">⚙️</div>
            <h3>XAMPP Expert</h3>
            <p>Proficient in Apache, MySQL, PHP, and Perl development environments</p>
          </div>
          <div className={`expertise-card ${skillsVisible ? 'animate-card-3' : ''}`}>
            <div className="expertise-icon">🚀</div>
            <h3>Modern Web Apps</h3>
            <p>Building responsive, performant, and scalable web applications</p>
          </div>
          <div className={`expertise-card ${skillsVisible ? 'animate-card-4' : ''}`}>
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
