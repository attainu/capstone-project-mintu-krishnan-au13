import React, { useEffect, useState } from 'react';
import { getProduct, getRelated, productStar } from '../functions/product';
import SingleProduct from '../components/cards/SingleProduct';
import { useSelector } from 'react-redux';
import ProductCard from '../components/cards/ProductCard';

const Product = ({ match }) => {
  const [product, setProduct] = useState({});
  const [star, setStar] = useState(0);
  const [related, setRelated] = useState([]);

  const { user } = useSelector((state) => ({ ...state }));

  const { slug } = match.params;

  useEffect(() => {
    loadSingleProduct();
  }, [slug]);

  useEffect(() => {
    if (product.ratings && user) {
      let existingRatingObject = product.ratings.find(
        (ele) => ele.postedBy.toString() === user._id.toString()
      );
      existingRatingObject && setStar(existingRatingObject.star);
    }
  });

  const loadSingleProduct = () => {
    getProduct(slug).then((res) => {
      setProduct(res.data);
      getRelated(res.data._id).then((res) => {
        setRelated(res.data);
      });
    });
  };

  const onStarClick = (newRating, name) => {
    productStar(name, newRating, user.token).then((res) => {
      setStar(newRating);
      loadSingleProduct();
    });
  };

  return (
    <div className='container '>
      <div className='row pt-4'>
        <SingleProduct
          product={product}
          onStarClick={onStarClick}
          star={star}
        />
      </div>

      <div className='row'>
        <div className='col text-center pt-5 pb-5'>
          <hr />
          <h4>Related Products</h4>

          <div className='row'>
            {related.map((product) => (
              <div key={product._id} className='col-lg-3 col-md-6 mb-4'>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Product;
