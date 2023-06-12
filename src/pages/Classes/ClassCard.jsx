import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useSelectedClasses from "../../hooks/useSelectedClasses";

const ClassCard = (singleClass) => {
  const { user } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useSelectedClasses();

  const handleSelectClass = (singleClass) => {
    const { _id, name, image, price } = singleClass;

    if (user && user?.email) {
      const selectedClass = {
        classId: _id,
        name,
        image,
        price,
        email: user?.email,
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
            refetch();
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
            disabled={disabled}
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
