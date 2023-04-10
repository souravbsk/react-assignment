import React from "react";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import MarksAreaChart from "../MarksAreaChart/MarksAreaChart";

const Statistics = () => {
  const assignmentData = useLoaderData();
  let totalMarks = 0;
  for (const markData of assignmentData) {
    totalMarks += markData.marks;
  }
  const averageMarks = totalMarks / assignmentData.length;
  return (
    <div>
      <Banner>My Assignment Results</Banner>
      <div className="md:mt-32 mt-8 container space-y-6">
        <h2 className="text-2xl font-semibold text-center">
          Average Marks: {averageMarks}
        </h2>
        <MarksAreaChart assignmentData={assignmentData}></MarksAreaChart>
      </div>
    </div>
  );
};

export default Statistics;
