import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/all-classes");
    return res.data;
  });

  console.log(classes);

  return (
    <div>
      <h1>All the classes are here: pending, approved and denied</h1>
    </div>
  );
};

export default ManageClasses;
