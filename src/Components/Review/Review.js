/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';

const Review = ({ id }) => {
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState({});
  console.log(id);
  const url = `http://localhost:5000/reviews?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, [user?.email]);

  return (
    <div>
      <h1 className="text-5xl">you have {review.length}</h1>
      <article className="w-64 border border-slate-50 rounded-lg p-5">
        <div className="flex items-center mb-4 space-x-4">
          <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" />
          <div className="space-y-1 font-medium dark:text-white">
            <p>{user.displayName} </p>
          </div>
        </div>

        <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
          This is my third Invicta Pro Diver. They are just fantastic value for money. This one
          arrived yesterday and the first thing I did was set the time, popped on an identical strap
          from another Invicta and went in the shower with it to test the waterproofing.... No
          problems.
        </p>
      </article>
    </div>
  );
};

export default Review;
