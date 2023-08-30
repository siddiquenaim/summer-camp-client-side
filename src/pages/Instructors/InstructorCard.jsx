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
        <figure className="h-[400px] w-[350px]">
          <img src={image} className="h-[400px] w-[350px]" alt="Album" />
        </figure>
        <div className="card-body lg:mr-20">
          <h2 className="card-title text-xl mb-3">{name}</h2>
          <p>
            <span className="font-bold"> Number of classes taken:</span>{" "}
            <span>{classes.length}</span>
          </p>
          <p>
            <span className="font-bold">Number of students: </span>
            {totalStudents}
          </p>
          <p>
            <span className="font-bold">Email:</span> {email}
          </p>
          {classes.length > 0 && (
            <div>
              <h3 className="text-lg font-bold">Classes taken:</h3>
              <ul className="list-disc ml-6 mb-4">
                {classes?.map((singleClass, i) => (
                  <li key={i}>{singleClass.name}</li>
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
