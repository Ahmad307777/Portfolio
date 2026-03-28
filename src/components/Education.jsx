import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  const education = [
    {
      institution: "Namal University, Mianwali",
      degree: "Bachelor of Science in Computer Science",
      duration: "2022 – 2026",
      logo: "/src/assets/namal.png"
    },
    {
      institution: "Superior Group of Colleges, Mianwali",
      degree: "Intermediate in Computer Science (ICS)",
      duration: "2020 – 2022",
      logo: "/src/assets/superior.png"
    }
  ];

  return (
    <section id="education" className="section-padding container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: '3rem', marginBottom: '1rem' }}
        >
          My <span className="gradient-text">Education</span>
        </motion.h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '80px' }}
          viewport={{ once: true }}
          style={{ height: '4px', background: 'var(--primary)', margin: '0 auto', borderRadius: '2px' }}
        ></motion.div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="glass-card"
            style={{ padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'center' }}
          >
            <div className="flex-center" style={{ width: '80px', height: '80px', background: 'white', borderRadius: '15px', padding: '10px' }}>
              <img 
                src={item.logo} 
                alt={item.institution} 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
              />
              <GraduationCap size={40} color="black" style={{ display: 'none' }} />
            </div>
            
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{item.degree}</h3>
              <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.5rem' }}>{item.institution}</p>
              <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Calendar size={14} /> {item.duration}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><MapPin size={14} /> Mianwali</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
