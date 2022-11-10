/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewForm from '../Review/ReviewForm';
import ProductReviews from './ProductReviews';

const Details = () => {
  const { _id, ProductName, desc, image } = useLoaderData();
  const [productReviews, setProductReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews`)
      .then((res) => res.json())
      .then((data) => setProductReviews(data));
  }, []);
  //console.log(productReviews);

  return (
    <div className="pb-36">
      <div className="px-24 pb-24">
        <div className="card card-side bg-base-300 shadow-xl text-white ">
          <figure>
            <img src={image} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">{ProductName}</h2>
            <p>{desc}</p>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 px-24 gap-24">
        {productReviews.map((productReview) => {
          if (_id === productReview.serviceId) {
            return (
              <ProductReviews
                key={productReview._id}
                productReview={productReview}></ProductReviews>
            );
          }
        })}
      </div>
      <div>
        <ReviewForm id={_id} />
      </div>
    </div>
  );
};

export default Details;
