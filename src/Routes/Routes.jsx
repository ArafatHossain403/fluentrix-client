import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DashBoard from "../Layout/DashBoard";
import SelectedClasses from "../Pages/DashBoard/StudentDashBoard/SelectedClasses";
import EnrolledClasses from "../Pages/DashBoard/StudentDashBoard/EnrolledClasses";
import Payment from "../Pages/DashBoard/StudentDashBoard/Payment";
import PaymentHistory from "../Pages/DashBoard/StudentDashBoard/PaymentHistory";
import ManageClasses from "../Pages/DashBoard/AdminDashBoard/ManageClasses";
import ManageUsers from "../Pages/DashBoard/AdminDashBoard/ManageUsers";
import AddClass from "../Pages/DashBoard/InstructorDashBoard/AddClass";
import MyClass from "../Pages/DashBoard/InstructorDashBoard/MyClass";

import PrivateRoute from "./PrivateRoute";
import Error from "../Pages/Errorpage/Error";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children: [
      {
        path: "selectedClasses",
        element: <SelectedClasses></SelectedClasses>,
      },
      {
        path: "enrolledClasses",
        element: <EnrolledClasses></EnrolledClasses>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "manageClasses",
        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>,
      },
      {
        path: "manageUsers",
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>,
      },
      {
        path: "addClass",
        element: <AddClass></AddClass>,
      },
      {
        path: "myClass",
        element: <MyClass></MyClass>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      
      

    ],
  },
]);
