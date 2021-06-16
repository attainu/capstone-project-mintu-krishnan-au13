import React from 'react';
import StarRatings from 'react-star-ratings';

export const showAverage = (p) => {
  if (p && p.ratings) {
    let ratingsArray = p && p.ratings;
    let total = [];
    let length = ratingsArray.length;

    ratingsArray.map((r) => total.push(r.star));
    let totalReduced = total.reduce((p, n) => p + n, 0);
    let highest = length * 5;
    let result = (totalReduced * 5) / highest;

    return (
      // <div className='text-center pt-1 pb-3'>
      //   <span>
      //     <StarRating
      //       starDimension='25px'
      //       starSpacing='2px'
      //       starRatedColor='blue'
      //       rating={result}
      //       editing={false}
      //     />
      //   </span>
      //   <span
      //     className='mb-4 ml-4 ml-xl-0 text-muted text-md-left'
      //     style={{ size: '10px' }}
      //   >
      //     ({p.ratings.length} Reviews)
      //   </span>
      // </div>
      <>
        <p className=' product mb-0 ml-xl-0 ml-4 text-md-left'>
          <StarRatings
            rating={result}
            starRatedColor='orange'
            numberOfStars={5}
            starDimension='25px'
            name='rating'
            editing={false}
          />
        </p>
        <span
          className='mb-4 ml-4 ml-xl-0 text-muted text-md-left'
          style={{ size: '10px' }}
        >
          ({length} Reviews)
        </span>
      </>
    );
  } else {
    return (
      <>
        <p className=' product mb-0 ml-xl-0 ml-4 text-md-left'>
          <StarRatings
            rating={0}
            starRatedColor='orange'
            numberOfStars={5}
            starDimension='25px'
            name='rating'
            editing={false}
          />
        </p>
        <span
          className='mb-4 ml-4 ml-xl-0 text-muted text-md-left'
          style={{ size: '10px' }}
        >
          (No Reviews)
        </span>
      </>
    );
  }
};
