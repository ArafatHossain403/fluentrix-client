import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
       {
        path:'/',
        element:<Home></Home>
       },
       {
        path:'classes',
        element:<Classes></Classes>,
       },
       {
        path:'instructors',
        element:<Instructors></Instructors>,
       },
       {
        path:'login',
        element:<Login></Login>,
       },
       {
        path:'signup',
        element:<SignUp></SignUp>,
       }
      ]
    },
  ]);
