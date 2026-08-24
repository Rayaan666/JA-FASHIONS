import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, MessageCircle } from 'lucide-react';
import './HotOffers.css';

const HotOffers = () => {
  const [activeTab, setActiveTab] = useState('Chikankari Cotton Short Tops');

  const tabs = [
    'Chikankari Cotton Short Tops',
    'Heavy Embroidery 3 Piece Set',
    '3piece/2 piece set',
    'Short Tops',
    'Fancy Gown',
    'Offer Kurtis',
    'Embroidery Alyacut Kurtis',
    'Cord Set',
    'Chickankari Cotton Rayon'
  ];

  const driveLinks = {
    'Chikankari Cotton Short Tops': 'https://drive.google.com/drive/folders/1VjTkh2cPiQiv1aLzDhk1C5xRI_dfrrGb',
    'Heavy Embroidery 3 Piece Set': 'https://drive.google.com/drive/folders/1VS-gOJJP4owgeiOuKlaR3UWr2sWnOLZl',
    '3piece/2 piece set': 'https://drive.google.com/drive/folders/1XX4t6OzEUB_yEaVvscpCB40VEAcLfvNf',
    'Short Tops': 'https://drive.google.com/file/d/1BQ8a-Ed9d3nUUYash7V386HPvGrI2mAB/view',
    'Fancy Gown': 'https://drive.google.com/drive/folders/1vB06g95tGxB3-9l8pJXDucpZLxi567Rp',
    'Offer Kurtis': 'https://drive.google.com/drive/folders/11v9z-Fjyj2FBHFDuwp9m80tjIBmFGosL',
    'Embroidery Alyacut Kurtis': 'https://drive.google.com/drive/folders/1-7ku4EOXYpO3sI4j2IrSIEf85eY2-h1m',
    'Cord Set': 'https://drive.google.com/drive/folders/1XixA5ykw61oUGvT6eBj98xcqwRTRv4iA',
    'Chickankari Cotton Rayon': 'https://drive.google.com/drive/folders/1418vW31r3cYlpWh_36ZhsfR2ORefM7dJ'
  };

  const tabData = {
    'Chikankari Cotton Short Tops': [
      { id: 101, src: '/hot offers/1.jpg', title: 'Cotton Short Top 1' },
      { id: 102, src: '/hot offers/2.jpg', title: 'Cotton Short Top 2' },
      { id: 103, src: '/hot offers/3.jpg', title: 'Cotton Short Top 3' },
    ],
    'Heavy Embroidery 3 Piece Set': [
      { id: 201, src: '/hot offers1/White_Gray_and_Black_Simple_Product_Catalog_8.png', title: 'Heavy Embroidery 3 Piece Set' },
    ],
    '3piece/2 piece set': [
      { id: 1001, src: 'https://res.cloudinary.com/r1f4rica/image/upload/White_Gray_and_Black_Simple_Product_Catalog_10', title: '3piece/2 piece set 1' },
      { id: 1002, src: 'https://res.cloudinary.com/r1f4rica/image/upload/White_Gray_and_Black_Simple_Product_Catalog_11', title: '3piece/2 piece set 2' },
      { id: 1003, src: 'https://res.cloudinary.com/r1f4rica/image/upload/White_Gray_and_Black_Simple_Product_Catalog_13', title: '3piece/2 piece set 3' },
      { id: 1004, src: 'https://res.cloudinary.com/r1f4rica/image/upload/White_Gray_and_Black_Simple_Product_Catalog_15', title: '3piece/2 piece set 4' },
      { id: 1005, src: 'https://res.cloudinary.com/r1f4rica/image/upload/White_Gray_and_Black_Simple_Product_Catalog_16', title: '3piece/2 piece set 5' },
      { id: 1006, src: 'https://res.cloudinary.com/r1f4rica/image/upload/White_Gray_and_Black_Simple_Product_Catalog_18', title: '3piece/2 piece set 6' },
    ],
    'Short Tops': [
      { id: 301, src: 'https://res.cloudinary.com/r1f4rica/image/upload/White_Gray_and_Black_Simple_Product_Catalog_19', title: 'Short Tops' },
    ],
    'Fancy Gown': [
      { id: 401, src: 'https://res.cloudinary.com/r1f4rica/image/upload/White_Gray_and_Black_Simple_Product_Catalog_20', title: 'Fancy Gown 1' },
      { id: 402, src: 'https://res.cloudinary.com/r1f4rica/image/upload/White_Gray_and_Black_Simple_Product_Catalog_21', title: 'Fancy Gown 2' },
      { id: 403, src: 'https://res.cloudinary.com/r1f4rica/image/upload/White_Gray_and_Black_Simple_Product_Catalog_24', title: 'Fancy Gown 3' },
    ],
    'Offer Kurtis': [
      { id: 501, src: '/hot offers4/1.jpg', title: 'Offer Kurti 1' },
      { id: 502, src: '/hot offers4/2.jpg', title: 'Offer Kurti 2' },
      { id: 503, src: '/hot offers4/3.jpg', title: 'Offer Kurti 3' },
    ],
    'Embroidery Alyacut Kurtis': [
      { id: 701, src: '/hot offers6/1.jpg', title: 'Embroidery Alyacut Kurti 1' },
      { id: 702, src: '/hot offers6/2.jpg', title: 'Embroidery Alyacut Kurti 2' },
      { id: 703, src: '/hot offers6/3.jpg', title: 'Embroidery Alyacut Kurti 3' },
    ],
    'Cord Set': [
      { id: 801, src: '/hot offers7/1.jpg', title: 'Cord Set 1' },
      { id: 802, src: '/hot offers7/2.jpg', title: 'Cord Set 2' },
      { id: 803, src: '/hot offers7/3.jpg', title: 'Cord Set 3' },
    ],
    'Chickankari Cotton Rayon': [
      { id: 901, src: '/hot offers8/1.jpg', title: 'Chickankari Cotton Rayon 1' },
      { id: 902, src: '/hot offers8/2.jpg', title: 'Chickankari Cotton Rayon 2' },
      { id: 903, src: '/hot offers8/3.jpg', title: 'Chickankari Cotton Rayon 3' },
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

        <motion.div 
          layout 
          className={`hot-offers-gallery ${tabData[activeTab].length === 1 ? 'hot-offers-gallery--single' : ''}`}
        >
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
                <div className={`offer-img-wrapper ${item.src.includes('Catalog') ? 'offer-img-wrapper--catalog' : ''}`}>
                  <img
                    src={item.src}
                    alt={item.title}
                    className={`offer-img ${item.src.includes('Catalog') ? 'offer-img--catalog' : ''}`}
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
          {activeTab !== 'Heavy Embroidery 3 Piece Set' && (
            <a href={driveLinks[activeTab]} target="_blank" rel="noopener noreferrer" className="btn-outline brand-hover drive-btn">
              <ExternalLink size={18} strokeWidth={1.5} />
              <span>View Full Catalog</span>
            </a>
          )}
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
