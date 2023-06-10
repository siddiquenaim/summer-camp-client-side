import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useInstructor from "../hooks/useInstructor";

const InstructorRoute = ({ children }) => {
  const location = useLocation();
  const [isInstructor, isInstructorLoading] = useInstructor();
  console.log(isInstructor);
  const { user, loading } = useAuth();
  if (loading || isInstructorLoading) {
    return (
      <div className="">
        <div className="h-[400px] flex justify-center items-center">
          <progress className="progress w-56"></progress>
        </div>
      </div>
    );
  }
  if (user && isInstructor) {
    return children;
  } else {
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }
};

export default InstructorRoute;
