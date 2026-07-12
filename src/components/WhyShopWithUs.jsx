import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Sparkles, Tag, Shirt, Headset } from 'lucide-react';
import './WhyShopWithUs.css';

const WhyShopWithUs = () => {
  const reasons = [
    {
      icon: <Truck size={32} strokeWidth={1} />,
      title: "UAE-Wide Delivery",
      desc: "Fast and reliable shipping across all emirates, bringing luxury straight to your doorstep."
    },
    {
      icon: <Sparkles size={32} strokeWidth={1} />,
      title: "Trendy & Timeless",
      desc: "Curated collections that perfectly balance contemporary trends with enduring elegance."
    },
    {
      icon: <Tag size={32} strokeWidth={1} />,
      title: "Affordable Pricing",
      desc: "Experience true luxury and premium quality without the exorbitant price tag."
    },
    {
      icon: <Shirt size={32} strokeWidth={1} />,
      title: "Plus-Size Availability",
      desc: "Fashion is for everyone. We proudly offer an inclusive range of sizes to celebrate every body."
    },
    {
      icon: <Headset size={32} strokeWidth={1} />,
      title: "Trusted Service",
      desc: "Our dedicated support team ensures a seamless, personalized shopping experience every time."
    }
  ];

  return (
    <section className="why-shop-section" id="why-shop">
      <div className="container">
        
        <div className="why-shop-split">
          {/* Left Column: Sticky Header */}
          <div className="why-shop-left">
            <div className="sticky-content">
              <motion.div 
                className="eyebrow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="eyebrow-line"></span>
                The JA Fashions Promise
              </motion.div>
              
              <motion.h2 
                className="section-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Why Shop <br/><span className="heading-italic">With Us.</span>
              </motion.h2>

              <motion.p 
                className="why-shop-intro"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                We believe that every woman deserves to experience true luxury. Our commitment goes beyond fashion—it's about creating an unforgettable experience tailored just for you.
              </motion.p>
            </div>
          </div>

          {/* Right Column: Editorial List */}
          <div className="why-shop-right">
            <div className="promise-list">
              {reasons.map((reason, index) => (
                <motion.div 
                  className="promise-row"
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="promise-meta">
                    <span className="promise-num">0{index + 1}</span>
                    <div className="promise-icon-wrap">
                      {reason.icon}
                    </div>
                  </div>
                  <div className="promise-content">
                    <h3 className="promise-title">{reason.title}</h3>
                    <p className="promise-desc">{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyShopWithUs;
