import About from "../About/About";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>fluentrix | Home </title>
      </Helmet>
      <Banner></Banner>
      <About></About>
      <PopularClasses></PopularClasses>
      <PopularInstructor></PopularInstructor>
    </div>
  );
};

export default Home;
