import axios from "axios";
import React, { useEffect, useState } from "react";

const InstructorCard = ({ instructor }) => {
  const { name, email, image } = instructor;
  const [classes, setClasses] = useState([]);
  const [totalStudents, setTotalStudents] = useState(0);

  useEffect(() => {
    axios(
      `https://b7a12-summer-camp-server-side-siddiquenaim-siddiquenaim.vercel.app/classes/instructor/${email}`
    ).then((res) => {
      setClasses(res.data);
      calculateTotalStudents(res.data);
    });
  }, [email]);

  const calculateTotalStudents = (classes) => {
    let total = 0;
    classes.forEach((singleClass) => {
      total += singleClass.totalStudents;
    });
    setTotalStudents(total);
  };

  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={image} className="h-[400px] w-[350px]" alt="Album" />
        </figure>
        <div className="card-body lg:mr-20">
          <h2 className="card-title">{name}</h2>
          <p>Email: {email}</p>
          <p>
            Number of classes taken:{" "}
            <span className="font-semibold">{classes.length}</span>
          </p>
          <p>Number of students: {totalStudents}</p>
          <p>Email: {email}</p>
          {classes.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Classes taken:
              </h3>
              <ul className="list-disc ml-6 mb-4">
                {classes?.map((singleClass, i) => (
                  <li key={i} className="text-gray-600">
                    {singleClass.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default InstructorCard;
