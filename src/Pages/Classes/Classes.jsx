import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import PopularClassCard from "../Home/PopularClasses/PopularClassCard";

const Classes = () => {
  const [classes, setClass] = useState([]);
  useEffect(() => {
    fetch("https://fluentrix-server.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => {
        
        setClass(data);
      });
  }, []);

  return (
    <div>
      <Helmet>
        <title>fluentrix | Classes </title>
      </Helmet>
      <p className="text-center">--------------------------------</p>
      <h2 className="text-center text-3xl font-bold text-orange-600 my-5">
        Our All Classes
      </h2>
      <p className="text-center">--------------------------------</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-7">
            
                {
                    classes.map(classes => <PopularClassCard key={classes._id} classes={classes}></PopularClassCard>)
                }
            </div>
    </div>
  );
};

export default Classes;
