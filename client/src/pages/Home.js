import React from 'react';
import Jumbotron from '../components/cards/Jumbotron';
import NewArrivals from '../components/home/NewArrivals';
import BestSellers from '../components/home/BestSellers';
import BannerCarousel from '../components/cards/BannerCarousel';
import CategorySlider from '../components/cards/CategorySlider';

const Home = () => {
  return (
    <>
      {/* <div className='jumbotron text-danger h1 font-weight-bold text-center'>
        <Jumbotron text={['Latest Products', 'New Arrivals', 'Best Sellers']} />
      </div> */}
      <div className='mt-5'>
        <BannerCarousel />
      </div>
      <CategorySlider />

    
      <NewArrivals />

     
      <BestSellers />

      <br />
      <br />
    </>
  );
};

export default Home;
