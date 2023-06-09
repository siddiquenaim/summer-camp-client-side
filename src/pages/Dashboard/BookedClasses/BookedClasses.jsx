import React from "react";
import useSelectedClasses from "../../../hooks/useSelectedClasses";
import { FaTrashAlt } from "react-icons/fa";

const BookedClasses = () => {
  const [allSelectedClass] = useSelectedClasses();
  const totalPrice = allSelectedClass.reduce(
    (sum, singleClass) => singleClass.price + sum,
    0
  );
  const handleDelete = (singleClass) => {
    console.log(singleClass);
  };

  return (
    <div>
      <div className="lg:flex justify-evenly w-full gap-8">
        <h2 className="text-3xl font-bold">
          Total Classes Booked: {allSelectedClass.length}
        </h2>
        <h2 className="text-3xl font-bold">Total Price: {totalPrice}</h2>
        <button className="btn bg-[black] text-white normal-case">
          Proceed Payment
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table my-10">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th className="text-right">Price</th>
              <th className="text-center">Delete Booking</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allSelectedClass.map((singleClass, i) => (
              <tr key={singleClass._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={singleClass.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{singleClass.name}</td>
                <td className="text-right">{singleClass.price}</td>

                <td className="text-center">
                  <p
                    onClick={() => handleDelete(singleClass)}
                    className="btn btn-ghost bg-red-600  text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookedClasses;
