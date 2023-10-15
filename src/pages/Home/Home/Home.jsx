import Banner from "../Banner/Banner";
import ChatBot from "../ChatBot/ChatBot";
import ContactUs from "../ContactUs/ContactUs";
import Feedback from "../Feedback/Feedback";
import Partners from "../Partners/Partners";
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
      <Partners></Partners>
      <ContactUs></ContactUs>
      <ChatBot></ChatBot>
    </div>
  );
};

export default Home;
