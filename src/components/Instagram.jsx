import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram as InstaIcon, Heart, MessageSquare, Play, ExternalLink } from 'lucide-react';
import './Instagram.css';

const InstagramFeed = () => {
  const [feedData, setFeedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchInstagramFeed = async () => {
      try {
        const response = await fetch('https://feeds.behold.so/thFLoixmeUHly8sx5A1B');
        if (!response.ok) {
          throw new Error('Failed to fetch Instagram feed');
        }
        const data = await response.json();
        setFeedData(data);
      } catch (err) {
        console.error('Error fetching Behold Instagram feed:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramFeed();
  }, []);

  // Helper to format large numbers (e.g. 1500 -> 1.5k)
  const formatCount = (count) => {
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'k';
    }
    return count;
  };

  // Helper to clean up caption for overlays
  const truncateCaption = (caption, maxLength = 80) => {
    if (!caption) return '';
    const cleanCaption = caption.replace(/[\n\r]+/g, ' ').trim();
    if (cleanCaption.length <= maxLength) return cleanCaption;
    return cleanCaption.slice(0, maxLength) + '...';
  };

  return (
    <section className="instagram-section" id="instagram">
      <div className="container">
        
        <div className="instagram-header">
          <motion.div 
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow-line"></span>
            Social Gallery
            <span className="eyebrow-line"></span>
          </motion.div>
          
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Shop Our <span className="heading-italic">Instagram.</span>
          </motion.h2>
          
          <motion.p
            className="instagram-subtitle-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Tag <a href="https://www.instagram.com/jafashionsuae/" target="_blank" rel="noopener noreferrer" className="insta-handle">@jafashionsuae</a> to be featured in our style gallery.
          </motion.p>
        </div>

        {/* Feed Content */}
        {loading ? (
          <div className="instagram-grid-container">
            <div className="instagram-custom-grid">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="instagram-skeleton-card">
                  <div className="skeleton-image"></div>
                </div>
              ))}
            </div>
          </div>
        ) : error || !feedData || !feedData.posts ? (
          <div className="instagram-unavailable" role="status">
            Instagram feed is currently offline. You can still browse our posts directly on Instagram.
          </div>
        ) : (
          <div className="instagram-grid-container">
            <div className="instagram-custom-grid">
              {feedData.posts.slice(0, 6).map((post, idx) => {
                const imageUrl = post.sizes?.medium?.mediaUrl || post.thumbnailUrl || post.mediaUrl;
                return (
                  <motion.a
                    key={post.id}
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram-custom-card"
                    aria-label={`View Instagram post: ${post.prunedCaption ? post.prunedCaption.slice(0, 60) : 'JA Fashions UAE fashion collection'}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <div className="instagram-img-wrapper">
                      <img 
                        src={imageUrl} 
                        alt={post.prunedCaption || "JA Fashions UAE women's ethnic fashion highlight"} 
                        className="insta-post-img"
                        loading="lazy"
                        decoding="async"
                        width="400"
                        height="400"
                      />
                      
                      {post.mediaType === 'VIDEO' && (
                        <div className="video-badge" aria-label="Reel video">
                          <Play size={14} fill="#fff" stroke="none" />
                        </div>
                      )}

                      <div className="insta-overlay">
                        <div className="insta-overlay-top">
                          <InstaIcon size={20} className="overlay-insta-icon" />
                        </div>
                        
                        <p className="insta-overlay-caption">
                          {truncateCaption(post.prunedCaption || post.caption)}
                        </p>

                        <div className="insta-meta">
                          <span className="meta-item">
                            <Heart size={16} fill="var(--color-pink)" stroke="none" />
                            <span>{formatCount(post.likeCount || 0)}</span>
                          </span>
                          <span className="meta-item">
                            <MessageSquare size={16} fill="#fff" stroke="none" />
                            <span>{formatCount(post.commentsCount || 0)}</span>
                          </span>
                        </div>

                        <span className="insta-shop-btn">
                          <span>View Post</span>
                          <ExternalLink size={12} />
                        </span>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        )}

        <motion.div 
          className="instagram-footer-action"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a 
            href="https://www.instagram.com/jafashionsuae/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-outline brand-hover"
            aria-label="Visit JA Fashions UAE on Instagram"
          >
            <InstaIcon size={18} />
            <span>Visit @jafashionsuae</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default InstagramFeed;
