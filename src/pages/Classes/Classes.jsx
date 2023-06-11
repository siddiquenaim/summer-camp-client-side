import axios from "axios";
import React, { useEffect, useState } from "react";
import ClassCard from "./ClassCard";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/all-approved-classes")
      .then((res) => setClasses(res.data))
      .catch((err) => console.error(err));
  });
  return (
    <div className="w-[95%] md:w-[90%] mx-auto my-20">
      <h2 className="text-5xl text-center font-bold mb-10">
        All the classes! {classes.length}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {classes.map((singleClass) => (
          <ClassCard
            singleClass={singleClass}
            key={singleClass._id}
          ></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
