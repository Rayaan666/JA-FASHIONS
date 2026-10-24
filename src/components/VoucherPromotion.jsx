import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, MessageCircle, Gift } from 'lucide-react';
import './VoucherPromotion.css';

const VOUCHER_CODE = 'JAFAS20';
const WHATSAPP_NUMBER = '971528394207';
const WHATSAPP_MESSAGE = "Hi JA Fashions! I'd like to use my JAFAS20 20% discount voucher on my order above AED 100.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const VoucherPromotion = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(VOUCHER_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="voucher-promo-section" id="promotions">
      <div className="container">
        <div className="voucher-promo-grid">
          
          {/* ── Left Column: Digitally Recreated JA Fashions Voucher ── */}
          <motion.div 
            className="voucher-visual-col"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="voucher-card-container">
              {/* Layered Card Silhouette Behind */}
              <div className="voucher-card-backdrop" aria-hidden="true" />

              {/* Main Digital Voucher */}
              <div className="digital-voucher-card">
                {/* Upper Section: Hot Pink */}
                <div className="voucher-upper">
                  <div className="voucher-header-bar">
                    <div className="voucher-brand-tag">
                      <span className="brand-logo-text">JA FASHIONS</span>
                      <span className="brand-badge-uae">UAE</span>
                    </div>
                    <div className="voucher-pill-tag">VIP PASS</div>
                  </div>

                  {/* Festive Gold Balloons Vector Motif (inspired by physical voucher) */}
                  <div className="voucher-balloons-motif" aria-hidden="true">
                    <svg width="84" height="92" viewBox="0 0 84 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="goldBalloon1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FFF2B2" />
                          <stop offset="35%" stopColor="#E2BA55" />
                          <stop offset="70%" stopColor="#B38728" />
                          <stop offset="100%" stopColor="#8C6212" />
                        </linearGradient>
                        <linearGradient id="goldBalloon2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FFF8D6" />
                          <stop offset="50%" stopColor="#D4AF37" />
                          <stop offset="100%" stopColor="#996515" />
                        </linearGradient>
                        <linearGradient id="goldRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FFE082" />
                          <stop offset="100%" stopColor="#C59B27" />
                        </linearGradient>
                      </defs>

                      {/* Left Balloon */}
                      <ellipse cx="26" cy="30" rx="16" ry="21" fill="url(#goldBalloon1)" opacity="0.9" />
                      <ellipse cx="21" cy="22" rx="4" ry="7" fill="#FFF9DF" opacity="0.6" />
                      <polygon points="26,51 23,55 29,55" fill="#B38728" />

                      {/* Right Balloon */}
                      <ellipse cx="56" cy="35" rx="15" ry="20" fill="url(#goldBalloon1)" opacity="0.85" />
                      <ellipse cx="51" cy="27" rx="3.5" ry="6" fill="#FFF9DF" opacity="0.6" />
                      <polygon points="56,55 53,59 59,59" fill="#B38728" />

                      {/* Center Main Balloon */}
                      <ellipse cx="42" cy="24" rx="19" ry="24" fill="url(#goldBalloon2)" />
                      <ellipse cx="36" cy="15" rx="5" ry="9" fill="#FFFFFF" opacity="0.65" />
                      <polygon points="42,48 39,52 45,52" fill="#C59B27" />

                      {/* Elegant Balloon Strings */}
                      <path d="M42 52 C42 62, 38 68, 41 86" stroke="url(#goldRibbon)" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.85" />
                      <path d="M26 55 C28 66, 36 74, 41 86" stroke="url(#goldRibbon)" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.75" />
                      <path d="M56 59 C54 70, 46 76, 41 86" stroke="url(#goldRibbon)" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.75" />
                      <circle cx="41" cy="86" r="2" fill="#E2BA55" />
                    </svg>
                  </div>

                  {/* Main Large Typography */}
                  <div className="voucher-discount-center">
                    <span className="voucher-discount-num">20%</span>
                    <span className="voucher-discount-word">DISCOUNT</span>
                  </div>
                </div>

                {/* Gold Diagonal Divider Detailing */}
                <div className="voucher-gold-band" aria-hidden="true">
                  <div className="gold-shimmer-stripe" />
                </div>

                {/* Lower Section: Black */}
                <div className="voucher-lower">
                  <div className="voucher-code-display">
                    <span className="code-eyebrow">OFFICIAL VOUCHER CODE</span>
                    <div className="code-pill">
                      <span className="code-text">{VOUCHER_CODE}</span>
                    </div>
                  </div>

                  <div className="voucher-meta-row">
                    <span className="meta-item">MIN. ORDER AED 100</span>
                    <span className="meta-dot">◆</span>
                    <span className="meta-item">ONE-TIME PER CUSTOMER</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right Column / Mobile Orderable Elements ── */}
          <div className="voucher-content-col">
            
            {/* 1. Heading & Eyebrow */}
            <motion.div 
              className="voucher-heading-wrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="voucher-eyebrow">
                <span className="eyebrow-line" />
                <span>EXCLUSIVE JA FASHIONS OFFER</span>
              </div>
              <h2 className="voucher-title">
                A Little Something <br />
                <span className="heading-italic">For You.</span>
              </h2>
            </motion.div>

            {/* 2. 20% OFF Highlight */}
            <motion.div 
              className="voucher-highlight-wrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="voucher-highlight-box">
                <Gift size={20} className="highlight-icon" />
                <span className="highlight-value">20% OFF</span>
                <span className="highlight-sub">STOREWIDE REWARD</span>
              </div>
            </motion.div>

            {/* 3. Description */}
            <motion.p 
              className="voucher-description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              Enjoy 20% off your order when you shop for AED 100 or more.
            </motion.p>

            {/* 4. Voucher Code Box with Copy Action */}
            <motion.div 
              className="voucher-action-box"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="voucher-code-chip">
                <div className="chip-info">
                  <span className="chip-label">COUPON CODE</span>
                  <span className="chip-code">{VOUCHER_CODE}</span>
                </div>
                <button 
                  type="button" 
                  className={`btn-voucher-copy ${copied ? 'is-copied' : ''}`}
                  onClick={handleCopy}
                  aria-label="Copy code JAFAS20"
                >
                  {copied ? (
                    <>
                      <Check size={16} />
                      <span>COPIED ✓</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span>COPY CODE</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            {/* 5. Primary CTA */}
            <motion.div 
              className="voucher-cta-wrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-voucher-whatsapp"
              >
                <MessageCircle size={20} />
                <span>CLAIM ON WHATSAPP</span>
              </a>
            </motion.div>

            {/* 6. Terms */}
            <motion.p 
              className="voucher-terms"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Valid on orders above AED 100 · One-time use per customer
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VoucherPromotion;
