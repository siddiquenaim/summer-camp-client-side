import React from "react";

const ClassCard = (singleClass) => {
  //   console.log(singleClass.singleClass.name);

  const handleSelectClass = (selectedClass) => {
    console.log(selectedClass);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl border">
      <figure className="px-10 pt-10">
        <img
          src={singleClass.singleClass.image}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{singleClass.singleClass.name}</h2>
        <p>The best class ever</p>
        <div className="card-actions">
          <button
            onClick={() => handleSelectClass(singleClass.singleClass)}
            className="btn btn-primary"
          >
            Select Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
