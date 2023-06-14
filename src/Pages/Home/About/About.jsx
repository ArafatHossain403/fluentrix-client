import { useState } from "react";
import { useEffect } from "react";
import AboutCard from "./AboutCard";

const About = () => {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    fetch("about.json")
      .then((res) => res.json())
      .then((data) => {
        setAbout(data);
      });
  }, []);

  return (
    <div>
      <p className="text-center">--------------------------------</p>
      <h2 className="text-center text-3xl font-bold text-orange-600 my-5">
        Welcome TO Fluentrix
      </h2>
      <p className="text-center">--------------------------------</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-7">
        {about.map((about) => (
          <AboutCard key={about.id} about={about}></AboutCard>
        ))}
      </div>
    </div>
  );
};

export default About;
