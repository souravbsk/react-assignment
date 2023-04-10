import React from "react";
import {
  Area,
  AreaChart,
  CartesianAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MarksAreaChart = ({ assignmentData }) => {
  console.log(assignmentData);
  return (
    <div>
        <AreaChart width={900} height={400} data={assignmentData}>
          <CartesianGrid />
          <XAxis dataKey="assignmentName" />
          <YAxis dataKey="marks" />
          <Tooltip />
          <Area dataKey="marks" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
    </div>
  );
};

export default MarksAreaChart;
