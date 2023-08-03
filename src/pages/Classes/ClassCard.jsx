import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const ClassCard = ({ singleClass }) => {
  const { _id, name, image, price, availableSeats, instructorName } =
    singleClass;
  const { user } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelectClass = () => {
    if (user && user.email) {
      const selectedClass = {
        classId: _id,
        name,
        image,
        price,
        email: user.email,
      };

      axios
        .post(
          "https://b7a12-summer-camp-server-side-siddiquenaim.vercel.app/add-selected-class",
          selectedClass
        )
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Class selected successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            setDisabled(true);
          }
        })
        .catch((error) => console.log(error));
    } else {
      Swal.fire({
        title: "Please login to select a class!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#6E479E",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div
      className={`"card w-full mx-auto bg-base-100 border rounded-lg shadow-xl border" ${
        availableSeats === 0 && "bg-red-600"
      }`}
    >
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl h-[225px] w-[300px] mx-auto"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>
          <span className="font-bold">Instructor:</span> {instructorName}
        </p>
        <p>
          <span className="font-bold">Price:</span> {price}
        </p>
        <p>
          <span className="font-bold">Available Seats:</span> {availableSeats}
        </p>
        <div className="card-actions">
          {availableSeats !== 0 ? (
            <button
              disabled={disabled}
              onClick={handleSelectClass}
              className="btn text-white bg-[#6E479E] hover:bg-[#1E0935]"
            >
              Select Class
            </button>
          ) : (
            <p>No seat available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
