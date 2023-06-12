import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import useSelectedClasses from "../../../hooks/useSelectedClasses";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const allSelectedClass = useSelectedClasses();

  const navItems = (
    <>
      <li>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#fff",
            background: isActive ? "#8B61C8" : "#6E479E",
          })}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#fff",
            background: isActive ? "#8B61C8" : "#6E479E",
          })}
          to="/instructors"
        >
          Instructors
        </NavLink>
      </li>

      <li>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#fff",
            background: isActive ? "#8B61C8" : "#6E479E",
          })}
          to="/classes"
        >
          Classes
        </NavLink>
      </li>

      {user ? (
        <>
          <li>
            <Link onClick={handleLogOut}>Logout</Link>
          </li>

          <li>
            <div className="indicator">
              <span className="indicator-item badge badge-secondary">
                {allSelectedClass[0]?.length}
              </span>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#fff",
                  background: isActive ? "#8B61C8" : "#6E479E",
                })}
                to="/dashboard/"
              >
                Dashboard
              </NavLink>
            </div>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#fff",
                background: isActive ? "#8B61C8" : "#6E479E",
              })}
              to="login"
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#fff",
                background: isActive ? "#8B61C8" : "#6E479E",
              })}
              to="register"
            >
              Register
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="bg-[#6E479E] text-white">
      <nav className="navbar  lg:w-[90%] mx-auto">
        <div className="navbar-start">
          <img
            src="https://static.vecteezy.com/system/resources/previews/014/390/592/original/white-acoustic-guitar-3d-rendering-icon-on-transparent-background-png.png"
            className="h-[40px] w-[40px]"
            alt=""
          />
          <Link
            to="/"
            className="normal-case text-2xl font-extrabold logo lg:flex mx-2"
          >
            Melodica
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1"> {navItems}</ul>
        </div>
        <div className="navbar-end">
          {user && (
            <div className="avatar">
              <div className="w-12 rounded-full hover:ring ring-primary ring-offset-base-100 ring-offset-2 hover:cursor-pointer">
                <img src={user?.photoURL} />
              </div>
            </div>
          )}
          <div className="dropdown dropdown-left">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  text-black"
            >
              {navItems}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
