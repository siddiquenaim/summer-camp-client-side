import axios from "axios";
import React, { useEffect, useState } from "react";

const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState();
  useEffect(() => {
    axios
      .get(
        "https://b7a12-summer-camp-server-side-siddiquenaim.vercel.app/popular-classes"
      )
      .then((res) => setPopularClasses(res.data))
      .catch((error) =>
        console.error("Error fetching popular classes:", error)
      );
  });
  return (
    <div className="w-[95%] md:w-[90%] mx-auto my-20">
      <h2
        className="text-5xl text-center font-bold mb-20"
        data-aos="fade-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        Our Popular Classes!
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {popularClasses?.map((singleClass) => (
          <div
            key={singleClass?._id}
            className="card w-full shadow-xl border bg-[#6e479e3c]"
          >
            <div
              className="card-body text-center"
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <h2 className="text-center text-xl font-bold">
                {singleClass?.name}
              </h2>
              <p>Instructor: {singleClass?.instructorName}</p>
              <p>Number of students: {singleClass?.totalStudents}</p>
              <p>Available Seats: {singleClass?.availableSeats}</p>
            </div>
            <figure>
              <img
                className="h-[225px] w-[300px]"
                src={singleClass?.image}
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
