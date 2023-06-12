import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../pages/Shared/Navbar/Navbar";
import { FaBook, FaBookReader, FaUsers, FaWallet } from "react-icons/fa";
import useAdmin from "../../hooks/useAdmin";
import useStudent from "../../hooks/useStudent";
import useInstructor from "../../hooks/useInstructor";
import Footer from "../../pages/Shared/Footer/Footer";
import useAuth from "../../hooks/useAuth";

const DashboardLayout = () => {
  const [isStudent] = useStudent();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const { user } = useAuth();
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content text-center mt-10 ">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden bg-[#6E479E] hover:bg-[#1E0935]"
          >
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {isStudent && (
              <>
                <li>
                  <NavLink to="/dashboard/booked-classes">
                    <FaBookReader></FaBookReader> Booked Classes
                  </NavLink>
                </li>
                <li className="my-4">
                  <NavLink to="/dashboard/enrolled-classes">
                    <FaWallet></FaWallet> Enrolled Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/payment-history">
                    <FaWallet></FaWallet> Payment History
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
            <div className="divider"></div>
            {user?.photoURL && (
              <div className="flex items-center gap-6">
                <div className="avatar">
                  <div className="w-12 rounded-full hover:ring cursor-pointer ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL} />
                  </div>
                </div>
                <div className="font-semibold">{user?.displayName}</div>
              </div>
            )}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
