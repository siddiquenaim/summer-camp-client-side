import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css/pagination";
import "swiper/css";

import slide1 from "../../../assets/banner/drums.jpg";
import slide2 from "../../../assets/banner/guitar.jpg";
import slide3 from "../../../assets/banner/piano.jpg";
import slide4 from "../../../assets/banner/violin.jpg";
import slide5 from "../../../assets/banner/song.jpg";
import { Zoom } from "react-awesome-reveal";

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
      <Zoom>
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
            <img className="rounded-lg" src={slide1} alt="" />
            <h3 className="text-4xl text-center mt-10 text-black">Drums</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-lg" src={slide2} alt="" />
            <h3 className="text-4xl  text-center mt-10 text-black">Guitar</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-lg" src={slide5} alt="" />
            <h3 className="text-4xl  text-center mt-10 text-black">Songs</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-lg" src={slide3} alt="" />
            <h3 className="text-4xl  text-center mt-10 text-black">Piano</h3>
          </SwiperSlide>
          <p className="my-4">.</p>
          <SwiperSlide>
            <img className="rounded-lg" src={slide4} alt="" />

            <h3 className="text-4xl  text-center mt-10 text-black">Violin</h3>
          </SwiperSlide>
        </Swiper>
      </Zoom>
    </section>
  );
};

export default Slider;
