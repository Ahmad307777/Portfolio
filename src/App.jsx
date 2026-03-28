import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="portfolio-root">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer style={{ 
        padding: '4rem 0', 
        textAlign: 'center', 
        borderTop: '1px solid var(--glass-border)',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem'
      }}>
        <div className="container">
          <p>© {new Date().getFullYear()} Ahmad Mustafa. Built with React & Framer Motion.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
