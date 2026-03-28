import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Phone, Download } from 'lucide-react';
import profileImg from '../assets/profile.png';

export default function Hero() {
  return (
    <section className="container flex-center" style={{ minHeight: '100vh', paddingTop: '80px' }}>
      <div className="grid-cols-auto" style={{ alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="gradient-text" 
            style={{ fontWeight: 600, fontSize: '1.2rem', marginBottom: '1rem' }}
          >
            Hello, I'm
          </motion.p>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Ahmad <br /> 
            <span className="gradient-text">Mustafa</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '500px', marginBottom: '2.5rem' }}>
            A passionate <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Software Engineer</span> specializing in MERN Stack, AI-powered systems, and building scalable backend solutions.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card flex-center"
              style={{ padding: '0.8rem 2rem', background: 'var(--primary)', color: 'black', textDecoration: 'none', fontWeight: 700 }}
            >
              Contact Me
            </motion.a>
            <motion.a 
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card flex-center"
              style={{ padding: '0.8rem 2rem', textDecoration: 'none', color: 'white', fontWeight: 600, gap: '0.5rem' }}
            >
              <Download size={20} /> Resume
            </motion.a>
          </div>
          
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem' }}>
            <motion.a whileHover={{ y: -5, color: 'var(--primary)' }} href="https://github.com/Ahmad307777" target="_blank" style={{ color: 'var(--text-secondary)' }}><Github size={24} /></motion.a>
            <motion.a whileHover={{ y: -5, color: 'var(--primary)' }} href="mailto:bscs22f37@namal.edu.pk" style={{ color: 'var(--text-secondary)' }}><Mail size={24} /></motion.a>
            <motion.a whileHover={{ y: -5, color: 'var(--primary)' }} href="tel:+923327066437" style={{ color: 'var(--text-secondary)' }}><Phone size={24} /></motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex-center"
          style={{ position: 'relative' }}
        >
          <div style={{ 
            width: 'clamp(280px, 40vw, 450px)', 
            height: 'clamp(280px, 40vw, 450px)', 
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            background: 'linear-gradient(45deg, var(--primary), var(--secondary))',
            position: 'absolute',
            zIndex: -1,
            filter: 'blur(50px)',
            opacity: 0.4,
            animation: 'morph 8s ease-in-out infinite'
          }}></div>
          <img 
            src={profileImg} 
            alt="Ahmad Mustafa" 
            style={{ 
              width: '100%', 
              maxWidth: '450px', 
              borderRadius: '20px',
              border: '2px solid var(--glass-border)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
            }} 
          />
        </motion.div>
      </div>
      
      <style>{`
        @keyframes morph {
          0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          50% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
          100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
        }
      `}</style>
    </section>
  );
}
