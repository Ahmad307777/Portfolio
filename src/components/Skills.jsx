import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "C++", "JavaScript", "SQL", "HTML5", "CSS3"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Django", "Flask", "REST API"]
    },
    {
      title: "Frontend & DB",
      skills: ["React.js", "Bootstrap 5", "MongoDB", "MySQL"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "Streamlit", "Tkinter", "Azure"]
    }
  ];

  const getIconUrl = (skill) => {
    const slugMap = {
      "Python": "python",
      "C++": "cpp",
      "JavaScript": "javascript",
      "SQL": "sqlite",
      "HTML5": "html",
      "CSS3": "css",
      "Node.js": "nodejs",
      "Express.js": "express",
      "Django": "django",
      "Flask": "flask",
      "React.js": "react",
      "Bootstrap 5": "bootstrap",
      "MongoDB": "mongodb",
      "MySQL": "mysql",
      "Git": "git",
      "GitHub": "github",
      "Azure": "azure",
      "Streamlit": "streamlit",
    };
    
    // Explicitly handle skills without good SkillIcons slugs
    if (skill === "REST API" || skill === "Tkinter") return null;

    const slug = slugMap[skill] || skill.toLowerCase();
    return `https://skillicons.dev/icons?i=${slug}`;
  };

  const getFallbackIcon = (skill) => {
    return (
      <div className="flex-center" style={{ 
        width: '45px', 
        height: '45px', 
        borderRadius: '10px', 
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
        color: 'black',
        fontWeight: 800,
        fontSize: '0.7rem',
        textAlign: 'center',
        padding: '2px',
        boxShadow: '0 4px 15px rgba(0, 242, 254, 0.3)'
      }}>
        {skill === "REST API" ? "API" : skill === "Streamlit" ? "ST" : skill.substring(0, 2).toUpperCase()}
      </div>
    );
  };

  return (
    <section id="skills" className="section-padding container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: '3rem', marginBottom: '1rem' }}
        >
          Technical <span className="gradient-text">Skills</span>
        </motion.h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '80px' }}
          viewport={{ once: true }}
          style={{ height: '4px', background: 'var(--primary)', margin: '0 auto', borderRadius: '2px' }}
        ></motion.div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card"
            style={{ padding: '2rem' }}
          >
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              {category.title}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem' }}>
              {category.skills.map((skill, sIdx) => (
                <motion.div
                  key={sIdx}
                  whileHover={{ y: -5 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
                >
                  <div style={{ width: '45px', height: '45px' }}>
                    {getIconUrl(skill) ? (
                      <img 
                        src={getIconUrl(skill)} 
                        alt={skill} 
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                      />
                    ) : null}
                    {(!getIconUrl(skill) || skill === "REST API" || skill === "Tkinter") && getFallbackIcon(skill)}
                    {getIconUrl(skill) && <div style={{ display: 'none' }}>{getFallbackIcon(skill)}</div>}
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
