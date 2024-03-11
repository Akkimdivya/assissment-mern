import {
    createBrowserRouter
  } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import SalaryPage from "../Pages/SalaryPage";
import UpdateJob from "../Pages/UpdateJob";
import Login from "../components/Login";
import JobDetails from "../Pages/JobDetails";
import Create from "../Pages/Create";
import SignUp from "../components/SignUP/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/post-job",
            element:<CreateJob/>
        },
        {
          path:"/apply/:id",
          element:<Create/>
        },
        {
          path:"/my-job",
          element:<MyJobs/>
        },
        {
          path:"/salary",
          element:<SalaryPage/>
        },
        {
          path:"edit-job/:id",
          element: <UpdateJob/>,
          loader:({params})=>fetch(`http://localhost:5000/all-jobs/${params.id}`)
        },
        {
          path:"/job/:id",
          element:<JobDetails/>
        }
      ]
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/sign-up",
      element:<SignUp/>
    }
  ]);

export default router;   