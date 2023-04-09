import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import {
  CalendarDaysIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { addToCart } from "../../Utilites/FakeDb";
import { toast } from "react-hot-toast";

const JobDetails = () => {
  const jobViewData = useLoaderData();
  const {
    address,
    salary,
    contact_info,
    description,
    experiences,
    responsibility,
    id,
    job_title,
    requirements,
  } = jobViewData;

  // submit job data to database
  const handleApplyJob = (id) => {
    const isSubmit = addToCart(id);
    console.log(isSubmit);
    if(isSubmit){
        toast.error("already you apply this job")
    }
    else{
        toast.success("Apply Success")
    }
  };

  return (
    <div>
      <Banner>View Job Information</Banner>
      <div className="container mt-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-3">
            <p className="text-base text-gray-500">
              <span className="text-black leading-9 font-bold">
                Job Description:
              </span>{" "}
              {description}
            </p>
            <p className="text-base leading-9 text-gray-500">
              <span className="text-black font-bold">Job Responsibility:</span>{" "}
              {responsibility}
            </p>
            <p className="text-base leading-9 text-gray-500">
              <span className="text-black font-bold">
                Educational Requirements:
              </span>
              <br />
              {requirements}
            </p>
            <p className="text-base leading-9 text-gray-500">
              <span className="text-black font-bold">Experiences:</span> <br />
              {experiences}
            </p>
          </div>
          <div className="md:col-span-1">
            <div className="bg-indigo-50 p-8 rounded-md">
              <div>
                <h3 className="text-lg font-semibold pb-6 border-b-2 border-indigo-200">
                  Job Details
                </h3>
                <div className="my-7">
                  <div className="flex items-center mb-4 gap-2">
                    <CurrencyDollarIcon className="w-5 h-5 text-indigo-400"></CurrencyDollarIcon>{" "}
                    <p className="text-sm text-gray-500 font-medium">
                      <span className="text-gray-800 font-semibold">
                        Salary:
                      </span>{" "}
                      {salary} (Per Month)
                    </p>
                  </div>
                  <div className="flex items-center mb-4 gap-2">
                    <CalendarDaysIcon className="w-5 h-5 text-indigo-400"></CalendarDaysIcon>
                    <p className="text-sm text-gray-500 font-medium">
                      <span className="text-gray-800 font-semibold">
                        Job Title:
                      </span>{" "}
                      {job_title}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold pb-4 border-b-2 border-indigo-200">
                  Contact Information
                </h3>
                <div className="mt-7">
                  <div className="flex items-center mb-4 gap-2">
                    <PhoneIcon className="w-5 h-5 text-indigo-400"></PhoneIcon>
                    <p className="text-sm text-gray-500 font-medium">
                      <span className="text-gray-800 font-semibold">
                        Phone:{" "}
                      </span>
                      {contact_info.phone}
                    </p>
                  </div>
                  <div className="flex items-center mb-4 gap-2">
                    <EnvelopeIcon className="w-5 h-5 text-indigo-400"></EnvelopeIcon>
                    <p className="text-sm text-gray-500 font-medium">
                      <span className="text-gray-800 font-semibold">
                        Email:{" "}
                      </span>
                      {contact_info.email}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="w-5 h-5 text-indigo-400"></MapPinIcon>
                    <p className="text-sm text-gray-500 font-medium">
                      <span className="text-gray-800 font-semibold">
                        Address:{" "}
                      </span>
                      {address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => handleApplyJob(id)}
              className="primary-btn w-full mt-6"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
