import React, { useState, useEffect } from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const isVisible = scrollTop > window.innerHeight / 2;
      setIsVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`image-gallery ${isVisible ? 'visible' : ''}`}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index}`}
          style={{ animationDelay: `${index * 0.2}s` }}
        />
      ))}
    </div>
  );
};

export default ImageGallery;