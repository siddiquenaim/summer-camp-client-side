import Banner from "../Banner/Banner";
import ChatBot from "../ChatBot/ChatBot";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Slider from "../Slider/Slider";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Slider></Slider>
      <PopularInstructors></PopularInstructors>
      <PopularClasses></PopularClasses>
      <Testimonial></Testimonial>
      {/* <ChatBot></ChatBot> */}
    </div>
  );
};

export default Home;
