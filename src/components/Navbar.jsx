import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`navbar-editorial ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container nav-content-editorial">
        <div className="nav-left">
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
          
          <ul className="nav-links desktop-only">
            <li><a href="#about" className="link-hover">About</a></li>
            <li><a href="#collections" className="link-hover">Collections</a></li>
          </ul>
        </div>

        <div className="nav-logo">
          <a href="#">
            <img src="/logo.png" alt="JA Fashions" className="logo-img" />
          </a>
        </div>

        <div className="nav-right">
          <ul className="nav-links desktop-only">
            <li><a href="#why-shop" className="link-hover">Why Choose</a></li>
            <li><a href="#contact" className="link-hover">Contact</a></li>
          </ul>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="mobile-menu-editorial"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <ul className="mobile-links-editorial">
              <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a href="#collections" onClick={() => setMenuOpen(false)}>Collections</a></li>
              <li><a href="#why-shop" onClick={() => setMenuOpen(false)}>Why Choose</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
