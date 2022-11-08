import React from 'react';
import image from '../../Assets/Images/logo.png';

const Home = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="px-36">
        <h1 className="pb-3 text-5xl font-bold text-white">
          Hi! Welcome To <br />
        </h1>
        <h1 className="pb-10 text-5xl font-bold text-white">The WatchTime</h1>
        <p className="text-xl">
          We Make It Easy To Learn About Watches <br /> And Hobby Watch Making
        </p>
      </div>
      <div className="pr-36">
        <img className="96" src={image} alt="" />
      </div>
    </div>
  );
};

export default Home;
