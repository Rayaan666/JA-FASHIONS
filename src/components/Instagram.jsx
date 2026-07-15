import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram as InstaIcon } from 'lucide-react';
import './Instagram.css';

const InstagramFeed = () => {
  // Behold Widget ID - users can easily swap this placeholder ID
  const BEHOLD_WIDGET_ID = "placeholder-behold-id";
  const hasBeholdWidget = BEHOLD_WIDGET_ID !== "placeholder-behold-id";

  useEffect(() => {
    if (!hasBeholdWidget) return undefined;

    // Dynamically load Behold script
    const script = document.createElement('script');
    script.src = "https://w.behold.so/widget.js";
    script.type = "module";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [hasBeholdWidget]);

  return (
    <section className="instagram-section" id="instagram">
      <div className="container">
        
        <div className="instagram-header">
          <motion.div 
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow-line"></span>
            Social Gallery
            <span className="eyebrow-line"></span>
          </motion.div>
          
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Shop Our <span className="heading-italic">Instagram.</span>
          </motion.h2>
          
          <motion.p
            className="instagram-subtitle-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Tag <a href="https://www.instagram.com/jafashionsuae/" target="_blank" rel="noreferrer" className="insta-handle">@jafashionsuae</a> to be featured in our curated style gallery.
          </motion.p>
        </div>

        {/* Behold.so Widget Container */}
        {hasBeholdWidget ? (
          <div className="behold-container">
            <figure data-behold-id={BEHOLD_WIDGET_ID}></figure>
          </div>
        ) : (
          <div className="instagram-unavailable" role="status">
            Instagram feed unavailable until Behold code is added.
          </div>
        )}

        <motion.div 
          className="instagram-footer-action"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a 
            href="https://www.instagram.com/jafashionsuae/" 
            target="_blank" 
            rel="noreferrer" 
            className="btn-outline brand-hover"
          >
            <InstaIcon size={18} />
            <span>Visit @jafashions</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default InstagramFeed;
