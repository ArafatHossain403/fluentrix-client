import { Link, Outlet } from "react-router-dom";
import { SiGoogleclassroom } from "react-icons/si";
import { GrCheckboxSelected } from "react-icons/gr";
import { MdPayment } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaUsersBetweenLines } from "react-icons/fa";

const DashBoard = () => {
  const isAdmin = true;

  return (
    <div>
      <div className="drawer lg:drawer-open mt-8">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}

          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            <div>
              <p className="font-bold text-3xl mb-6 text-center text-emerald-600">
                fluentrix
              </p>
            </div>
            {/* Sidebar content here */}
            {
                isAdmin ?
                <>
                 <li>
              <Link to="/">
                <FaHome></FaHome>Home
              </Link>
            </li>
            <li>
              <Link to="/dashboard/manageClasses">
              <SiGoogleclassroom></SiGoogleclassroom> Manage Classes
              </Link>
            </li> <li>
              <Link to="/dashboard/manageUsers">
                <FaUsersBetweenLines></FaUsersBetweenLines> Manage Users
              </Link>
            </li>


                </>:
                <>
                <li>
              <Link to="/">
                <FaHome></FaHome> Home
              </Link>
            </li>
            <li>
              <Link to="/dashboard/selectedClasses">
                <GrCheckboxSelected></GrCheckboxSelected> Selected Class
              </Link>
            </li>
            <li>
              <Link to="/dashboard/enrolledClasses">
                <SiGoogleclassroom></SiGoogleclassroom> Enrolled Class
              </Link>
            </li>
            <li>
              <Link to="/dashboard/paymentHistory">
                <MdPayment></MdPayment> Payment History
              </Link>
            </li>

                </>
            }
            
            <div className="divider"></div>
            <li>
              <Link to="/">
                <MdPayment></MdPayment>Home
              </Link>
            </li>
            <li>
              <Link to="/classes">
                <MdPayment></MdPayment>Classes
              </Link>
            </li>
            <li>
              <Link to="/instructors">
                <MdPayment></MdPayment>Instructors
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
