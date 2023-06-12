import axios from "axios";
import React, { useEffect, useState } from "react";
import ClassCard from "./ClassCard";
import { Typewriter } from "react-simple-typewriter";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://b7a12-summer-camp-server-side-siddiquenaim.vercel.app/all-approved-classes"
      )
      .then((res) => setClasses(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-[95%] md:w-[90%] mx-auto my-20">
      <div className="text-5xl text-center mb-10">
        <Typewriter
          words={["All Classes"]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {classes.map((singleClass) => (
          <ClassCard
            singleClass={singleClass}
            key={singleClass._id}
          ></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
