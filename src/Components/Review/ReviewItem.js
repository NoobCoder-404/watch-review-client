/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';

const ReviewItem = ({ review }) => {
  console.log(review);
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="card-body border border-slate-50 rounded-lg">
        <div className="flex items-center mb-4 space-x-4">
          <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" />
          <div className="space-y-1 font-medium dark:text-white">
            <p>{user.displayName} </p>
          </div>
        </div>
        <p>{review.text}</p>
      </div>
    </div>
  );
};

export default ReviewItem;
