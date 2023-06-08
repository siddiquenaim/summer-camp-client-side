import axios from "axios";
import React, { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";

const Instructors = () => {
  const [allInstructors, setAllInstructors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/all-instructors")
      .then((res) => setAllInstructors(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="w-[95%] md:w-[90%] mx-auto my-20">
      <h2 className="text-5xl text-center font-bold mb-10">
        Our Expert Instructors! {allInstructors.length}
      </h2>
      <div className="grid grid-cols-1 gap-10">
        {allInstructors.map((instructor) => (
          <InstructorCard
            key={instructor.id}
            instructor={instructor}
          ></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
