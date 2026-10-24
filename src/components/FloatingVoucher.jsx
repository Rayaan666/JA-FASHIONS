import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, X, Copy, Check, MessageCircle } from 'lucide-react';
import './FloatingVoucher.css';

const VOUCHER_CODE = 'JAFAS20';
const WHATSAPP_NUMBER = '971528394207';
const WHATSAPP_MESSAGE = "Hi JA Fashions! I'd like to use my JAFAS20 20% discount voucher on my order above AED 100.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const FloatingVoucher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const tabButtonRef = useRef(null);
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);

  const handleCopy = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(VOUCHER_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
    tabButtonRef.current?.focus();
  };

  // Keyboard navigation: Escape to close and Tab focus trap
  useEffect(() => {
    if (!isOpen) return;

    // Focus close button on open
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleClose();
        return;
      }

      if (e.key === 'Tab' && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="floating-voucher-wrapper">
      {/* ── Floating Voucher Modal Card ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dialogRef}
            className="floating-voucher-card"
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="floating-voucher-title"
          >
            {/* Header / Close button */}
            <div className="card-top-bar">
              <span id="floating-voucher-title" className="card-eyebrow">EXCLUSIVE OFFER</span>
              <button
                ref={closeButtonRef}
                type="button"
                className="card-close-btn"
                onClick={handleClose}
                aria-label="Close discount voucher popup"
              >
                <X size={16} />
              </button>
            </div>

            {/* Hot Pink Accent Strip & 20% OFF Highlight */}
            <div className="card-highlight-area">
              <span className="card-discount-val">20% OFF</span>
              <span className="card-discount-sub">STOREWIDE VOUCHER</span>
            </div>

            {/* Card Content & Code */}
            <div className="card-body">
              <p className="card-code-lead">Use code</p>
              
              <div className="card-code-badge">
                <span className="card-code-text">{VOUCHER_CODE}</span>
              </div>

              <div className="card-terms-list">
                <p className="card-term">On orders above AED 100</p>
                <p className="card-term-muted">One-time use per customer</p>
              </div>

              {/* Action Buttons */}
              <div className="card-actions">
                <button
                  type="button"
                  className={`card-btn-copy ${copied ? 'is-copied' : ''}`}
                  onClick={handleCopy}
                >
                  {copied ? (
                    <>
                      <Check size={14} />
                      <span>COPIED ✓</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>COPY CODE</span>
                    </>
                  )}
                </button>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-btn-whatsapp"
                >
                  <MessageCircle size={15} />
                  <span>CLAIM ON WHATSAPP</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating 20% OFF Tab Button ── */}
      <button
        ref={tabButtonRef}
        type="button"
        className={`floating-voucher-tab ${isOpen ? 'active-tab' : ''}`}
        onClick={toggleOpen}
        aria-label="Open 20% OFF discount voucher"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <span className="tab-icon-wrap">
          <Gift size={18} strokeWidth={2} />
        </span>
        <span className="tab-label">20% OFF</span>
      </button>
    </div>
  );
};

export default FloatingVoucher;
