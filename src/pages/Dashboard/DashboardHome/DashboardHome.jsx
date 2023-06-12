import { Typewriter } from "react-simple-typewriter";
import useAuth from "../../../hooks/useAuth";

const DashboardHome = () => {
  const { user } = useAuth();

  console.log(user);

  return (
    <div className="mx-auto w-[90%] flex justify-center items-center">
      <div>
        <h1 className="text-3xl mt-20">
          <Typewriter
            words={[`Hello, ${user?.displayName}`, "Welcome to your dashboard"]}
            loop={10}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>

        <div>
          <lottie-player
            src="https://assets10.lottiefiles.com/packages/lf20_1pxqjqps.json"
            background="transparent"
            speed="1"
            style={{ width: "400px", height: "400px" }}
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
