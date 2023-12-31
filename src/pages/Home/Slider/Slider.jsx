import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css/pagination";
import "swiper/css";

import slide1 from "../../../assets/banner/drums.jpg";
import slide2 from "../../../assets/banner/guitar.jpg";
import slide3 from "../../../assets/banner/piano.jpg";
import slide4 from "../../../assets/banner/violin.jpg";
import slide5 from "../../../assets/banner/song.jpg";
// import { Zoom } from "react-awesome-reveal";

const Slider = () => {
  return (
    <section className="my-20 w-[90%] mx-auto">
      <h2
        className="text-5xl text-center font-bold mb-20"
        data-aos="fade-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        Join and Learn
      </h2>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="rounded-lg ">
          <img
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="rounded-lg"
            src={slide1}
            alt=""
          />
          <h3 className="text-4xl text-center mt-10">Drums</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="rounded-lg"
            src={slide2}
            alt=""
          />
          <h3 className="text-4xl  text-center mt-10">Guitar</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="rounded-lg"
            src={slide5}
            alt=""
          />
          <h3 className="text-4xl  text-center mt-10">Songs</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="rounded-lg"
            src={slide3}
            alt=""
          />
          <h3 className="text-4xl  text-center mt-10">Piano</h3>
        </SwiperSlide>
        <p className="my-4">.</p>
        <SwiperSlide>
          <img
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="rounded-lg"
            src={slide4}
            alt=""
          />
          <h3 className="text-4xl  text-center mt-10">Violin</h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
