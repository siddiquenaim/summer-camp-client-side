import { Link } from "react-router-dom";

const DeniedCard = ({ singleDeniedClass }) => {
  const { _id, name, image, feedback } = singleDeniedClass;

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img className="h-[240px] w-[360px]" src={image} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Click the button to watch on Jetflix app.</p>
        {feedback ? (
          <i>
            Feedback Already sent: <br />
            <span> `{feedback}`</span>
          </i>
        ) : (
          <Link to={`/dashboard/feedback/${_id}`}>
            <div className="card-actions justify-end">
              <button className="btn btn-error">Feedback</button>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default DeniedCard;
