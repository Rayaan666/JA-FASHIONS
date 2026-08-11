import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './Founder.css';

const Founder = () => {
  return (
    <section className="founder-premium-section" id="founder">
      <div className="container founder-premium-grid">
        
        {/* Left Column - Content */}
        <div className="founder-content-col">
          <motion.div
            className="founder-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow-line"></span>
            Meet The Visionary
          </motion.div>

          <motion.h2 
            className="founder-h2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Angel <span className="heading-italic">Joe</span>
          </motion.h2>
          
          <motion.div 
            className="founder-quote-box"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Quote className="quote-icon" size={32} />
            <p className="founder-quote-text">
              "True luxury is not just about what you wear, it's about the confidence and elegance it awakens within you. I founded JA Fashions to bring that timeless sophistication to every individual."
            </p>
          </motion.div>

          <motion.p 
            className="founder-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            With an uncompromising eye for detail and a profound love for haute couture, Angel Joe established JA Fashions to bridge the gap between global fashion trends and the sophisticated sensibilities of the Middle East. Under her visionary leadership, the brand has become synonymous with exclusivity, quality, and timeless elegance.
          </motion.p>
          
          <motion.div
            className="founder-signature-wrap"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <span className="founder-signature">Angel Joe</span>
            <span className="founder-title">Founder & Creative Director</span>
          </motion.div>
        </div>

        {/* Right Column - Image */}
        <div className="founder-visual-col">
          <motion.div 
            className="founder-img-main-wrapper"
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src="/WhatsApp_Image_2026-08-11_at_7.37.43_AM.jpeg" alt="Angel Joe - Founder of JA Fashions" className="founder-main-img" />
            
            <motion.div 
              className="founder-floating-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <div className="floating-card-inner">
                <span className="floating-card-title">Visionary</span>
                <span className="floating-card-subtitle">Leadership</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Founder;
