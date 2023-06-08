import React from "react";

const InstructorCard = ({ instructor }) => {
  const { name, email, classes, image, classNames } = instructor;
  return (
    <div className="bg-white rounded-lg border p-8 flex flex-col md:flex-row md:items-center">
      <div className="flex items-center justify-center md:w-1/2">
        <img
          src={image}
          alt={name}
          className="w-64 h-64 rounded-full md:w-1/2"
        />
      </div>
      <div className="md:w-1/2 md:pl-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{name}</h2>
        <p className="text-gray-600 mb-2">{email}</p>
        <p className="text-gray-600 mb-4">
          Number of classes taken:{" "}
          <span className="font-semibold">{classes}</span>
        </p>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            Classes taken:
          </h3>
          <ul className="list-disc ml-6 mb-4">
            {classNames.map((className, i) => (
              <li key={i} className="text-gray-600">
                {className}
              </li>
            ))}
          </ul>
          <a
            href="/classes"
            className="block w-1/2 bg-purple-700 text-white text-center py-2 rounded-lg font-semibold hover:bg-purple-800 transition-colors duration-300"
          >
            See Classes
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
