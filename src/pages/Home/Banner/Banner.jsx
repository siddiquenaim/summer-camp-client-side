import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

import "aos/dist/aos.css";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  const theme = localStorage.getItem("theme");
  return (
    <div className="md:flex text-center md:text-left w-[90%] mx-auto mt-20 mb-10">
      <div className="md:w-[50%] flex justify-center items-center mb-10 md:mb-0">
        <div className="md:w-[80%]">
          <div
            className="text-5xl"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          >
            <Typewriter
              words={["Welcome to Melodica!"]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <br />
          <Fade>
            <p className="my-5 ">
              Embark on a musical journey like never before. <br /> <br />
              Explore our expert-led classes, unlock your creative potential,
              and master the art of music. Whether you're a beginner or a
              seasoned musician, we're here to inspire and guide you every step
              of the way. Get ready to unleash your musical passion and create
              harmonious melodies that resonate with the world.
            </p>
          </Fade>
          <Link to="/classes">
            <button className="btn text-white bg-[#6E479E] hover:bg-[#1E0935]">
              Start Now
            </button>
          </Link>
        </div>
      </div>
      <div className="md:w-[50%]">
        <Fade>
          <lottie-player
            src="https://assets8.lottiefiles.com/private_files/lf30_xnjjfyjt.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </Fade>
      </div>
    </div>
  );
};

export default Banner;
