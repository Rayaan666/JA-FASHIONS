import React from 'react';
import { ArrowLeft, Instagram, MessageCircle } from 'lucide-react';
import Policies from './components/Policies';
import './TermsPage.css';

const TermsPage = () => {
  return (
    <div className="terms-page">
      <header className="terms-topbar">
        <div className="container terms-topbar-inner">
          <a href="/" className="terms-brand" aria-label="JA Fashions UAE home">
            <img 
              src="/logo.png" 
              alt="JA Fashions UAE" 
              width="140"
              height="42"
              decoding="async"
            />
          </a>

          <a href="/" className="terms-back-link">
            <ArrowLeft size={16} strokeWidth={1.5} aria-hidden="true" />
            <span>Back to boutique</span>
          </a>
        </div>
      </header>

      <main>
        <Policies />
      </main>

      <footer className="terms-footer">
        <div className="container terms-footer-inner">
          <div>
            <img 
              src="/logo.png" 
              alt="JA Fashions UAE" 
              className="terms-footer-logo" 
              width="160"
              height="48"
              loading="lazy"
              decoding="async"
            />
            <p>Questions about an order or one of our policies? We’re here to help.</p>
          </div>

          <div className="terms-footer-actions">
            <a
              href="https://wa.link/o1min2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={17} strokeWidth={1.5} aria-hidden="true" />
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/jafashionsuae/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={17} strokeWidth={1.5} aria-hidden="true" />
              Instagram
            </a>
          </div>
        </div>

        <div className="container terms-footer-bottom">
          <p>&copy; {new Date().getFullYear()} JA Fashions UAE.</p>
          <a href="mailto:jafashions2014@gmail.com">jafashions2014@gmail.com</a>
        </div>
      </footer>
    </div>
  );
};

export default TermsPage;
