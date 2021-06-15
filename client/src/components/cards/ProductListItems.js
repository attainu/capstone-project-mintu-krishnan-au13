import React from 'react';
import { Link } from 'react-router-dom';

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
    // <ul className='list-group'>
    //   <li className='list-group-item'>
    //     Price{' '}
    //     <span className='label label-default label-pill pull-xs-right'>
    //       $ {price}
    //     </span>
    //   </li>

    //   {category && (
    //     <li className='list-group-item'>
    //       Category{' '}
    //       <Link
    //         to={`/category/${category.slug}`}
    //         className='label label-default label-pill pull-xs-right'
    //       >
    //         {category.name}
    //       </Link>
    //     </li>
    //   )}

    //   {subs && (
    //     <li className='list-group-item'>
    //       Sub Categories
    //       {subs.map((s) => (
    //         <Link
    //           key={s._id}
    //           to={`/sub/${s.slug}`}
    //           className='label label-default label-pill pull-xs-right'
    //         >
    //           {s.name}
    //         </Link>
    //       ))}
    //     </li>
    //   )}

    //   <li className='list-group-item'>
    //     Shipping{' '}
    //     <span className='label label-default label-pill pull-xs-right'>
    //       {shipping}
    //     </span>
    //   </li>

    //   <li className='list-group-item'>
    //     Color{' '}
    //     <span className='label label-default label-pill pull-xs-right'>
    //       {color}
    //     </span>
    //   </li>

    //   <li className='list-group-item'>
    //     Brand{' '}
    //     <span className='label label-default label-pill pull-xs-right'>
    //       {brand}
    //     </span>
    //   </li>

    //   <li className='list-group-item'>
    //     Available{' '}
    //     <span className='label label-default label-pill pull-xs-right'>
    //       {quantity}
    //     </span>
    //   </li>

    //   <li className='list-group-item'>
    //     Sold{' '}
    //     <span className='label label-default label-pill pull-xs-right'>
    //       {sold}
    //     </span>
    //   </li>
    // </ul>
    <div className='col-lg-5 text-center text-md-left'>
      <h2 className='h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4'>
        {title}
      </h2>
      <span className='badge badge-danger product mb-4 ml-xl-0 ml-4'>
        bestseller
      </span>
      <span className='badge badge-success product mb-4 ml-2'>SALE</span>

      <h3 className='h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4'>
        <span className='red-text font-weight-bold'>
          <strong>${price}</strong>
        </span>
        <span className='grey-text'>
          <small>
            <s>${price}</s>
          </small>
        </span>
      </h3>

      <div className='font-weight-normal'>
        <p className='ml-xl-0 ml-4'>{description}</p>

        <p className='ml-xl-0 ml-4'>
          <strong>Storage: </strong>64GB
        </p>
        <p className='ml-xl-0 ml-4'>
          <strong>Size: </strong>9.6-inch
        </p>
        <p className='ml-xl-0 ml-4'>
          <strong>Resolution: </strong>2048 x 1536
        </p>
        <p className='ml-xl-0 ml-4'>
          <strong>Availability: </strong>In stock
        </p>

        <div className='mt-5'>
          <p className='grey-text'>Choose your color</p>
          <div className='row text-center text-md-left'>
            <div className='col-md-4 col-12 '>
              <div className='form-group'>
                <input
                  className='form-check-input'
                  name='group100'
                  type='radio'
                  id='radio100'
                  checked='checked'
                />
                <label
                  for='radio100'
                  className='form-check-label dark-grey-text'
                >
                  White
                </label>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <input
                  className='form-check-input'
                  name='group100'
                  type='radio'
                  id='radio101'
                />
                <label
                  for='radio101'
                  className='form-check-label dark-grey-text'
                >
                  Silver
                </label>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <input
                  className='form-check-input'
                  name='group100'
                  type='radio'
                  id='radio102'
                />
                <label
                  for='radio102'
                  className='form-check-label dark-grey-text'
                >
                  Gold
                </label>
              </div>
            </div>
          </div>
          <div className='row mt-3 mb-4'>
            <div className='col-md-12 text-center text-md-left text-md-right'>
              <button className='btn btn-danger btn-rounded'>
                {/* <i class="far fa-heart"></i> */}
                <i className='fas fa-heart mr-2' aria-hidden='true'></i> Add to
                Wishlist
              </button>
              <button className='btn btn-primary btn-rounded'>
                <i className='fas fa-cart-plus mr-2' aria-hidden='true'></i> Add
                to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListItems;
