import { useEffect, useState } from "react";
import PopularInstructorCard from "./PopularInstructorCard";


const PopularInstructor = () => {
  const [instructor, setInstructor] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => {
        const popularInstructor = data.slice(0, 6);
        setInstructor(popularInstructor);
      });
  }, []);

  return (
    <div>
        <p className="text-center">--------------------------------</p>
        <h2 className="text-center text-3xl font-bold text-orange-600 my-8">Our Popular Instructors</h2>
        <p className="text-center">--------------------------------</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-7">
            {
                instructor.map(instructor => <PopularInstructorCard key={instructor._id} instructor={instructor}></PopularInstructorCard>)
            }
        </div>

        
    </div>
);
};

export default PopularInstructor;
