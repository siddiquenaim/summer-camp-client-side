import React from "react";
import useMyClasses from "../../../hooks/useMyClasses";
import MyClassCard from "./MyClassCard";

const MyClasses = () => {
  const [myClasses, refetch] = useMyClasses();
  console.log(myClasses);
  return (
    <div className="w-[90%] mx-auto p-10">
      <h2 className="mt-10 text-3xl text-center">
        All the classes you added are here
      </h2>
      <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-5">
        {myClasses.map((myClass) => (
          <MyClassCard key={myClass._id} myClass={myClass}></MyClassCard>
        ))}
      </div>
    </div>
  );
};

export default MyClasses;
