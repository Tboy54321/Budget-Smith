import React from 'react';
import './TestimonialCarouselImage.css'; // Create this CSS file to include additional styles if necessary

export const CarouselImage = ({ text, backgroundImage }) => {
  const imageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 'auto', // Adjust the height as needed
  };

  return (
    <div style={imageStyle} className="carousel-image">
      <div className="carousel-text">
        {text}
      </div>
    </div>
  );
};


