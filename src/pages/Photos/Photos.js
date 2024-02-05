import React from 'react';
import './Photos.css';
import image1 from '../../assets/photos/PXL_20230817_020740876.jpg';
import image2 from '../../assets/photos/PXL_20230819_022845143.jpg';
import image3 from '../../assets/photos/PXL_20230903_015519055.jpg';
import image4 from '../../assets/photos/PXL_20231029_160459544.jpg';
import PhotoDisplay from '../../components/PhotoDisplay/PhotoDisplay';

const Photos = () => {
    const images = [image1, image2, image3, image4];
    return(
        <section id="Photos">
            <div className="container photo-container">
                <PhotoDisplay images={images} />
            </div>
        </section>
    );
};

export default Photos;