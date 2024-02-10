import React, { useState, useRef } from 'react';
import './PhotoDisplay.css';
import Leftarrow from '../../assets/images/Leftarrow.js';
import Rightarrow from '../../assets/images/Rightarrow.js';

const PhotoDisplay = ({ images }) => {
   const [currentImageIndex, setCurrentImageIndex] = useState(0);
   const [swipeHandled, setSwipeHandled] = useState(false);
   const touchStartX = useRef(0);

   const nextImage = () => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
   };

   const prevImage = () => {
      setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
   };

   const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };
    
    const handleTouchMove = (e) => {
      if (!swipeHandled) {
        if (touchStartX.current - e.touches[0].clientX > 100) {
          nextImage();
          setSwipeHandled(true);
        } else if (touchStartX.current - e.touches[0].clientX < -100) {
          prevImage();
          setSwipeHandled(true);
        }
      }
    };
    
    const handleTouchEnd = () => {
      setSwipeHandled(false);
    };

   return (
      <div className="photo-display" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
         <button className="nav-button prev-button" onClick={prevImage}><Leftarrow /></button>
         <img className="displayed-image" src={images[currentImageIndex]} alt="" />
         <button className="nav-button next-button" onClick={nextImage}><Rightarrow /></button>
      </div>
   );
};

export default PhotoDisplay;