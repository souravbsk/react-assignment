import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import JobDetails from './Components/JobDetails/JobDetails'
import ViewJobData from './Utilites/ViewJobData'


const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:() => fetch("/jobsData.json"),
      },
      {
        path:"/jobs/:jobId",
        element:<JobDetails></JobDetails>,
        loader: ViewJobData
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
