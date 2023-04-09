import React from "react";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import AppliedJobList from "../AppliedJobList/AppliedJobList";

const AppliedJobs = () => {
  const [JobData, storeApplyJob] = useLoaderData();

  return (
    <div>
      <Banner>Your Applied Jobs List</Banner>
      <div className="container">
        <div className="text-right mt-32">
          <select name="" className="bg-gray-100 py-2 px-3 duration-200 font-semibold rounded-md" id="">
            <option value="remote">Remote</option>
            <option value="onsite">Onsite</option>
          </select>
        </div>
        <div className=" flex flex-col gap-6 mt-8">
          {storeApplyJob.map((job) => (
            <AppliedJobList key={job.id} job={job}></AppliedJobList>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
