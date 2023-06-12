const PopularClassCard = ({ classes }) => {
  const { name, instructor, price, image,availableSeats } = classes;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="image"
          className="rounded-xl h-30 w-full"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p><span className="font-bold text-orange-700">Instructor: </span>{instructor}</p>
        <p><span className="font-bold text-orange-700">Price: </span>$ {price}</p>
        <p><span className="font-bold text-orange-700">Available Seat: </span> {availableSeats}</p>

        <div className="card-actions">
          <button className="btn btn-warning">Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default PopularClassCard;
