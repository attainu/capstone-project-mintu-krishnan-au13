import React from 'react';
import SLIDES from '../../images/slides/slides';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CategorySlider = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='container  mt-3 '>
      <div className='mx-4 margin-auto align-self-center '>
        <Slider {...settings}>
          {SLIDES.map((i) => (
            <div
              className='d-flex  text-center flex-row  justify-content-center'
              key={i.id}
            >
              <img
                src={i.image}
                className='m-0 p-0 text-right'
                width='30px'
                height='30px'
              />
              <label className='align-self-center  ml-2 mb-0'>
                <a> {i.category} </a>{' '}
              </label>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CategorySlider;
