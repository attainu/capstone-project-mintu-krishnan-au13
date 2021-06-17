import React from 'react';
import { Card } from 'antd';
import laptop from '../../images/laptop.png';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const AdminProductCard = ({ product, handleRemove }) => {
  // destructure
  const { brand, title, description, images, slug } = product;

  return (
    // <Card
    //   cover={
    //     <img
    //       src={images && images.length ? images[0].url : laptop}
    //       style={{ height: "150px", objectFit: "cover" }}
    //       className="p-1"
    //     />
    //   }
    //   actions={[
    //     <Link to={`/admin/product/${slug}`}>
    //       <EditOutlined className="text-warning" />
    //     </Link>,
    //     <DeleteOutlined
    //       onClick={() => handleRemove(slug)}
    //       className="text-danger"
    //     />,
    //   ]}
    // >
    //   <Meta
    //     title={title}
    //     description={`${description && description.substring(0, 40)}...`}
    //   />
    // </Card>
    // <div className='col-lg-4 col-md-6 mb-4 '>
    <div
      className='d-flex h-100 card card-cascade narrower my-4 text-center dark-bg-color '
      style={{ marginTop: '28px' }}
    >
      <div className='view view-cascade ' style={{ height: '200px' }}>
        <img
          src={images && images.length ? images[0].url : laptop}
          className='card-img-top'
          alt=''
        />
        <a>
          <div className='mask rgba-white-slight'></div>
        </a>
      </div>

      <div className='d-flex flex-column justify-content-between card-body card-body-cascade'>
        <h5 className='pink-text'>
          <i className='fab fa-product-hunt'></i> {brand}
        </h5>

        <h4 className='card-title white-color'>{title}</h4>

        {/* <p className='card-text light-color'>
          {`${description && description.substring(0, 40)}...`}
        </p> */}
        <div>
          <Link
            to={`/admin/product/${slug}`}
            type='button'
            className='btn-floating btn-small btn-tw'
          >
            <i className='far fa-edit'></i>
          </Link>
          <a
            type='button'
            className='btn-floating btn-small btn-dribbble'
            onClick={() => handleRemove(slug)}
          >
            <i className='far fa-trash-alt'></i>
          </a>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default AdminProductCard;
