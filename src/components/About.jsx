import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const interests = [
    "Full Stack Development",
    "Artificial Intelligence & ML",
    "Cloud Computing",
    "Parallel & Distributed Systems",
    "Cybersecurity"
  ];

  return (
    <section id="about" className="section-padding container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: '3rem', marginBottom: '1rem' }}
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '80px' }}
          viewport={{ once: true }}
          style={{ height: '4px', background: 'var(--primary)', margin: '0 auto', borderRadius: '2px' }}
        ></motion.div>
      </div>

      <div className="grid-cols-auto" style={{ gap: '4rem' }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>My Story</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            I am a Software Engineer with hands-on experience building full-stack web applications, AI-powered systems, and backend services. 
            Proficient across the MERN stack, Python frameworks, and core computer science fundamentals.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            I am passionate about writing clean, scalable code and delivering production-quality software that solves real problems. 
            My journey in computer science has led me to explore diverse fields from language processing internals to high-volume image processing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Areas of Interest</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 242, 254, 0.15)' }}
                className="glass-card"
                style={{ padding: '0.8rem 1.5rem', cursor: 'default' }}
              >
                {interest}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
