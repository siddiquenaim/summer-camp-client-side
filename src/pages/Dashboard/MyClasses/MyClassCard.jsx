import React from "react";

const MyClassCard = ({ myClass }) => {
  const {
    name,
    image,
    instructorName,
    instructorEmail,
    price,
    availableSeats,
    status,
    totalStudents,
    feedback,
  } = myClass;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          className="h-[250px] w-[250px] rounded-xl"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p className="my-4">
          Status:{" "}
          <span
            className={`text-white font-bold py-2 px-3 rounded-lg ${
              status === "Pending" && "bg-orange-600"
            } ${status === "Approved" && "bg-green-800"} ${
              status === "Denied" && "bg-red-800"
            }`}
          >
            {status}
          </span>
        </p>
        <p>Number of students: {totalStudents}</p>
        {feedback ? <p>Feedback: {feedback}</p> : ""}
        <div className="card-actions">
          <button className="btn btn-primary">Update</button>
        </div>
      </div>
    </div>
  );
};

export default MyClassCard;
