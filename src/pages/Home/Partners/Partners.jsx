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
        <img src={ibanez} className="h-[120px] mx-auto" alt="" />
        <img src={gibson} className="h-[120px] mx-auto" alt="" />
        <img src={beatles} className="h-[120px] mx-auto" alt="" />
        <img src={gretsch} className="h-[120px] mx-auto" alt="" />
        <img src={fender} className="h-[120px] mx-auto" alt="" />
      </div>
    </div>
  );
};

export default Partners;
