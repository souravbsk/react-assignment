import React, { useState } from "react";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import AppliedJobList from "../AppliedJobList/AppliedJobList";

const AppliedJobs = () => {
  const [JobData, storeApplyJob] = useLoaderData();

  const [filterValue, setFilterValue] = useState(storeApplyJob);
  const handleFilterValue = (e) => {
    const filterValue = e.target.value;
    const filterValueLowerCase = filterValue.toLowerCase();
    const filterData = storeApplyJob.filter(
      (jobData) => jobData.location.toLowerCase() === filterValueLowerCase
    );
    setFilterValue(filterData);
  };

  return (
    <div>
      <Banner>Your Applied Jobs List</Banner>
      <div className="container">
        <div className="text-right mt-8 md:mt-32">
          <select
            name=""
            onChange={handleFilterValue}
            className="bg-gray-100 py-2 px-3 duration-200 font-semibold rounded-md"
            id=""
            defaultValue={"Select"}
          >
            <option value="Select"  disabled>
              Filter By
            </option>
            <option value="remote">Remote</option>
            <option value="onsite">Onsite</option>
          </select>
        </div>
        <div className=" flex flex-col gap-6 mt-8">
          {filterValue.map((job) => (
            <AppliedJobList key={job.id} job={job}></AppliedJobList>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
