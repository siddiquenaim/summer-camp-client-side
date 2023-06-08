import axios from "axios";
import React, { useEffect, useState } from "react";

const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5000/popular-classes")
      .then((res) => setPopularClasses(res.data))
      .catch((error) =>
        console.error("Error fetching popular classes:", error)
      );
  });
  return (
    <div className="w-[95%] md:w-[90%] mx-auto my-20">
      <h2 className="text-5xl text-center font-bold mb-10">
        Our Popular Classes!
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {popularClasses?.map((singleClass) => (
          <div
            key={singleClass?.id}
            className="card w-96 bg-base-100 shadow-xl"
          >
            <div className="card-body">
              <h2 className="card-title">{singleClass.name}</h2>
              <p>Instructor: {singleClass.instructor}</p>
              <p>Number of students: {singleClass.numberOfStudents}</p>
              <p>Available Seats: {singleClass.availableSeats}</p>
            </div>
            <figure>
              <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
