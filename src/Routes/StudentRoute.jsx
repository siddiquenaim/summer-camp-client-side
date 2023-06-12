import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useStudent from "../hooks/useStudent";

const StudentRoute = ({ children }) => {
  const location = useLocation();
  const [isStudent, isStudentLoading] = useStudent();
  // console.log(isStudent);
  const { user, loading } = useAuth();
  if (loading || isStudentLoading) {
    return (
      <div className="">
        <div className="h-[400px] flex justify-center items-center">
          <progress className="progress w-56"></progress>
        </div>
      </div>
    );
  }
  if (user && isStudent) {
    return children;
  } else {
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }
};

export default StudentRoute;
