import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CardwithImage.css';

const CardwithImage = () => {
  return (
    <div className="carousel-container">
      <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
        <div>
          <img src="cc1.jpeg" alt="Image 1" />
        </div>
        <div>
          <img src="cc4.jpeg" alt="Image 2" />
        </div>
        <div>
          <img src="cc5.jpeg" alt="Image 3" />
        </div>
      </Carousel>

    </div>


  );
};

export default CardwithImage;
