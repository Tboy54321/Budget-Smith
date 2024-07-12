import React, { useEffect, useRef } from 'react';
import './Testimonial.css';
import { motion, useAnimation, useInView } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Testimonial = () => {
  // Reference to the testimonial container
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

  // Variants for testimonial container animation
  const testimonialContainerVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  // Testimonials data
  const testimonials = [
    {
      text: "This is the best service I've ever used!",
      author: "John Doe",
      image: "https://images.unsplash.com/photo-1664308703386-9f5be1aa9ae6?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      text: "Amazing experience and great customer support.",
      author: "Jane Smith",
      image: "https://images.unsplash.com/photo-1502378735452-bc7d86632805",
    },
    {
      text: "I would highly recommend this to my friends.",
      author: "Michael Johnson",
      image: "https://images.unsplash.com/photo-1690225362586-8c58e5874899?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFkdWx0JTIwc21pbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      text: "A fantastic service with top-notch support!",
      author: "Emily Davis",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
  };

  return (
    <motion.div
      variants={testimonialContainerVariants}
      initial='hidden'
      animate={mainControls}
      transition={{ delay: 1.5 }}
      ref={containRef}
      className="testimonial-container"
      id="testimonials"
    >
      <div className="testimonial">
        <h1>What Our Users SAY!</h1>
        <div className="testimonial-slider">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-slide">
                <div
                  className="testimonial-image"
                  style={{ backgroundImage: `url(${testimonial.image})` }}
                ></div>
                <div className="testimonial-content">
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <p className="testimonial-author">- {testimonial.author}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </motion.div>
  );
};
