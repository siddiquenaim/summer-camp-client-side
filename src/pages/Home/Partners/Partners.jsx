import React from "react";
import fender from "/fender.png";
import beatles from "/the-beatles.png";
import gibson from "/gibson.png";
import ibanez from "/ibanez.png";
import gretsch from "/gretsch.png";

const Partners = () => {
  return (
    <div className="w-[95%] md:w-[90%] mx-auto my-20">
      <h2
        className="text-5xl text-center font-bold mb-20"
        data-aos="fade-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        Our Partners
      </h2>
      <div className="lg:flex justify-center gap-10">
        <img
          data-aos="fade-right"
          src={ibanez}
          className="h-[120px] mx-auto"
          alt=""
        />
        <img
          data-aos="fade-down"
          src={gibson}
          className="h-[120px] mx-auto"
          alt=""
        />
        <img
          data-aos="zoom-in-up"
          src={beatles}
          className="h-[120px] mx-auto"
          alt=""
        />
        <img
          data-aos="fade-up"
          src={gretsch}
          className="h-[120px] mx-auto"
          alt=""
        />
        <img
          data-aos="fade-left"
          src={fender}
          className="h-[120px] mx-auto"
          alt=""
        />
      </div>
    </div>
  );
};

export default Partners;
