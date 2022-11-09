import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../Assets/Images/logo.png';
import Items from '../Item/Items';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div className=" lg:flex items-center justify-around grid-container">
        <div className="px-3">
          <h1 className="pb-4 text-5xl font-bold text-white">
            Hi! Welcome To <br />
          </h1>
          <h1 className="pb-10 text-5xl font-bold text-white">The WatchTime</h1>

          <p className="text-xl">
            We Make It Easy To Learn About Watches <br /> And Hobby Watch Making
          </p>
        </div>
        <div className=" image-container">
          <img className="image-width" src={image1} alt="" />
        </div>
      </div>
      <Items />
      <div className="text-center pb-36">
        <Link to={'/services'}>
          <button className="btn btn-primary w-32  inline-block ">See All</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
