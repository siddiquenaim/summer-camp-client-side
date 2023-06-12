import axios from "axios";
import Swal from "sweetalert2";

const PendingCard = ({ singlePendingClass, refetch }) => {
  const { _id, name, image } = singlePendingClass;

  const handleApproveClass = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to approve the class: ${name}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, approve it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(
            `https://b7a12-summer-camp-server-side-siddiquenaim.vercel.app/approve-class/${_id}`
          )
          .then((res) => {
            if (res.data.modifiedCount) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: `${name} is approved!`,
                showConfirmButton: false,
                timer: 1500,
              });
              refetch();
            }
          });
      }
    });
  };

  const handleDenyClass = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to deny the class: ${name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, deny it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(
            `https://b7a12-summer-camp-server-side-siddiquenaim.vercel.app/deny-class/${_id}`
          )
          .then((res) => {
            if (res.data.modifiedCount) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: `${name} is denied!`,
                showConfirmButton: false,
                timer: 1500,
              });
              refetch();
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img className="h-[240px] w-[360px]" src={image} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="justify-end flex flex-row gap-2">
          <button
            onClick={() => handleApproveClass(_id)}
            className="btn btn-success"
          >
            Approve
          </button>
          <button
            onClick={() => handleDenyClass(_id)}
            className="btn btn-error"
          >
            Deny
          </button>
        </div>
      </div>
    </div>
  );
};

export default PendingCard;
