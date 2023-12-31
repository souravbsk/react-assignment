import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import JobDetails from "./Components/JobDetails/JobDetails";
import ViewJobData from "./Utilites/ViewJobData";
import { Toaster } from "react-hot-toast";
import AppliedJobs from "./Components/AppliedJobs/AppliedJobs";
import { AppliedJobData } from "./Utilites/AppliedJobData";
import Statistics from "./Components/Statistics/Statistics";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Blog from "./Components/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/jobsData.json"),
      },
      {
        path: "/jobs/:jobId",
        element: <JobDetails></JobDetails>,
        loader: ViewJobData,
      },
      {
        path: "appliedjobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: AppliedJobData,
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/assignmentMark.json"),
      },
      {
        path:"blog",
        element:<Blog></Blog>
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster />
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
