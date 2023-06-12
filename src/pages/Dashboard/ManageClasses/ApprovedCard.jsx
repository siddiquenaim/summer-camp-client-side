const ApprovedCard = ({ singleApprovedClass }) => {
  const {
    name,
    image,
    instructorName,
    instructorEmail,
    availableSeats,
    price,
    status,
  } = singleApprovedClass;
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
      </div>
    </div>
  );
};

export default ApprovedCard;
