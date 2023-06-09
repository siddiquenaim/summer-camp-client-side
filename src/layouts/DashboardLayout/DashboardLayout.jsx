import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../pages/Shared/Navbar/Navbar";
import { FaBook, FaBookReader, FaUsers, FaWallet } from "react-icons/fa";
import { useState } from "react";

const DashboardLayout = () => {
  const isStudent = false;
  const isAdmin = true;
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
                  <NavLink to="">
                    <FaBookReader></FaBookReader> Booked Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="enrolled-classes">
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
                  <NavLink to="enrolled-classes">
                    <FaBook></FaBook> Pending Classes
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
