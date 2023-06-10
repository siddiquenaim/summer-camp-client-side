import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const [isAdmin, isAdminLoading] = useAdmin();
  const { user, loading } = useAuth();
  if (loading || isAdminLoading) {
    return (
      <div className="">
        <div className="h-[400px] flex justify-center items-center">
          <progress className="progress w-56"></progress>
        </div>
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  } else {
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }
};

export default AdminRoute;
