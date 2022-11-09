/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
  const { _id, ProductName, desc, image } = useLoaderData();
  return (
    <div className="px-24 ">
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
  );
};

export default Details;
