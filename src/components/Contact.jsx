import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: '3rem', marginBottom: '1rem' }}
        >
          Get In <span className="gradient-text">Touch</span>
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
        >
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Let's talk!</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
            I am currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div className="flex-center glass-card" style={{ width: '50px', height: '50px', color: 'var(--primary)' }}><Mail /></div>
              <div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Email</p>
                <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>bscs22f37@namal.edu.pk</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div className="flex-center glass-card" style={{ width: '50px', height: '50px', color: 'var(--primary)' }}><Phone /></div>
              <div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Phone</p>
                <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>+92 332 7066437</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div className="flex-center glass-card" style={{ width: '50px', height: '50px', color: 'var(--primary)' }}><MapPin /></div>
              <div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Location</p>
                <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Mianwali, Pakistan</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card"
          style={{ padding: '2.5rem' }}
        >
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <input type="text" placeholder="Name" style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', padding: '1rem', borderRadius: '10px', color: 'white', outline: 'none' }} />
              <input type="email" placeholder="Email" style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', padding: '1rem', borderRadius: '10px', color: 'white', outline: 'none' }} />
            </div>
            <input type="text" placeholder="Subject" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', padding: '1rem', borderRadius: '10px', color: 'white', outline: 'none' }} />
            <textarea placeholder="Message" rows="5" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', padding: '1rem', borderRadius: '10px', color: 'white', outline: 'none', resize: 'none' }}></textarea>
            <motion.button
              whileHover={{ scale: 1.02, background: 'var(--primary)', color: 'black' }}
              whileTap={{ scale: 0.98 }}
              style={{ padding: '1rem', background: 'transparent', border: '1px solid var(--primary)', color: 'var(--primary)', borderRadius: '10px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', transition: '0.3s' }}
            >
              <Send size={20} /> Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
