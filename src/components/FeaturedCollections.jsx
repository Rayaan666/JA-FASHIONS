import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, ArrowRight as ArrowRightIcon } from 'lucide-react';
import './FeaturedCollections.css';
import kurtisImg from '../assets/kurtis_collection_1783242709565.png';

const FeaturedCollections = () => {
  const collections = [
    {
      id: '01',
      title: 'The Breath of Spring',
      category: 'Cotton & Chikankari',
      img: '/collections/1.png',
      link: '#chikankari'
    },
    {
      id: '02',
      title: 'Heirloom Ornaments',
      category: 'Fine Jewellery',
      img: '/collections/2.png',
      link: '#jewellery'
    },
    {
      id: '03',
      title: 'Midnight Galas',
      category: 'Evening Wear',
      img: '/collections/3.png',
      link: '#evening-wear'
    }
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current]);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + collections.length) % collections.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % collections.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % collections.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [collections.length]);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <section className="collections-uniform-section" id="collections">
      <div className="container">

        {/* Two-column layout: text left, slideshow right */}
        <div className="collections-layout">

          {/* Left — text content */}
          <div className="collections-text-col">
            <motion.div
              className="eyebrow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="eyebrow-line"></span>
              The Archives
            </motion.div>

            <motion.h2
              className="collections-title-h2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Curated <span className="heading-italic">Collections.</span>
            </motion.h2>

            <motion.p
              className="collections-desc-p"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.35 }}
            >
              Our ateliers meticulously select fabrics that whisper luxury. Every piece is a testament to the art of subtle elegance and grand tradition.
            </motion.p>

            <motion.a
              href="#hot-offers"
              className="btn-outline brand-hover collections-view-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span>Explore All</span>
              <ArrowRightIcon size={16} strokeWidth={1.5} />
            </motion.a>
          </div>

          {/* Right — slideshow */}
          <motion.div
            className="collections-slideshow-col"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="collections-slideshow">
              <div className="slideshow-track">
                <AnimatePresence custom={direction} initial={false} mode="wait">
                  <motion.a
                    key={current}
                    href={collections[current].link}
                    className="slideshow-slide"
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <img
                      src={collections[current].img}
                      alt={collections[current].title}
                      className="slideshow-img"
                    />
                    <div className="slideshow-overlay"></div>
                  </motion.a>
                </AnimatePresence>

                <button className="slideshow-arrow slideshow-arrow--prev" onClick={prev} aria-label="Previous">
                  <ArrowLeft size={18} strokeWidth={1.5} />
                </button>
                <button className="slideshow-arrow slideshow-arrow--next" onClick={next} aria-label="Next">
                  <ArrowRight size={18} strokeWidth={1.5} />
                </button>
              </div>

              {/* Dots */}
              <div className="slideshow-dots">
                {collections.map((_, i) => (
                  <button
                    key={i}
                    className={`slideshow-dot${i === current ? ' active' : ''}`}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
