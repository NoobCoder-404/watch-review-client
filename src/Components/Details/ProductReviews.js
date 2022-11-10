/* eslint-disable react/prop-types */
import React from 'react';

const ProductReviews = ({ productReview }) => {
  const { user, photo, text } = productReview;
  return (
    <div>
      <div>
        <div className="card-body border border-slate-50 rounded-lg">
          <div className="flex items-center mb-4 space-x-4">
            <img className="w-10 h-10 rounded-full" src={photo} alt="" />
            <div className="space-y-1 font-medium dark:text-white">
              <p>{user} </p>
            </div>
          </div>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
