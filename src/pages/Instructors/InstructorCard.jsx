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
    <div className="bg-white rounded-lg border p-8 flex flex-col md:flex-row md:items-center">
      <div className="flex items-center justify-center md:w-1/2">
        <img
          src={image}
          alt={name}
          className="w-64 h-64 rounded-full md:w-1/2"
        />
      </div>
      <div className="md:w-1/2 md:pl-8 flex items-center justify-center mt-5 md:mt-0 md:justify-start">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{name}</h2>
          <p className="text-gray-600 mb-2">{email}</p>
          <p className="text-gray-600 mb-4">
            Number of classes taken:{" "}
            <span className="font-semibold">{classes.length}</span>
          </p>
          <p className="text-gray-600 mb-4">
            Total number of students:{" "}
            <span className="font-semibold">{totalStudents}</span>
          </p>
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
    </div>
  );
};

export default InstructorCard;
