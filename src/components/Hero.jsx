import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, ChevronDown, Sparkles } from 'lucide-react';
import './Hero.css';
import heroImg from '../assets/luxury_model_hero_1783242699783.png';

/* ─── Animated Counter ─────────────────────────────────────────── */
const Counter = ({ target, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const start = performance.now();
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
};

/* ─── Floating Particle ─────────────────────────────────────────── */
const Particle = ({ style }) => (
  <motion.div
    className="hero-particle"
    style={style}
    animate={{
      y: [0, -30, 0],
      opacity: [0, 0.6, 0],
      scale: [0, 1, 0],
    }}
    transition={{
      duration: style.duration,
      delay: style.delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

/* ─── Marquee words ─────────────────────────────────────────────── */
const marqueeWords = ['Luxury Fashion', 'Designer Wear', 'Dubai Boutique', 'Party Wear', 'Kurtis', 'Plus Size'];

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.55, 0.9]);

  const particles = Array.from({ length: 12 }, (_, i) => ({
    left: `${8 + i * 7.5}%`,
    top: `${20 + (i % 4) * 18}%`,
    width: `${3 + (i % 3) * 2}px`,
    height: `${3 + (i % 3) * 2}px`,
    duration: 3 + (i % 3),
    delay: i * 0.4,
  }));

  const stats = [
    { value: 500, suffix: '+', label: 'Curated Styles' },
    { value: 12, suffix: 'K+', label: 'Happy Clients' },
    { value: 12, suffix: '+', label: 'Years in Fashion', prefix: '' },
  ];

  return (
    <>
      {/* ── JSON-LD Structured Data for SEO ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ClothingStore",
            "@id": "https://www.jafashions.com/#clothing-store",
            "name": "JA Fashions",
            "description": "JA Fashions is a Dubai luxury fashion boutique for women, offering designer wear, party wear gowns, kurtis, plus-size styles, jewellery, and curated occasion outfits across the UAE.",
            "url": "https://www.jafashions.com",
            "image": "https://www.jafashions.com/logo.png",
            "logo": "https://www.jafashions.com/logo.png",
            "telephone": "+971528394207",
            "email": "jafashions2014@gmail.com",
            "priceRange": "$$$",
            "areaServed": {
              "@type": "Country",
              "name": "United Arab Emirates"
            },
            "sameAs": [
              "https://www.instagram.com/jafashions",
              "https://www.facebook.com/jafashions"
            ],
            "makesOffer": {
              "@type": "OfferCatalog",
              "name": "JA Fashions Women's Designer Collections",
              "itemListElement": [
                {
                  "@type": "OfferCatalog",
                  "name": "Luxury Designer Wear",
                  "description": "Premium women's designer outfits for parties, celebrations, and special occasions"
                },
                {
                  "@type": "OfferCatalog",
                  "name": "Kurtis and Ethnic Fashion",
                  "description": "Elegant kurtis and modern ethnic styles curated for women in the UAE"
                },
                {
                  "@type": "OfferCatalog",
                  "name": "Plus-Size Fashion",
                  "description": "Inclusive plus-size fashion options with refined tailoring and premium finishes"
                }
              ]
            }
          })
        }}
      />

      <section
        ref={sectionRef}
        className="hero-section"
        aria-labelledby="home-hero-title"
        id="hero"
      >
        {/* ── Parallax Background Image ── */}
        <motion.div className="hero-bg-image" style={{ y: imgY }}>
          <img
            src={heroImg}
            alt="JA Fashions women's luxury designer fashion collection in Dubai"
            className="hero-bg-img"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="1920"
            height="1080"
          />
          <motion.div className="hero-bg-overlay" style={{ opacity: overlayOpacity }} />
        </motion.div>

        {/* ── Floating Particles ── */}
        <div className="hero-particles" aria-hidden="true">
          {particles.map((p, i) => <Particle key={i} style={p} />)}
        </div>

        {/* ── Marquee Strip (top) ── */}
        <div className="hero-marquee-wrap" aria-hidden="true">
          <div className="hero-marquee-track">
            {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((w, i) => (
              <span key={i} className="marquee-item">
                <Sparkles size={10} />
                {w}
              </span>
            ))}
          </div>
        </div>

        {/* ── Main Content ── */}
        <div className="hero-content-wrap container">
          <motion.div
            className="hero-inner"
            style={{ y: textY }}
          >
            {/* ── Left Text Column ── */}
            <article className="hero-text-col" itemScope itemType="https://schema.org/ClothingStore">
              {/* Eyebrow badge */}
              <motion.div
                className="hero-eyebrow"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="eyebrow-dot" />
                <span itemProp="name">JA Fashions</span>
                <span className="eyebrow-divider">·</span>
                <span>Dubai Luxury Fashion Boutique</span>
              </motion.div>

              {/* Main H1 — single, keyword-rich */}
              <motion.h1
                id="home-hero-title"
                className="hero-h1"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="h1-line h1-bold">JA FASHIONS</span>
                <span className="h1-line h1-bold">ONLINE</span>
                <span className="h1-line h1-italic">BOUTIQUE</span>
              </motion.h1>

              {/* SEO-rich description */}
              <motion.p
                className="hero-desc"
                itemProp="description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                Shop JA Fashions for women's designer wear in Dubai and across the UAE,
                including party wear gowns, elegant kurtis, plus-size fashion, jewellery,
                and curated occasion outfits for modern style.
              </motion.p>

              {/* Star rating (SEO boost with AggregateRating schema) */}
              <motion.div
                className="hero-rating"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                itemProp="aggregateRating"
                itemScope
                itemType="https://schema.org/AggregateRating"
              >
                <div className="stars" aria-label="Rated 4.9 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="#E91E8F" stroke="none" />
                  ))}
                </div>
                <span className="rating-text">
                  <meta itemProp="ratingValue" content="4.9" />
                  <meta itemProp="reviewCount" content="2400" />
                  <strong>4.9</strong> from 2,400+ reviews
                </span>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="hero-cta-group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.3 }}
              >
                <a
                  href="#collections"
                  className="btn-hero-primary"
                  aria-label="Shop women's luxury designer fashion collections at JA Fashions"
                  id="hero-shop-cta"
                >
                  <span>Shop Designer Wear</span>
                  <ArrowRight size={16} strokeWidth={1.5} />
                </a>
                <a
                  href="#about"
                  className="btn-hero-primary"
                  aria-label="Learn about JA Fashions Dubai fashion boutique"
                  id="hero-about-cta"
                >
                  Our Story
                </a>
              </motion.div>

              {/* Trust pills */}
              <motion.div
                className="hero-trust-pills"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                aria-label="Trust badges"
              >
                {['UAE-Wide Delivery', 'Premium Quality', 'Plus-Size Options'].map((t) => (
                  <span key={t} className="trust-pill">{t}</span>
                ))}
              </motion.div>
            </article>

            {/* ── Right Image Column ── */}
            <motion.aside
              className="hero-image-col"
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.4, ease: 'easeOut' }}
            >
              <div className="hero-img-frame">
                <div className="img-glow" />
                <img
                  src={heroImg}
                  alt="Model wearing JA Fashions luxury designer outfit for women"
                  className="hero-img-main"
                  loading="eager"
                  decoding="async"
                />
                {/* Floating card */}
                <motion.div
                  className="hero-float-card"
                  initial={{ opacity: 0, y: 20, x: 20 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ delay: 1.8, duration: 0.8 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="float-card-dot" />
                  <div>
                    <p className="float-card-label">New Drop</p>
                    <p className="float-card-value">Dubai Edit</p>
                  </div>
                </motion.div>

                {/* Side label */}
                <div className="hero-side-label">
                  <span>Luxury</span>
                  <span className="side-dot" />
                  <span>Editorial</span>
                  <span className="side-dot" />
                  <span>Exclusive</span>
                </div>
              </div>
            </motion.aside>
          </motion.div>

          {/* ── Stats Row ── */}
          <motion.div
            className="hero-stats-row"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            role="complementary"
            aria-label="JA Fashions statistics"
          >
            {stats.map((s, i) => (
              <div key={i} className="hero-stat-item">
                <span className="stat-number">
                  <Counter target={s.value} suffix={s.suffix} prefix={s.prefix || ''} />
                </span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Scroll Indicator ── */}
        <motion.a
          href="#collections"
          className="hero-scroll-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          aria-label="Scroll to collections"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ChevronDown size={22} strokeWidth={1.5} />
          </motion.div>
        </motion.a>
      </section>
    </>
  );
};

export default Hero;
