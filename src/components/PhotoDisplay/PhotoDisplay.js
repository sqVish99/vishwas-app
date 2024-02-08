import React, { useState } from 'react';
import './PhotoDisplay.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const PhotoDisplay = ({ images }) => {
   var settings = {
     dots: true,
     infinite: true,
     speed: 200,
     slidesToShow: 1,
     slidesToScroll: 1,
     swipeToSlide: true,
     autoplay: true,
     autoplaySpeed: 2000,
   };
 
   return (
     <Slider {...settings} className='slider'>
       {images.map((image, index) => (
         <div key={index}>
           <img src={image} alt={`Image ${index + 1}`} />
         </div>
       ))}
     </Slider>
   );
 };
 
 export default PhotoDisplay;