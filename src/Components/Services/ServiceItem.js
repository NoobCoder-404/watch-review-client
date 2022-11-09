/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceItem = ({ service }) => {
  const { _id, ProductName, desc, image } = service;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <PhotoProvider>
          <PhotoView src={image}>
            <img src={image} />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{ProductName}</h2>
        <p>{desc.slice(0, 100)}...</p>
        <div className="card-actions justify-end">
          <Link>
            <button className="btn btn-primary">See More </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
