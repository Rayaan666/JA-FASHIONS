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
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <motion.header
      className="navbar-wrapper"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav 
        className={`navbar-editorial ${scrolled ? 'scrolled' : ''}`}
        aria-label="Main Navigation"
      >
        <div className="container nav-content-editorial">
          <div className="nav-left">
            <button 
              className="menu-toggle" 
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
            
            <ul className="nav-links desktop-only">
              <li><a href="#about" className="link-hover">About</a></li>
              <li><a href="#collections" className="link-hover">Collections</a></li>
            </ul>
          </div>

          <div className="nav-logo">
            <a href="/" aria-label="JA Fashions UAE Home">
              <img 
                src="/logo-cropped.png" 
                alt="JA Fashions UAE Luxury Boutique" 
                className="logo-img" 
                width="186"
                height="100"
                decoding="async"
              />
            </a>
          </div>

          <div className="nav-right">
            <ul className="nav-links desktop-only">
              <li><a href="#hot-offers" className="link-hover">Hot Offers</a></li>
              <li><a href="#promotions" className="link-hover">Vouchers</a></li>
              <li><a href="#why-shop" className="link-hover">Why Choose</a></li>
            </ul>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              id="mobile-navigation"
              className="mobile-menu-editorial"
              role="region"
              aria-label="Mobile Navigation"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <ul className="mobile-links-editorial">
                <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                <li><a href="#collections" onClick={() => setMenuOpen(false)}>Collections</a></li>
                <li><a href="#hot-offers" onClick={() => setMenuOpen(false)}>Hot Offers</a></li>
                <li><a href="#promotions" onClick={() => setMenuOpen(false)}>Promotional Voucher</a></li>
                <li><a href="#why-shop" onClick={() => setMenuOpen(false)}>Why Choose</a></li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;
