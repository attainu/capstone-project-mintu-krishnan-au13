import React from 'react';
import { Card, Tabs } from 'antd';
import { Link } from 'react-router-dom';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Laptop from '../../images/laptop.png';
import ProductListItems from './ProductListItems';
import StarRatings from 'react-star-ratings';
import RatingModal from '../modal/RatingModal';
import { showAverage } from '../../functions/rating';

const { TabPane } = Tabs;

const SingleProduct = ({ product, onStarClick, star }) => {
  const { title, images, description, _id } = product;

  return (
    <>
      <div className=' my-5 py-5 z-depth-1'>
        <section className='text-center'>
          <h3 className='font-weight-bold mb-5'>Product Details</h3>

          <div className='row'>
            <div className='col-md-5'>
              <div
                id='carousel-thumb1'
                className='carousel slide carousel-fade carousel-thumbnails mb-5 pb-4'
                data-ride='carousel'
              >
                <div
                  className='carousel-inner text-center text-md-left'
                  role='listbox m-auto w-50'
                >
                  {images && images.length ? (
                    <Carousel showArrows={true} autoPlay infiniteLoop>
                      {images &&
                        images.map((img, i) => (
                          <div key={i} style={{ width: '70%' }}>
                            <img src={img.url} key={i.public_id} />
                          </div>
                        ))}
                    </Carousel>
                  ) : (
                    <Card
                      cover={<img src={Laptop} className='mb-3 card-image' />}
                    ></Card>
                  )}
                </div>
              </div>

              <div className='row mb-4'>
                <div className='col-md-12'>
                  <div id='mdb-lightbox-ui'></div>
                  <div className='mdb-lightbox no-margin'>
                    <Tabs type='card'>
                      <TabPane tab='Description' key='1'>
                        {description && description}
                      </TabPane>
                      <TabPane tab='More' key='2'>
                        {description && description}
                      </TabPane>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
            <ProductListItems product={product} />
            <div className='mt-5 col d-flex flex-column '>
              <div className='row text-center justify-content-around '>
                <div className=''>
                  <RatingModal>
                    <StarRatings
                      rating={star}
                      starRatedColor='red'
                      numberOfStars={5}
                      starDimension='25px'
                      name={_id}
                      changeRating={onStarClick}
                      isSelectable={true}
                    />
                  </RatingModal>
                  <p className='grey-text'>Rate</p>
                </div>
                <div className=''>
                  <button className='btn btn-outline-danger btn-rounded'>
                    <i className='fas fa-heart ' aria-hidden='true'></i>
                  </button>
                  <p className='grey-text'>Wishlist</p>
                </div>
                <div className=''>
                  <button className='btn btn-outline-primary btn-rounded'>
                    <i className='fas fa-cart-plus' aria-hidden='true'></i>
                  </button>
                  <p className='grey-text'>Add to Cart</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleProduct;
