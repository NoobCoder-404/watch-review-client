/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../Contexts/AuthProvider';

const ReviewForm = ({ id }) => {
  const { user } = useContext(AuthContext);
  const refreshPage = () => {
    window.location.reload();
    toast.success('Review Added Successfully');
  };
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
    fetch('https://watch-review-server.vercel.app/reviews', {
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
                placeholder="review"></textarea>
              <br />
              <button onClick={refreshPage} className="btn btn-primary">
                Submit
              </button>
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
