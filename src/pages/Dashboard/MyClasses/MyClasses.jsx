import React from "react";
import useMyClasses from "../../../hooks/useMyClasses";

const MyClasses = () => {
  const [myClasses, refetch] = useMyClasses();
  return (
    <div>
      <h2>All the classes I added are here</h2>
    </div>
  );
};

export default MyClasses;
