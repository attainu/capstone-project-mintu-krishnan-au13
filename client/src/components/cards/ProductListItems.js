import React from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { showAverage } from '../../functions/rating';
import RatingModal from '../modal/RatingModal';

const ProductListItems = ({ product }) => {
  const {
    title,
    price,
    description,
    category,
    subs,
    shipping,
    color,
    brand,
    quantity,
    sold,
  } = product;

  return (
    <div className='col-md-5 text-center text-md-left paddingl'>
      <h2 className='h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4'>
        {title}
      </h2>
      <span className='badge badge-danger product mb-4 ml-xl-0 ml-4'>
        bestseller
      </span>
      {/* <p className=' product mb-0 ml-xl-0 ml-4 text-md-left'>
        <StarRatings
          rating={2.8}
          starRatedColor='red'
          numberOfStars={5}
          starDimension='25px'
          name='rating'
        />
      </p>  */}
      {product && product.ratings && product.ratings.length > 0
        ? showAverage(product)
        : showAverage(0)}
      {/* <span
        className='mb-4 ml-4 ml-xl-0 text-muted text-md-left'
        style={{ size: '10px' }}
      >
        (7 Reviews)
      </span> */}

      <h3 className='h3-responsive text-center text-md-left my-5 ml-xl-0 ml-4'>
        <span className='red-text font-weight-bold'>
          <strong>₹ {price}</strong>
        </span>
        <span className='grey-text'>
          <small>
            <s>₹ {price}</s>
          </small>
        </span>
      </h3>

      <div className='font-weight-normal'>
        {/* <p className='ml-xl-0 ml-4'>{description}</p> */}

        {subs && (
          <p className='ml-xl-0 ml-4'>
            <strong>Sub Category : </strong>
            {subs.map((s) => (
              <Link key={s._id} to={`/sub/${s.slug}`}>
                <span className='badge badge-default mr-3'> {s.name}</span>
              </Link>
            ))}
          </p>
        )}
        {category && (
          <p className='ml-xl-0 ml-4'>
            <strong>Category: </strong>
            <Link to={`/category/${category.slug}`}>
              <span className='badge badge-secondary'>{category.name}</span>
            </Link>
          </p>
        )}

        <p className='ml-xl-0 ml-4'>
          <strong>Brand: </strong>
          {brand}
        </p>
        <p className='ml-xl-0 ml-4'>
          <strong>Color: </strong>
          {color}
        </p>
        <p className='ml-xl-0 ml-4'>
          <strong>Shipping: </strong> {shipping}
        </p>
        <p className='ml-xl-0 ml-4'>
          <strong>Availability: </strong>
          {quantity > 0 ? 'In stock' : 'Out of stock'}
        </p>
        <p className='ml-xl-0 ml-4'>
          <strong>Quantity Sold: </strong>
          {sold}
        </p>
      </div>
    </div>
  );
};

export default ProductListItems;
