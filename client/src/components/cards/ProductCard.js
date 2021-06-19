import React, { useState } from 'react';
import { Card, Tooltip } from 'antd';

import laptop from '../../images/laptop.png';
import { Link } from 'react-router-dom';
import { showAllAverage } from '../../functions/allratings';
import _ from 'lodash';
import { useDispatch } from 'react-redux';

const { Meta } = Card;

const ProductCard = ({ product }) => {
  const [tooltip, setTooltip] = useState('Click to add');
  // destructure
  const { images, title, brand, price, slug } = product;
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

  return (
    <div className='card h-100 card-ecommerce text-center align-items-center '>
      <div className='view overlay '>
        <img
          src={images && images.length ? images[0].url : laptop}
          className='img-fluid '
          style={{ height: '150px', objectFit: 'cover' }}
          alt='sample image'
        />
        <Link to={`/product/${slug}`}>
          <div className='mask rgba-white-slight'></div>
        </Link>
      </div>

      <div className='card-body d-flex align-items-stretch flex-column align-self-center justify-content-between w-100'>
        <h5 className='card-title mb-1'>
          <strong>
            <Link to={`/product/${slug}`} className='dark-grey-text'>
              {title}
            </Link>
          </strong>
        </h5>
        <span className='badge badge-primary m-auto mb-2 p-2'>{brand}</span>

        {product && product.ratings && product.ratings.length > 0
          ? showAllAverage(product)
          : showAllAverage(0)}

        <div className='card-footer pb-0 '>
          <div className='row mb-0'>
            <div className=''>
              <h5>
                <span className='badge badge-danger '>
                  ₹ {price * (90 / 100)}
                </span>
              </h5>
              <s>₹ {price} </s>
            </div>
            <div className='ml-auto  '>
          
              <Tooltip title={tooltip}>
                <a className='bold ' onClick={handleAddToCart}>
                  <i className='hovercart fas fa-shopping-cart p-1 m-2 fa-2x '></i>
                </a>
              </Tooltip>
              ,
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
