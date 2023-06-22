import { Link } from "react-router-dom";

const DeniedCard = ({ singleDeniedClass }) => {
  const {
    _id,
    name,
    image,
    instructorName,
    instructorEmail,
    availableSeats,
    price,
    status,
    feedback,
  } = singleDeniedClass;

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img className="h-[240px] w-[360px]" src={image} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="font-bold text-xl text-center underline">{name}</h2>
        <p>
          <span className="font-bold">Instructor Name:</span> {instructorName}
        </p>
        <p>
          <span className="font-bold">Instructor Email:</span> {instructorEmail}
        </p>
        <p>
          <span className="font-bold">Available Seats:</span> {availableSeats}
        </p>
        <p>
          <span className="font-bold">Price:</span> {price}
        </p>
        <p>
          <span className="font-bold">Status:</span> {status}
        </p>
        {feedback ? (
          <i>
            <span className="font-bold"> Feedback Already sent:</span> <br />
            <span> `{feedback}`</span>
          </i>
        ) : (
          <Link to={`/dashboard/feedback/${_id}`}>
            <div className="card-actions justify-center">
              <button className="btn btn-error">Feedback</button>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default DeniedCard;
