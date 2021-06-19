import React from 'react';
import IMAGES from '../../images/banner/banner';
import SLIDES from '../../images/slides/slides';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Bootstrap = () => {
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
    <>
      <div className='mt-5'>
        <Carousel showArrows={true} showThumbs={false} autoPlay infiniteLoop>
          {IMAGES.map((i) => (
            <div key={i.id}>
              <img src={i.image} />
            </div>
          ))}
        </Carousel>
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
      </div>

      <div className='container-fluid my-5'>
        <section>
          <h3 className='font-weight-bold dark-grey-text text-center mb-5'>
            New Arrivals
          </h3>
          <div className='row'>
            <div className='col-lg-3 col-md-6 mb-4'>
              <div className='card card-ecommerce'>
                <div className='view overlay'>
                  <img
                    src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/12.jpg'
                    className='img-fluid'
                    alt='sample image'
                  />
                  <a>
                    <div className='mask rgba-white-slight'></div>
                  </a>
                </div>

                <div className='card-body'>
                  <h5 className='card-title mb-1'>
                    <strong>
                      <a className='dark-grey-text'>Headphones</a>
                    </strong>
                  </h5>
                  <span className='badge badge-danger mb-2'>bestseller</span>

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
                      <span className='float-left'>
                        <strong>1439 ₹</strong>
                      </span>
                      <span className='float-right'>
                        <a
                          className=''
                          data-toggle='tooltip'
                          data-placement='top'
                          title='Add to Cart'
                        >
                          <i className='fas fa-shopping-cart ml-3'></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 mb-4'>
              <div className='card card-ecommerce'>
                <div className='view overlay'>
                  <img
                    src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg'
                    className='img-fluid'
                    alt='sample image'
                  />
                  <a>
                    <div className='mask rgba-white-slight'></div>
                  </a>
                </div>

                <div className='card-body'>
                  <h5 className='card-title mb-1'>
                    <strong>
                      <a className='dark-grey-text'>Headphones</a>
                    </strong>
                  </h5>
                  <span className='badge badge-danger mb-2'>bestseller</span>

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
                      <span className='float-left'>
                        <strong>1439 ₹</strong>
                      </span>
                      <span className='float-right'>
                        <a
                          className=''
                          data-toggle='tooltip'
                          data-placement='top'
                          title='Add to Cart'
                        >
                          <i className='fas fa-shopping-cart ml-3'></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 mb-4'>
              <div className='card card-ecommerce'>
                <div className='view overlay'>
                  <img
                    src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/11.jpg'
                    className='img-fluid'
                    alt='sample image'
                  />
                  <a>
                    <div className='mask rgba-white-slight'></div>
                  </a>
                </div>

                <div className='card-body'>
                  <h5 className='card-title mb-1'>
                    <strong>
                      <a className='dark-grey-text'>iPhone</a>
                    </strong>
                  </h5>
                  <span className='badge badge-info mb-2'>new</span>

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
                      <span className='float-left'>
                        <strong>1439 ₹</strong>
                      </span>
                      <span className='float-right'>
                        <a
                          className=''
                          data-toggle='tooltip'
                          data-placement='top'
                          title='Add to Cart'
                        >
                          <i className='fas fa-shopping-cart ml-3'></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 mb-4'>
              <div className='card card-ecommerce'>
                <div className='view overlay'>
                  <img
                    src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/3.jpg'
                    className='img-fluid'
                    alt='sample image'
                  />
                  <a>
                    <div className='mask rgba-white-slight'></div>
                  </a>
                </div>

                <div className='card-body'>
                  <h5 className='card-title mb-1'>
                    <strong>
                      <a className='dark-grey-text'>iMac</a>
                    </strong>
                  </h5>
                  <span className='badge badge-danger mb-2'>bestseller</span>

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
                      <i className='fas fa-star grey-text'></i>
                    </li>
                  </ul>

                  <div className='card-footer pb-0'>
                    <div className='row mb-0'>
                      <span className='float-left'>
                        <strong>1439 ₹</strong>
                      </span>
                      <span className='float-right'>
                        <a
                          className=''
                          data-toggle='tooltip'
                          data-placement='top'
                          title='Add to Cart'
                        >
                          <i className='fas fa-shopping-cart ml-3'></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='row justify-content-center mt-3 mb-4'>
            <nav className='mb-4'>
              <ul className='pagination pagination-circle pg-blue mb-0'>
                <li className='page-item disabled clearfix d-none d-md-block'>
                  <a className='page-link waves-effect waves-effect'>First</a>
                </li>

                <li className='page-item disabled'>
                  <a
                    className='page-link waves-effect waves-effect'
                    aria-label='Previous'
                  >
                    <span aria-hidden='true'>«</span>
                    <span className='sr-only'>Previous</span>
                  </a>
                </li>

                <li className='page-item active'>
                  <a className='page-link waves-effect waves-effect'>1</a>
                </li>
                <li className='page-item'>
                  <a className='page-link waves-effect waves-effect'>2</a>
                </li>
                <li className='page-item'>
                  <a className='page-link waves-effect waves-effect'>3</a>
                </li>
                <li className='page-item'>
                  <a className='page-link waves-effect waves-effect'>4</a>
                </li>
                <li className='page-item'>
                  <a className='page-link waves-effect waves-effect'>5</a>
                </li>

                <li className='page-item'>
                  <a
                    className='page-link waves-effect waves-effect'
                    aria-label='Next'
                  >
                    <span aria-hidden='true'>»</span>
                    <span className='sr-only'>Next</span>
                  </a>
                </li>

                <li className='page-item clearfix d-none d-md-block'>
                  <a className='page-link waves-effect waves-effect'>Last</a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </div>

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
                  role='listbox'
                >
                  <div className='carousel-item active'>
                    <img
                      src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/1.jpg'
                      alt='First slide'
                      className='img-fluid'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/2.jpg'
                      alt='Second slide'
                      className='img-fluid'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/20.jpg'
                      alt='Third slide'
                      className='img-fluid'
                    />
                  </div>
                </div>

                <a
                  className='carousel-control-prev'
                  href='#carousel-thumb1'
                  role='button'
                  data-slide='prev'
                >
                  <span
                    className='carousel-control-prev-icon'
                    aria-hidden='true'
                  ></span>
                  <span className='sr-only'>Previous</span>
                </a>
                <a
                  className='carousel-control-next'
                  href='#carousel-thumb1'
                  role='button'
                  data-slide='next'
                >
                  <span
                    className='carousel-control-next-icon'
                    aria-hidden='true'
                  ></span>
                  <span className='sr-only'>Next</span>
                </a>
              </div>

              <div className='row mb-4'>
                <div className='col-md-12'>
                  <div id='mdb-lightbox-ui'></div>
                  <div className='mdb-lightbox no-margin'>
                    <figure className='col-md-4'>
                      <a
                        href='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/1.jpg'
                        data-size='1600x1067'
                      >
                        <img
                          src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/1.jpg'
                          className='img-fluid'
                        />
                      </a>
                    </figure>
                    <figure className='col-md-4'>
                      <a
                        href='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/2.jpg'
                        data-size='1600x1067'
                      >
                        <img
                          src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/2.jpg'
                          className='img-fluid'
                        />
                      </a>
                    </figure>
                    <figure className='col-md-4'>
                      <a
                        href='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/20.jpg'
                        data-size='1600x1067'
                      >
                        <img
                          src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/20.jpg'
                          className='img-fluid'
                        />
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-5 text-center text-md-left'>
              <h2 className='h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4'>
                iPad PRO
              </h2>
              <span className='badge badge-danger product mb-4 ml-xl-0 ml-4'>
                bestseller
              </span>
              <span className='badge badge-success product mb-4 ml-2'>
                SALE
              </span>

              <h3 className='h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4'>
                <span className='red-text font-weight-bold'>
                  <strong>$1449</strong>
                </span>
                <span className='grey-text'>
                  <small>
                    <s>$1789</s>
                  </small>
                </span>
              </h3>

              <div className='font-weight-normal'>
                <p className='ml-xl-0 ml-4'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente nesciunt atque nemo neque ut officiis nostrum
                  incidunt maiores, magni optio et sunt suscipit iusto nisi
                  totam quis, nobis mollitia necessitatibus.
                </p>

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
                        <i className='fas fa-heart mr-2' aria-hidden='true'></i>{' '}
                        Add to Wishlist
                      </button>
                      <button className='btn btn-primary btn-rounded'>
                        <i
                          className='fas fa-cart-plus mr-2'
                          aria-hidden='true'
                        ></i>{' '}
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Bootstrap;
