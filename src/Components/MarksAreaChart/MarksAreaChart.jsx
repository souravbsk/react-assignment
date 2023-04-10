import React from "react";
import {
  Area,
  AreaChart,
  CartesianAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MarksAreaChart = ({ assignmentData }) => {
  console.log(assignmentData);
  return (
    <div className=" md:w-6/12 mx-auto">
      <ResponsiveContainer height={250}>
        <AreaChart  data={assignmentData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="assignmentName" />
          <YAxis dataKey="marks" />
          <Tooltip/>
          <Legend></Legend>
          <Area dataKey="marks" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MarksAreaChart;
