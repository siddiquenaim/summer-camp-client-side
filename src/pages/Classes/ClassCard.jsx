import React from "react";

const ClassCard = (singleClass) => {
  //   console.log(singleClass.singleClass.name);

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
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
