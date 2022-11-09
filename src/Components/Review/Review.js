import React from 'react';

const Review = () => {
  return (
    <div>
      <article className="w-64 border border-slate-50 rounded-lg p-5">
        <div className="flex items-center mb-4 space-x-4">
          <img
            className="w-10 h-10 rounded-full"
            src="/docs/images/people/profile-picture-5.jpg"
            alt=""
          />
          <div className="space-y-1 font-medium dark:text-white">
            <p>Jese Leos </p>
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
