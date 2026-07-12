import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Instagram, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        
        <div className="contact-header">
          <motion.div 
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow-line"></span>
            Get In Touch
            <span className="eyebrow-line"></span>
          </motion.div>
          
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Contact & <span className="heading-italic">Order.</span>
          </motion.h2>
        </div>

        <div className="contact-grid">
          
          {/* Left Column - Contact Info & Socials */}
          <motion.div 
            className="contact-info-col"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="contact-subtitle">Visit Our Boutique</h3>
            <p className="contact-desc">
              Experience our curated luxury collections in person or reach out to our dedicated concierge for personalized styling and orders.
            </p>

            <ul className="info-list">
              <li>
                <div className="info-icon"><MapPin size={20} strokeWidth={1.5} /></div>
                <div>
                  <h4>Location</h4>
                  <p>Fashion Avenue, Downtown Dubai<br/>United Arab Emirates</p>
                </div>
              </li>
              <li>
                <div className="info-icon"><Phone size={20} strokeWidth={1.5} /></div>
                <div>
                  <h4>Phone</h4>
                  <p>+971528394207</p>
                </div>
              </li>
              <li>
                <div className="info-icon"><Mail size={20} strokeWidth={1.5} /></div>
                <div>
                  <h4>Email</h4>
                  <p>jafashions2014@gmail.com</p>
                </div>
              </li>
            </ul>

            <div className="contact-actions">
              <a href="https://wa.me/971528394207" target="_blank" rel="noreferrer" className="btn-whatsapp">
                <MessageCircle size={20} />
                WhatsApp Order
              </a>
              <a href="https://instagram.com/jafashions" target="_blank" rel="noreferrer" className="btn-instagram">
                <Instagram size={20} />
                Follow Us
              </a>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            className="contact-form-col"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="form-card">
              <h3 className="contact-subtitle">Quick Enquiry</h3>
              <form className="enquiry-form" onSubmit={(e) => e.preventDefault()}>
                
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="Enter your name" required />
                </div>
                
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="Enter your email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" placeholder="+971 -- --- ----" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message or Order Details</label>
                  <textarea id="message" rows="4" placeholder="How can we help you?" required></textarea>
                </div>

                <button type="submit" className="btn-outline brand-hover btn-submit">
                  <span>Send Enquiry</span>
                  <Send size={16} strokeWidth={1.5} />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
