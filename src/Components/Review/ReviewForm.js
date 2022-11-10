/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../Contexts/AuthProvider';

const ReviewForm = ({ id }) => {
  const { user } = useContext(AuthContext);
  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const message = form.message.value;
    // console.log(message);

    const review = {
      user: user.displayName,
      email: user.email,
      photo: user.photoURL,
      serviceId: id,
      text: message
    };
    fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(review)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success('Review Added Successfully');
          form.reset();
        }
      })
      .catch((error) => console.error(error.message));
  };

  return (
    <div>
      {user?.email ? (
        <>
          <div className="form-container pt-10 px-24">
            <form onSubmit={handleReview}>
              <textarea
                name="message"
                className="textarea border border-white  w-96 h-440"
                placeholder="review"
                required></textarea>
              <br />
              <button className="btn btn-primary"> Submit </button>
            </form>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ReviewForm;
