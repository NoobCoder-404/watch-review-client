/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';
import { AuthContext } from '../Contexts/AuthProvider';
import ReviewItem from './ReviewItem';

const Review = ({ id }) => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useTitle('Review');
  //console.log(id);
  const url = `http://localhost:5000/reviews?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  // console.log(reviews);

  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-3 px-10 gap-10 pb-36">
      {reviews.map((review) => (
        <ReviewItem key={review._id} review={review}></ReviewItem>
      ))}
    </div>
  );
};

export default Review;
