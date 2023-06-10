import { Typewriter } from "react-simple-typewriter";
import useAuth from "../../../hooks/useAuth";

const DashboardHome = () => {
  const { user } = useAuth();

  console.log(user);

  return (
    <div>
      <h1 className="text-3xl">
        <Typewriter
          words={[
            `Hello, ${user?.displayName}`,
            "Let the music flow, a symphony of emotions and unity.",
          ]}
          loop={10}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
    </div>
  );
};

export default DashboardHome;
