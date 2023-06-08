const Banner = () => {
  return (
    <div className="md:flex  w-[95%] md:w-[90%] mx-auto mt-20">
      <div className="md:w-[50%] flex justify-center items-center">
        <div>
          <h2 className="text-5xl">Start your musical journey today</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            blanditiis itaque deleniti nesciunt, ab dolorum quidem molestias
            laudantium culpa commodi.
          </p>
        </div>
      </div>
      <div className="md:w-[50%]">
        <lottie-player
          src="https://assets8.lottiefiles.com/private_files/lf30_xnjjfyjt.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
};

export default Banner;
