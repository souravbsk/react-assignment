import React from "react";
import heroBannerPicture from "../../assets/All-Images/P3OLGJ1 copy 1.png";

const HeroBanner = () => {
  return (
    <div className="bg-gray-100 pt-8 md:pt-32">
      <div className="flex container flex-col md:flex-row gap-7 md:gap-3 items-center">
        <div className="flex-1 md:pr-10 space-y-6">
          <h1 className="md:text-7xl text-4xl  text-slate-800 font-semibold">
            One Step Closer To Your
            <br  />
            <span className="text-indigo-400">Dream Job</span>
          </h1>
          <p className="text-slate-500">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="primary-btn">Get Started</button>
        </div>
        <div className="flex-1 shrink-0">
          <img className="w-full" src={heroBannerPicture} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
