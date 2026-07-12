import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Gem, Sparkles, MapPin } from 'lucide-react';
import './About.css';

const About = () => {
  const features = [
    { icon: <Gem size={20} strokeWidth={1.5} />, title: 'Uncompromising Quality', desc: 'Crafted with premium materials and flawless attention to detail.' },
    { icon: <ShieldCheck size={20} strokeWidth={1.5} />, title: 'Built on Trust', desc: 'Authentic designer pieces guaranteed, with a legacy of excellence.' },
    { icon: <Sparkles size={20} strokeWidth={1.5} />, title: 'Timeless Elegance', desc: 'Curated collections that transcend seasonal trends.' },
    { icon: <MapPin size={20} strokeWidth={1.5} />, title: 'UAE-Based Service', desc: 'Rooted in Dubai, delivering bespoke luxury experiences globally.' }
  ];

  return (
    <section className="about-premium-section" id="about">
      <div className="container about-premium-grid">
        
        {/* Left Column - Image Composition */}
        <div className="about-visual-col">
          <motion.div 
            className="about-img-main-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about-img-glow"></div>
            <img src="/story.png" alt="JA Fashions Our Story" className="about-main-img" />
            
            <motion.div 
              className="about-experience-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <span className="exp-number">10+</span>
              <span className="exp-text">Years of<br/>Excellence</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column - Text & Features */}
        <div className="about-content-col">
          <motion.div
            className="about-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow-line"></span>
            Our Story
          </motion.div>

          <motion.h2 
            className="about-h2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Redefining <span className="heading-italic">Fashion</span> <br/> in the Middle East.
          </motion.h2>
          
          <motion.p 
            className="about-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Born in the heart of the UAE, JA Fashions is a sanctuary for the modern connoisseur. 
            We meticulously curate designer collections that bridge the gap between contemporary haute couture 
            and timeless elegance, ensuring every piece you own is a testament to unparalleled quality and trust.
          </motion.p>

          <div className="about-features-grid">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="about-feature-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 + (index * 0.1) }}
              >
                <div className="feature-icon-wrap">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-desc">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="about-cta-wrapper"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
          >
            <a href="#collections" className="btn-outline brand-hover">
              Explore Our Curations
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
