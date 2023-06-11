const DeniedCard = ({ singleDeniedClass }) => {
  const { name, image } = singleDeniedClass;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img className="h-[240px] w-[360px]" src={image} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default DeniedCard;
