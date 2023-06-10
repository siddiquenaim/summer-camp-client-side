import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Hello, {user.displayName}</h1>
    </div>
  );
};

export default DashboardHome;
