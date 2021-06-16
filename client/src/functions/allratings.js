import React from 'react';
import StarRatings from 'react-star-ratings';

export const showAllAverage = (p) => {
  if (p && p.ratings) {
    let ratingsArray = p && p.ratings;
    let total = [];
    let length = ratingsArray.length;
    ratingsArray.map((r) => total.push(r.star));
    let totalReduced = total.reduce((p, n) => p + n, 0);
    let result = totalReduced / length;
    // let highest = length * 5;
    // let result = (totalReduced * 5) / highest;

    return (
      <div
        className='row m-4 align-items-center'
        style={{ justifyContent: 'center' }}
      >
        <div>
          <StarRatings
            rating={result}
            starRatedColor='blue'
            numberOfStars={5}
            starDimension='19px'
            starSpacing='2px'
            name='rating'
            editing={false}
          />
        </div>
        <div className='pt-1'>
          <span
            className='text-muted ml-2 text-md-left'
            style={{ fontSize: '15px' }}
          >
            ({length})
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className='row m-4 align-items-center'
        style={{ justifyContent: 'center' }}
      >
        <div>
          <StarRatings
            rating={0}
            starRatedColor='red'
            numberOfStars={5}
            starDimension='19px'
            starSpacing='2px'
            name='rating'
            editing={false}
          />
        </div>
        <div className='pt-1'>
          <span
            className='text-muted ml-2 text-md-left'
            style={{ fontSize: '15px' }}
          >
            ({0})
          </span>
        </div>
      </div>
    );
  }
};
