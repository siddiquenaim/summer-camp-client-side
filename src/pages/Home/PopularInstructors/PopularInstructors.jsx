import axios from "axios";
import React, { useEffect, useState } from "react";

const PopularInstructors = () => {
  const [popularInstructors, setPopularInstructors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/popular-instructors")
      .then((res) => setPopularInstructors(res.data))
      .catch((error) => {
        console.error("Error fetching popular instructors:", error);
      });
  }, []);

  return (
    <div className="w-[95%] md:w-[90%] mx-auto my-20">
      <h2 className="text-5xl text-center font-bold mb-10">
        Our Expert Instructors!
      </h2>
      <div className="grid md:grid-cols-2 gap-5">
        {popularInstructors.map((singleInstructor) => (
          <div
            key={singleInstructor.id}
            className="card lg:card-side bg-base-100 shadow-xl border border-[#6e479e3c]"
          >
            <figure>
              <img
                className="h-[400px] w-[360px]"
                src={singleInstructor.image}
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{singleInstructor.name}</h2>
              <p>Number of classes: {singleInstructor.classes}</p>
              <p>Number of students: {singleInstructor.numberOfStudents}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
