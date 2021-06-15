import React from 'react';
import { Card } from 'antd';
import { EyeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import laptop from '../../images/laptop.png';
import { Link } from 'react-router-dom';

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

    <div className='card card-ecommerce text-center align-items-center'>
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

      <div className='card-body w-100'>
        <h5 className='card-title mb-1'>
          <strong>
            <Link to={`/product/${slug}`} className='dark-grey-text'>
              {title}
            </Link>
          </strong>
        </h5>
        <span className='badge badge-danger mb-2'>{brand}</span>

        <ul className='rating'>
          <li>
            <i className='fas fa-star blue-text'></i>
          </li>
          <li>
            <i className='fas fa-star blue-text'></i>
          </li>
          <li>
            <i className='fas fa-star blue-text'></i>
          </li>
          <li>
            <i className='fas fa-star blue-text'></i>
          </li>
          <li>
            <i className='fas fa-star blue-text'></i>
          </li>
        </ul>

        <div className='card-footer pb-0'>
          <div className='row mb-0'>
            <div className=''>
              <strong>{price * (90 / 100)} ₹ </strong>
              <s>{price} ₹</s>
            </div>
            <div className='ml-auto'>
              <a
                className='bold'
                data-toggle='tooltip'
                data-placement='top'
                title='Add to Cart'
              >
                <i className='fas fa-shopping-cart ml-3 '></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
