import React from 'react';
import { Card, Tabs } from 'antd';
import { Link } from 'react-router-dom';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Laptop from '../../images/laptop.png';
import ProductListItems from './ProductListItems';

const { TabPane } = Tabs;

const SingleProduct = ({ product }) => {
  const { title, images, description } = product;

  return (
    <>
      {/* <div className='col-md-6'>
        {images && images.length ? (
          <Carousel showArrows={true} autoPlay infiniteLoop>
            {images && images.map((i) => <img src={i.url} key={i.public_id} />)}
          </Carousel>
        ) : (
          <Card cover={<img src={Laptop} className='mb-3 card-image' />}></Card>
        )}
        <Tabs type='card'>
          <TabPane tab='Description' key='1'>
            {description && description}
          </TabPane>
          <TabPane tab='More' key='2'>
            Call use on xxxx xxx xxx to learn more about this product.
          </TabPane>
        </Tabs>
      </div>

      <div className='col-md-6'>
        <h1 className='bg-info p-3'>{title}</h1>
        <Card
          actions={[
            <>
              <ShoppingCartOutlined className='text-success' /> <br />
              Add to Cart
            </>,
            <Link to='/'>
              <HeartOutlined className='text-info' /> <br /> Add to Wishlist
            </Link>,
          ]}
        >
          <ProductListItems product={product} />
        </Card>
      </div> */}

      <div className='container my-5 py-5 z-depth-1'>
        <section className='text-center'>
          <h3 className='font-weight-bold mb-5'>Product Details</h3>

          <div className='row'>
            <div className='col-lg-6'>
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
                        images.map((i) => (
                          <div className='w-60'>
                            <img src={i.url} key={i.public_id} width='100px' />
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
                        Call use on xxxx xxx xxx to learn more about this
                        product.
                      </TabPane>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
            <ProductListItems product={product} />
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleProduct;
