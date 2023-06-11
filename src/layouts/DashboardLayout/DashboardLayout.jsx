import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../pages/Shared/Navbar/Navbar";
import { FaBook, FaBookReader, FaUsers, FaWallet } from "react-icons/fa";
import useAdmin from "../../hooks/useAdmin";
import useStudent from "../../hooks/useStudent";
import useInstructor from "../../hooks/useInstructor";

const DashboardLayout = () => {
  const [isStudent] = useStudent();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {isStudent && (
              <>
                <li className="mb-3">
                  <NavLink to="/dashboard/booked-classes">
                    <FaBookReader></FaBookReader> Booked Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/enrolled-classes">
                    <FaWallet></FaWallet> Enrolled Classes
                  </NavLink>
                </li>
              </>
            )}

            {isAdmin && (
              <>
                <li className="mb-3">
                  <NavLink to="/dashboard/all-users">
                    <FaUsers></FaUsers> All Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manage-classes">
                    <FaBook></FaBook> Manage Classes
                  </NavLink>
                </li>
              </>
            )}

            {isInstructor && (
              <>
                <li className="mb-3">
                  <NavLink to="/dashboard/my-classes">
                    <FaUsers></FaUsers> My classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/add-a-class">
                    <FaBook></FaBook> Add a class
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
