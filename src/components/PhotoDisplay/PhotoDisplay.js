import React, { useState } from 'react';
import './PhotoDisplay.css';

const PhotoDisplay = ({ images }) => {
   const [currentImageIndex, setCurrentImageIndex] = useState(0);

   const nextImage = () => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
   };

   const prevImage = () => {
      setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
   };

   return (
      <div className="photo-display">
         <img className="displayed-image" src={images[currentImageIndex]} alt="" />
         <div className="nav-buttons">
            <button className="nav-button prev-button" onClick={prevImage}>&larr;</button>
            <button className="nav-button next-button" onClick={nextImage}>&rarr;</button>
         </div>
      </div>
   );
};

export default PhotoDisplay;