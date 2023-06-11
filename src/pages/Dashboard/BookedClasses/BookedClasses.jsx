import React from "react";
import useSelectedClasses from "../../../hooks/useSelectedClasses";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const BookedClasses = () => {
  const [allSelectedClass, refetch] = useSelectedClasses();
  const totalPrice = allSelectedClass.reduce(
    (sum, singleClass) => singleClass.price + sum,
    0
  );
  const handleDelete = (singleClass) => {
    console.log(singleClass);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(singleClass.classId);
        axios
          .delete(`http://localhost:5000/delete-a-class/${singleClass._id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your class has been deleted.", "success");
              refetch();
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };

  return (
    <div>
      <div className="lg:flex justify-between w-full gap-8">
        <h2 className="text-3xl font-bold">
          Total Classes Booked: {allSelectedClass.length}
        </h2>
        <h2 className="text-3xl font-bold">Total Price: {totalPrice}</h2>
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
              <th className="text-center">Enroll</th>
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

                <td className="text-center">
                  <Link to={`/dashboard/payment/${singleClass._id}`}>
                    <p className="btn btn-ghost btn-sm bg-green-600  text-white">
                      Pay now
                    </p>
                  </Link>
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
