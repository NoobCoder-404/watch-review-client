import React from 'react';
import image1 from '../../Assets/Images/logo.png';
import './Home.css';

const Home = () => {
  return (
    <div className=" lg:flex items-center justify-around grid-container">
      <div className="">
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
  );
};

export default Home;
