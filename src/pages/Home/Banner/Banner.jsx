import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img1 from "../../../assets/banner/guitar.jpg";
import img2 from "../../../assets/banner/violin.jpg";
import img3 from "../../../assets/banner/drums.jpg";
import img4 from "../../../assets/banner/piano.jpg";

const Banner = () => {
  return (
    <Carousel
      className="text-center"
      autoPlay={true}
      interval={3000}
      infiniteLoop={true}
    >
      <div>
        <img src={img1} />
      </div>
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img3} />
      </div>
      <div>
        <img src={img4} />
      </div>
    </Carousel>
  );
};

export default Banner;
