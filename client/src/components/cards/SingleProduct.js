import React, { useState } from 'react';
import { Card, Tabs, Tooltip } from 'antd';
import { Link } from 'react-router-dom';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Laptop from '../../images/laptop.png';
import ProductListItems from './ProductListItems';
import StarRatings from 'react-star-ratings';
import RatingModal from '../modal/RatingModal';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { addToWishlist } from '../../functions/user';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

const { TabPane } = Tabs;

const SingleProduct = ({ product, onStarClick, star }) => {
  const [tooltip, setTooltip] = useState('Click to add');
  const { title, images, description, _id } = product;

  const { user } = useSelector((state) => ({ ...state }));
  let history = useHistory();

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    // create cart array
    let cart = [];
    if (typeof window !== 'undefined') {
      // if cart is in local storage GET it
      if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
      }
      // push new product to cart
      cart.push({
        ...product,
        count: 1,
      });
      // remove duplicates
      let unique = _.uniqWith(cart, _.isEqual);
      // save to local storage
      // console.log('unique', unique)
      localStorage.setItem('cart', JSON.stringify(unique));
      // show tooltip
      setTooltip('Added');

      // add to reeux state
      dispatch({
        type: 'ADD_TO_CART',
        payload: unique,
      });
      // show cart items in side drawer
      dispatch({
        type: 'SET_VISIBLE',
        payload: true,
      });
    }
  };
  const handleAddToWishlist = (e) => {
    e.preventDefault();
    addToWishlist(product._id, user.token).then((res) => {
      toast.info('Added to wishlist');
      history.push('/user/wishlist');
    });
  };

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
                  <a onClick={handleAddToWishlist}>
                    <button className='btn btn-outline-danger btn-rounded'>
                      <i className='fas fa-heart ' aria-hidden='true'></i>
                    </button>
                  </a>
                  <p className='grey-text'>Wishlist</p>
                </div>
                <div className=''>
                  <Tooltip title={tooltip}>
                    <a className='bold ' onClick={handleAddToCart}>
                      <button className='btn btn-outline-primary btn-rounded'>
                        <i className='fas fa-cart-plus' aria-hidden='true'></i>
                      </button>
                    </a>
                  </Tooltip>
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
