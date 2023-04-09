import React from "react";
import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const AppliedJobList = ({ job }) => {
  const {
    company_logo,
    company_name,
    address,
    salary,
    id,
    job_type,
    location,
    job_title,
  } = job;
  return (
    <div className="p-7 items-stretch border flex-col md:flex-row flex justify-between md:items-center gap-8 rounded-lg">
      <figure className="bg-gray-200 w-60 h-60 rounded-md grid place-items-center">
        <img className="w-32 h-10 object-fill" src={company_logo} alt="" />
      </figure>
      <div className="mr-auto">
        <h3 className="font-semibold text-2xl text-slate-700">{job_title}</h3>
        <p className="text-lg font-semibold mt-2 text-gray-500">
          {company_name}
        </p>
        <div className="flex items-center gap-4 mt-4">
          <button className="border border-indigo-400 text-sm px-5 py-2 rounded-md font-semibold text-indigo-400">
            {location}
          </button>
          <button className="border border-indigo-400 px-5 text-sm py-2 rounded-md font-semibold text-indigo-400">
            {job_type}
          </button>
        </div>
        <div className="mt-4 flex-col md:flex-row flex md:items-center gap-6">
          <p className="flex items-center gap-2">
            <MapPinIcon className="w-5 h-5 text-gray-500"></MapPinIcon>{" "}
            <span className="text-base font-semibold text-gray-500">
              {address}
            </span>
          </p>
          <p className="flex items-center gap-2">
            <CurrencyDollarIcon className="w-5 h-5 text-gray-500"></CurrencyDollarIcon>{" "}
            <span className="text-base font-semibold text-gray-500">
              Salary : {salary}
            </span>
          </p>
        </div>
      </div>
        <div>
          <Link to={`/jobs/${id}`}>
            <button className="primary-btn">View Details</button>
          </Link>
        </div>
    </div>
  );
};

export default AppliedJobList;
