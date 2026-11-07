import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import Founder from './components/Founder';
import Footer from './components/Footer';
import FloatingVoucher from './components/FloatingVoucher';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page-root">
      {/* ── Top Header / Navigation ── */}
      <header className="about-topbar">
        <div className="container about-topbar-inner">
          <a href="/" className="about-back-link" aria-label="Return to JA Fashions home boutique">
            <ArrowLeft size={16} strokeWidth={1.5} aria-hidden="true" />
            <span>Back to Boutique</span>
          </a>

          <div className="about-brand-center">
            <a href="/" aria-label="JA Fashions UAE Home">
              <img
                src="/logo-cropped.png"
                alt="JA Fashions UAE Luxury Boutique"
                className="about-topbar-logo"
                width="160"
                height="86"
                decoding="async"
              />
            </a>
          </div>

          <div className="about-topbar-actions">
            <a href="/#hot-offers" className="topbar-link desktop-only">
              Hot Offers
            </a>
            <a href="/#promotions" className="topbar-link desktop-only">
              Vouchers
            </a>
            <a
              href="https://wa.link/o1min2"
              target="_blank"
              rel="noopener noreferrer"
              className="topbar-whatsapp-btn"
              aria-label="Contact JA Fashions concierge on WhatsApp"
            >
              <MessageCircle size={15} strokeWidth={1.5} />
              <span>Concierge</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* ── Editorial Hero Banner ── */}
        <section className="about-hero-section">
          <div className="container">
            <motion.div
              className="about-hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="about-hero-eyebrow">
                <span className="eyebrow-line"></span>
                <span>JA Fashions Dubai · Atelier &amp; Heritage</span>
                <span className="eyebrow-line"></span>
              </div>

              <h1 className="about-hero-h1">
                The Soul of <span className="heading-italic">Elegance.</span>
              </h1>

              <p className="about-hero-lead">
                Where timeless Middle Eastern grandeur meets the visionary craft of modern haute couture. Discover the inspiration, leadership, and artistry behind JA Fashions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Meet The Visionary (Founder Component) ── */}
        <div className="about-founder-wrapper">
          <Founder />
        </div>
      </main>

      {/* ── Footer ── */}
      <Footer />

      {/* ── Floating Voucher & WhatsApp Concierge ── */}
      <FloatingVoucher />

      <a
        href="https://wa.link/o1min2"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat with JA Fashions concierge on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="whatsapp-float-tooltip">Chat with us</span>
      </a>
    </div>
  );
};

export default AboutPage;
