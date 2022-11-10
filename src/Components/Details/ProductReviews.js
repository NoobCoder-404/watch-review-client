/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../Contexts/AuthProvider';

const ProductReviews = ({ productReview }) => {
  const { user } = useContext(AuthContext);
  const { _id, photo, text, email } = productReview;

  const handleDelete = (id) => {
    const proceed = confirm('Are you sure want to delete');
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: 'DELETE'
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast('Deleted Successfully');
          window.location.reload();
        });
    }
  };

  return (
    <div>
      <div className="card-body border border-slate-50 rounded-lg">
        <div className="flex items-center mb-4 space-x-4">
          <img className="w-10 h-10 rounded-full" src={photo} alt="" />
          <div className="space-y-1 font-medium dark:text-white">
            <p>{productReview.user} </p>
          </div>
        </div>
        <p>{text}</p>

        {user?.email === email ? (
          <>
            <div className="flex justify-center gap-3">
              <button className="btn btn-blue bg-red-500 border-none ">Edit</button>
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-blue  bg-red-500 border-none">
                Delete
              </button>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ProductReviews;
