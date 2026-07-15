import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, MessageCircle } from 'lucide-react';
import './HotOffers.css';

const HotOffers = () => {
  const [activeTab, setActiveTab] = useState('Chikankari Cotton Short Tops');

  const tabs = [
    'Chikankari Cotton Short Tops',
    'Heavy Embroidery 3 Piece Set',
    'Short Tops'
  ];

  const driveLinks = {
    'Chikankari Cotton Short Tops': 'https://drive.google.com/drive/folders/1VjTkh2cPiQiv1aLzDhk1C5xRI_dfrrGb',
    'Heavy Embroidery 3 Piece Set': 'https://drive.google.com/drive/folders/1VS-gOJJP4owgeiOuKlaR3UWr2sWnOLZl',
    'Short Tops': 'https://drive.google.com/file/d/1BQ8a-Ed9d3nUUYash7V386HPvGrI2mAB/view'
  };

  const tabData = {
    'Chikankari Cotton Short Tops': [
      { id: 101, src: '/hot offers/1.jpg', title: 'Cotton Short Top 1' },
      { id: 102, src: '/hot offers/2.jpg', title: 'Cotton Short Top 2' },
      { id: 103, src: '/hot offers/3.jpg', title: 'Cotton Short Top 3' },
    ],
    'Heavy Embroidery 3 Piece Set': [
      { id: 201, src: '/hot offers1/1.jpg', title: 'Embroidery Set 1' },
      { id: 202, src: '/hot offers1/2.jpg', title: 'Embroidery Set 2' },
      { id: 203, src: '/hot offers1/3.jpg', title: 'Embroidery Set 3' },
    ],
    'Short Tops': [
      { id: 301, src: '/hot offers2/1.jpeg', title: 'Embroidered Short Top 1' },
      { id: 302, src: '/hot offers2/2.jpeg', title: 'Embroidered Short Top 2' },
      { id: 303, src: '/hot offers2/3.jpeg', title: 'Embroidered Short Top 3' },
    ]
  };

  return (
    <section className="hot-offers-section section-padding" id="hot-offers">
      <div className="container">
        <motion.div 
          className="hot-offers-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="hot-offers-title">
            Hot <span className="heading-italic">Offers.</span>
          </h2>
          <p className="hot-offers-desc">
            Discover our handpicked portfolio of stunning offers. Limited time deals curated just for you.
          </p>
        </motion.div>

        <div className="hot-offers-tabs">
          {tabs.map(tab => (
            <button 
              key={tab} 
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div layout className="hot-offers-gallery">
          <AnimatePresence mode="popLayout">
            {tabData[activeTab].map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="offer-card"
              >
                <div className={`offer-img-wrapper ${activeTab === 'Short Tops' ? 'offer-img-wrapper--portrait' : ''}`}>
                  <img
                    src={item.src}
                    alt={item.title}
                    className={`offer-img ${activeTab === 'Short Tops' ? 'offer-img--portrait' : ''}`}
                  />
                  <div className="offer-overlay">
                    <h3 className="offer-title">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          className="hot-offers-actions"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a href={driveLinks[activeTab]} target="_blank" rel="noopener noreferrer" className="btn-outline brand-hover drive-btn">
            <ExternalLink size={18} strokeWidth={1.5} />
            <span>View Full Catalog</span>
          </a>
          <a href="https://wa.link/o1min2" target="_blank" rel="noopener noreferrer" className="btn-solid whatsapp-btn">
            <MessageCircle size={18} strokeWidth={1.5} />
            <span>Inquire on WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HotOffers;
