import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";
import Banner from "../Pages/Home/Banner/Banner";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;