import React from "react";
import Lottie from "react-lottie";
import error from "../../assets/gif/404Page.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: error,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="my-20 container">
      <div className=" max-w-full md:w-4/12 mx-auto">
        <Lottie options={defaultOptions} />
      </div>
      <div className="text-center">
        <Link to="/">
          <button className="primary-btn">Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
