import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Cpu, Database, Layout, Globe, Image } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Resume Screening Tool",
      tech: "Python, ML, NLP",
      desc: "Engineered an end-to-end ML pipeline that automatically parses, scores, and ranks resumes against job requirements.",
      icon: <Cpu size={24} />,
      color: "#00f2fe"
    },
    {
      title: "NLP Essay Scoring System",
      tech: "BERT, LSTM, Transformers, GPT",
      desc: "Built an AI-powered essay evaluation system leveraging BERT and LSTM to automatically score responses and generate feedback.",
      icon: <Code size={24} />,
      color: "#4facfe"
    },
    {
      title: "Survonica - Intelligent Survey",
      tech: "React.js, Node.js, MongoDB",
      desc: "Architected a full stack survey platform featuring dynamic form generation and real-time result visualisation dashboards.",
      icon: <Layout size={24} />,
      color: "#22d3ee"
    },
    {
      title: "Cipher Visualiser",
      tech: "Python, Tkinter",
      desc: "Interactive GUI application that animates the step-by-step flow of Caesar, Vigenere, and Playfair cipher algorithms.",
      icon: <Globe size={24} />,
      color: "#0ea5e9"
    },
    {
      title: "Podcast Cloud Platform",
      tech: "Cloud Computing, Azure",
      desc: "Cloud-hosted platform leveraging scalable infrastructure for media storage, streaming, and user management.",
      icon: <Database size={24} />,
      color: "#38bdf8"
    },
    {
      title: "Parallel Image Processing",
      tech: "Python, Multiprocessing",
      desc: "Multiprocessing pipeline for image filtering that dramatically reduced processing time by distributing workloads.",
      icon: <Image size={24} />,
      color: "#7dd3fc"
    }
  ];

  return (
    <section id="projects" className="section-padding container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: '3rem', marginBottom: '1rem' }}
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '80px' }}
          viewport={{ once: true }}
          style={{ height: '4px', background: 'var(--primary)', margin: '0 auto', borderRadius: '2px' }}
        ></motion.div>
      </div>

      <div className="grid-cols-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card"
            style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}
          >
            <div style={{ 
              width: '50px', 
              height: '50px', 
              background: `rgba(255, 255, 255, 0.05)`, 
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              color: 'var(--primary)',
              border: '1px solid var(--glass-border)'
            }}>
              {project.icon}
            </div>
            
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{project.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', flex: 1 }}>
              {project.desc}
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {project.tech.split(', ').map((t, i) => (
                <span key={i} style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.05)', padding: '0.3rem 0.8rem', borderRadius: '50px', color: 'var(--primary)' }}>
                  {t}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <motion.a whileHover={{ color: 'var(--primary)' }} href="#" style={{ color: 'var(--text-secondary)' }}><Github size={20} /></motion.a>
              <motion.a whileHover={{ color: 'var(--primary)' }} href="#" style={{ color: 'var(--text-secondary)' }}><ExternalLink size={20} /></motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
