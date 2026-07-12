import React from 'react';
import { motion } from 'framer-motion';
import './Trending.css';
import trend1 from '../assets/party_wear_gown_1783242718764.png';
import trend2 from '../assets/kurtis_collection_1783242709565.png';

const Trending = () => {
  return (
    <section className="trending-editorial section-padding" id="trending">
      <div className="container">
        <div className="trending-header">
          <span className="section-label">Editorial Focus</span>
          <h2 className="trending-title">The <span className="heading-italic">Avant-Garde</span> Edit</h2>
        </div>

        <div className="trending-list">
          
          <motion.div 
            className="trending-row"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
          >
            <div className="row-num">01</div>
            <div className="row-img-wrap">
              <img src={trend1} alt="Look 1" />
            </div>
            <div className="row-content">
              <h3>Midnight <br/> Resonance</h3>
              <p>Deep oceanic hues paired with architectural silhouettes. A study in evening drama.</p>
              <a href="#" className="link-hover">View Look</a>
            </div>
          </motion.div>

          <div className="row-divider"></div>

          <motion.div 
            className="trending-row row-reverse"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
          >
            <div className="row-num">02</div>
            <div className="row-img-wrap">
              <img src={trend2} alt="Look 2" />
            </div>
            <div className="row-content">
              <h3>Blush <br/> Minimalism</h3>
              <p>Redefining chikankari with stark minimalism. The intersection of craft and contemporary purity.</p>
              <a href="#" className="link-hover">View Look</a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Trending;
