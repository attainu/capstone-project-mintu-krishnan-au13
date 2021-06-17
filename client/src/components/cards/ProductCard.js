import React from 'react';
import { Card } from 'antd';
import { EyeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import laptop from '../../images/laptop.png';
import { Link } from 'react-router-dom';
import { showAllAverage } from '../../functions/allratings';

const { Meta } = Card;

const ProductCard = ({ product }) => {
  // destructure
  const { images, title, brand, price, slug } = product;
  return (
    // <Card
    //   cover={
    //     <img
    //       src={images && images.length ? images[0].url : laptop}
    //       style={{ height: '150px', objectFit: 'cover' }}
    //       className='p-1'
    //       alt='cover'
    //     />
    //   }
    //   actions={[
    //     <Link to={`/product/${slug}`}>
    //       <EyeOutlined className='text-warning' /> <br /> View Product
    //     </Link>,
    //     <>
    //       <ShoppingCartOutlined className='text-danger' /> <br /> Add to Cart
    //     </>,
    //   ]}
    // >
    //   <Meta
    //     title={title}
    //     description={`${description && description.substring(0, 40)}...`}
    //   />
    // </Card>

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
              <a
                className='bold '
                data-toggle='tooltip'
                data-placement='top'
                title='Add to Cart'
              >
                <i className='hovercart fas fa-shopping-cart p-1 m-2 fa-2x '></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
