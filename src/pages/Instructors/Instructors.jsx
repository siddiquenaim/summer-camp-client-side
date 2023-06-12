import axios from "axios";
import React, { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";
import { Typewriter } from "react-simple-typewriter";

const Instructors = () => {
  const [allInstructors, setAllInstructors] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://b7a12-summer-camp-server-side-siddiquenaim.vercel.app/all-instructors"
      )
      .then((res) => setAllInstructors(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="w-[95%] md:w-[90%] mx-auto my-20">
      <div className="text-5xl text-center mb-10">
        <Typewriter
          words={["Our Expert Instructors"]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {allInstructors?.map((instructor) => (
          <InstructorCard
            key={instructor._id}
            instructor={instructor}
          ></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
