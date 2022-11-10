/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';
import ReviewForm from '../Review/ReviewForm';

const Details = () => {
  const { _id, ProductName, desc, image } = useLoaderData();
  return (
    <div>
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
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 px-24">
        <Review id={_id} />
        <ReviewForm id={_id} />
      </div>
    </div>
  );
};

export default Details;
