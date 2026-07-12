import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Aisha Al Suwaidi',
    role: 'Emirati Client',
    text: 'A profound shift in how I perceive ethnic luxury. The silhouette, the fall of the fabric, the meticulous detailing—it is nothing short of art.'
  },
  {
    id: 2,
    name: 'Sarah Khan',
    role: 'Indian-Pakistani Client',
    text: 'Minimal, breathtaking, and unapologetically premium. JA Fashions has curated a collection that speaks volumes in its subtlety.'
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Indian Client',
    text: 'The quality of the embroidery and richness of the fabric exceeded my expectations. A perfect mix of contemporary design and traditional roots.'
  },
  {
    id: 4,
    name: 'Fatma Al-Mheiri',
    role: 'Emirati Client',
    text: 'Finding premium luxury options with inclusive plus-size availability that doesn’t compromise on tailoring is rare. JA Fashions delivers it flawlessly.'
  },
  {
    id: 5,
    name: 'Elena Rostova',
    role: 'Russian Client',
    text: 'Stunning editorial looks. I wore their signature designer set to an opening event in Downtown Dubai and received endless compliments.'
  },
  {
    id: 6,
    name: 'Chloe Bennett',
    role: 'British Client',
    text: 'Superb customer service. The custom styling support and quick express delivery across the UAE made my shopping experience entirely effortless.'
  },
  {
    id: 7,
    name: 'Layla Haddad',
    role: 'Lebanese Client',
    text: 'An absolute masterpiece of design. The collection captures modern elegance perfectly. The drape of the dresses is incredibly flattering.'
  },
  {
    id: 8,
    name: 'Reem Al-Saud',
    role: 'Saudi Client',
    text: 'Maison JA Fashions represents the pinnacle of modern Khaleeji elegance. The quality is exceptional and the designs are truly timeless.'
  },
  {
    id: 9,
    name: 'Ananya Patel',
    role: 'Indian Client',
    text: 'Incredible craftsmanship! The attention to detail in the stitching and design is highly commendable. It has quickly become my go-to luxury boutique.'
  },
  {
    id: 10,
    name: 'Sophie Dubois',
    role: 'French Client',
    text: 'Minimalist luxury at its finest. The clean silhouettes and high-grade natural fabrics feel incredibly premium to wear.'
  },
  {
    id: 11,
    name: 'Miriam Osei',
    role: 'British-Ghanaian Client',
    text: 'Beautiful vibrant designs and superb inclusivity. The outfit fits perfectly and feels like it was custom couture tailored just for me.'
  },
  {
    id: 12,
    name: 'Amara Okafor',
    role: 'Nigerian Client',
    text: 'Absolutely gorgeous garments. The fabric selection is perfect for the warm climate, and the online ordering process was seamless.'
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="test-editorial section-padding" id="testimonials">
      <div className="container">
        
        <div className="testimonials-header">
          <motion.div 
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow-line"></span>
            Client Stories
            <span className="eyebrow-line"></span>
          </motion.div>
          
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            What Our Clients <span className="heading-italic">Say.</span>
          </motion.h2>
        </div>
        
        <div className="test-wrapper">
          <div className="quote-icon-wrap" aria-hidden="true">
            <Quote size={40} className="quote-icon" />
          </div>

          <div className="test-carousel-container">
            <AnimatePresence mode="wait">
              <motion.div 
                key={current}
                className="test-content"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="test-quote">
                  “{testimonials[current].text}”
                </h3>
                <div className="test-author">
                  <span className="author-line"></span>
                  <div className="author-info">
                    <h4>{testimonials[current].name}</h4>
                    <p>{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="test-controls">
            <button className="test-nav-btn prev-btn" onClick={prev} aria-label="Previous testimonial">
              <ArrowLeft size={20} strokeWidth={1.5} />
            </button>
            <span className="test-counter">
              {current + 1} / {testimonials.length}
            </span>
            <button className="test-nav-btn next-btn" onClick={next} aria-label="Next testimonial">
              <ArrowRight size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
