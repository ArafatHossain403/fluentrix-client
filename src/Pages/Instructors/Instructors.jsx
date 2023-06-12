
import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import PopularInstructorCard from "../Home/PopularInstructor/PopularInstructorCard";


const Instructors = () => {
    const [instructor, setInstructor] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => {
        
        setInstructor(data);
        console.log(data)
      });
  }, []);
    return (
        <div>
             <Helmet>
        <title>fluentrix | Instructors </title>
        
      </Helmet>
            <p className="text-center">--------------------------------</p>
            <h2 className="text-center text-3xl font-bold text-orange-600 my-5">Our All Instructors</h2>
            <p className="text-center">--------------------------------</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-7">
            {
                instructor.map(instructor => <PopularInstructorCard key={instructor._id} instructor={instructor}></PopularInstructorCard>)
            }

            </div>
            
        </div>
    );
};

export default Instructors;