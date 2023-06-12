import axios from "axios";
import React, { useEffect, useState } from "react";

const PopularInstructors = () => {
  const [popularInstructors, setPopularInstructors] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://b7a12-summer-camp-server-side-siddiquenaim.vercel.app/popular-instructors"
      )
      .then((res) => setPopularInstructors(res.data))
      .catch((error) => {
        console.error("Error fetching popular instructors:", error);
      });
  }, []);

  return (
    <div className="w-[95%] md:w-[90%] mx-auto my-20">
      <h2
        className="text-5xl text-center font-bold mb-20"
        data-aos="fade-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        Our Top Instructors!
      </h2>
      <div className="grid md:grid-cols-2 gap-5">
        {popularInstructors.map((singleInstructor) => (
          <div
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
            key={singleInstructor._id}
            className="card lg:card-side bg-base-100 shadow-xl border border-[#6e479e3c]"
          >
            <figure>
              <img
                className="h-[400px] w-[360px]"
                src={singleInstructor.image}
                alt="Album"
              />
            </figure>
            <div className="card-body flex items-center justify-center">
              <h2 className="card-title text-center text-3xl">
                {singleInstructor.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
