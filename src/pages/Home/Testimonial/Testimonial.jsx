import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaDotCircle, FaRegDotCircle, FaRegStar, FaStar } from "react-icons/fa";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://b7a12-summer-camp-server-side-siddiquenaim.vercel.app/client-reviews"
      )
      .then((res) => setReviews(res.data))
      .catch((error) => {
        console.error("Error fetching popular instructors:", error);
      });
  }, []);

  const [currentTab, setCurrentTab] = useState(0);

  const handleCurrentTab = (i) => {
    setCurrentTab(i);
  };

  return (
    <div className="my-10">
      <h2
        className="text-5xl text-center font-bold mb-20"
        data-aos="fade-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        Client Reviews!
      </h2>
      <div className="lg:flex justify-center items-center space-y-6">
        <div className="lg:w-[80%] mx-auto">
          {reviews?.map((client, i) => {
            return (
              <div key={client?._id}>
                {currentTab === i && (
                  <div className="flex flex-col lg:w-[75%] mx-auto bg-[#ddd4e877] py-14 px-16 rounded-ss-3xl rounded-ee-3xl h-[360px] lg:h-[280px] space-y-4">
                    <div
                      className="mx-auto text-center"
                      data-aos="zoom-in"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="1000"
                    >
                      <img
                        className="h-[60px] w-[60px] rounded-full"
                        src={client?.photo}
                        alt=""
                      />
                    </div>
                    <div
                      className="flex gap-4 items-center justify-center"
                      data-aos="zoom-in"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="1000"
                    >
                      <div className="text-center">
                        <p className="font-semibold">{client?.clientName}</p>
                        <small>{client?.role}</small>
                      </div>
                    </div>
                    <p
                      className="flex items-center justify-center"
                      data-aos="zoom-in"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="1000"
                    >
                      &ldquo;{client?.review}&rdquo;
                    </p>
                    <div
                      className="flex justify-center mt-auto"
                      data-aos="zoom-in"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="1000"
                    >
                      <div className="flex justify-center items-center">
                        {[...Array(Number(client?.rating))].map((_, index) => (
                          <FaStar key={index} className="text-orange-500" />
                        ))}
                        {[...Array(Number(5 - client?.rating))].map(
                          (_, index) => (
                            <FaRegStar
                              key={index}
                              className="text-orange-500"
                            />
                          )
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {/* sl_ide control */}
        <div className="lg:w-[20%] mx-auto flex lg:flex-col items-center justify-center">
          {reviews?.map((client, i) => {
            return (
              <div
                className="mx-auto"
                key={client?._id}
                onClick={() => handleCurrentTab(i)}
              >
                {currentTab === i ? (
                  <FaDotCircle className="my-2" />
                ) : (
                  <FaRegDotCircle className="my-2 cursor-pointer" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
