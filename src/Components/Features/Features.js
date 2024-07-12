import React, { useEffect, useRef } from 'react';
import './Features.css';
import security_img from '../../Assets/security.jpg';
import dashboard_img from '../../Assets/dashboard1.jpg';
import insight_img from '../../Assets/insights.jpg';
import { motion, useAnimation, useInView } from 'framer-motion';

export const Features = () => {
  // Reference to the features container
  const containRef = useRef(null);

  // Check if the container is in view
  const isInview = useInView(containRef, { once: true });

  // Animation controls
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInview) {
      mainControls.start('visible');
    }
  }, [isInview]);

  // Variants for grid container animation
  const gridContainerVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  // Variants for grid square animation
  const gridSquareVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        variants={gridContainerVariants}
        transition={{ delay: 0.8 }}
        ref={containRef}
        animate={mainControls}
        className="features-heading"
      >
        <p id="features">Features</p>
      </motion.div>

      <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ delay: 1.5 }}
        ref={containRef}
        className="features-container"
      >
        <motion.div
          variants={gridSquareVariants}
          whileTap={{ scale: 0.9 }}
          whileHover={{
            scale: 1.1,
            backgroundColor: "#d1d5db",
            color: "black",
            boxShadow: "10px 10px 10px rgba(63, 81, 181, 1)",
          }}
          transition={{ bounceDamping: 10, bounceStiffness: 600 }}
          className="feature-card"
        >
          <div className="ft-image">
            <img src={security_img} alt="Feature" />
          </div>
          <div className="ft-icon">Fortress of Security</div>
          <div className="ft-content">
            <p>We prioritize the security and privacy of your data, ensuring you have peace of mind.</p>
          </div>
        </motion.div>

        <motion.div
          variants={gridSquareVariants}
          whileTap={{ scale: 0.9 }}
          whileHover={{
            scale: 1.1,
            backgroundColor: "#d1d5db",
            color: "black",
            boxShadow: "10px 10px 10px rgba(63, 81, 181, 1)",
          }}
          transition={{ bounceDamping: 10, bounceStiffness: 600 }}
          className="feature-card"
        >
          <div className="ft-image">
            <img src={insight_img} alt="img" />
          </div>
          <div className="ft-icon">Empower Your Financial Journey</div>
          <div className="ft-content">
            <p>Gain insights into your spending habits to make informed decisions that align with your financial goals.</p>
          </div>
        </motion.div>

        <motion.div
          variants={gridSquareVariants}
          whileTap={{ scale: 0.9 }}
          whileHover={{
            scale: 1.1,
            backgroundColor: "#d1d5db",
            color: "black",
            boxShadow: "10px 10px 10px rgba(63, 81, 181, 1)",
          }}
          transition={{ bounceDamping: 10, bounceStiffness: 600 }}
          className="feature-card"
        >
          <div className="ft-image">
            <img src={insight_img} alt="img" />
          </div>
          <div className="ft-icon">Budget Alerts and Notifications</div>
          <div className="ft-content">
            <p>Sets up alerts to notify users about budget limits and significant transactions.</p>
          </div>
        </motion.div>

        <motion.div
          variants={gridSquareVariants}
          whileTap={{ scale: 0.9 }}
          whileHover={{
            scale: 1.1,
            backgroundColor: "#d1d5db",
            color: "black",
            boxShadow: "10px 10px 10px rgba(63, 81, 181, 1)",
          }}
          transition={{ bounceDamping: 10, bounceStiffness: 600 }}
          className="feature-card"
        >
          <div className="ft-image">
            <img src={dashboard_img} alt="Feature" />
          </div>
          <div className="ft-icon">Multi-Currency Support</div>
          <div className="ft-content">
            <p>Integrate a currency converter to support users who deal with multiple currencies.</p>
          </div>
        </motion.div>

        <motion.div
          variants={gridSquareVariants}
          whileTap={{ scale: 0.9 }}
          whileHover={{
            scale: 1.1,
            backgroundColor: "#d1d5db",
            color: "black",
            boxShadow: "10px 10px 10px rgba(63, 81, 181, 1)",
          }}
          transition={{ bounceDamping: 10, bounceStiffness: 600 }}
          className="feature-card"
        >
          <div className="ft-image">
            <img src={dashboard_img} alt="Feature" />
          </div>
          <div className="ft-icon">Analytics</div>
          <div className="ft-content">
            <p>Delivers analytical tools to help users visualize their spending and saving patterns.</p>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};
