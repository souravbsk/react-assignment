import React, { useContext } from "react";
import { JobsContext } from "../../App";
import JobCard from "../JobCard/JobCard";
import { useLoaderData } from "react-router-dom";

const FeaturedJobs = () => {
    const jobsData = useLoaderData();
    // console.log(jobsData);

 
  return (
    <section className="mt-32 container">
      <div className="text-center space-y-2">
        <h2 className="font-bold text-slate-700 text-4xl">Featured Jobs</h2>
        <p className="text-slate-500">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {
            jobsData.map(job => <JobCard key={job.id} job={job}></JobCard>)
        }
      </div>
      <div className="mt-10 text-center">
        <button className="primary-btn">See All Jobs</button>
      </div>
    </section>
  );
};

export default FeaturedJobs;
