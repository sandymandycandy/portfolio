import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Redux', level: 80 }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 85 },
        { name: 'PHP', level: 75 },
        { name: 'RESTful APIs', level: 90 }
      ]
    },
    {
      category: 'Database',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'PostgreSQL', level: 75 }
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'XAMPP', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'VS Code', level: 95 }
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
          Technologies and tools I use to bring ideas to life
        </p>
        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-stack">
          <h3 className="tech-title">Tech Stack Highlights</h3>
          <div className="tech-badges">
            <span className="tech-badge">MERN Stack</span>
            <span className="tech-badge">XAMPP</span>
            <span className="tech-badge">Full Stack Development</span>
            <span className="tech-badge">Responsive Design</span>
            <span className="tech-badge">RESTful APIs</span>
            <span className="tech-badge">Version Control</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
