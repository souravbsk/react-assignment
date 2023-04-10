import React, { useContext, useState } from "react";
import JobCard from "../JobCard/JobCard";
import { useLoaderData } from "react-router-dom";

const FeaturedJobs = () => {
  const jobsData = useLoaderData();

  const [showbtn, setShowbtn] = useState(false);
  let datas = [];

  if (showbtn) {
    datas = jobsData;
  } else {
    datas = jobsData.slice(0, 4);
  }

  return (
    <section className="md:mt-32 mt-8 container">
      <div className="text-center space-y-2">
        <h2 className="font-bold text-slate-700 text-2xl  md:text-4xl">
          Featured Jobs
        </h2>
        <p className="text-slate-500">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {datas.map((job) => (
          <JobCard key={job.id} job={job}></JobCard>
        ))}
      </div>
      <div className="mt-10 text-center">
        <button onClick={() => setShowbtn(!showbtn)} className="primary-btn">
          {showbtn ? "Less All Jobs" : "Show All Jobs"}
        </button>
      </div>
    </section>
  );
};

export default FeaturedJobs;
