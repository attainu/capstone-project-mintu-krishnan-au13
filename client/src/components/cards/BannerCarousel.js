import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import IMAGES from '../../images/banner/banner';
const BannerCarousel = () => {
  return (
    <Carousel showArrows={true} showThumbs={false} autoPlay infiniteLoop>
      {IMAGES.map((i) => (
        <div key={i.id}>
          <img src={i.image} />
        </div>
      ))}
    </Carousel>
  );
};

export default BannerCarousel;
