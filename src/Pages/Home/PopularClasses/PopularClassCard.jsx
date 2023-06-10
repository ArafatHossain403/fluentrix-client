const PopularClassCard = ({ classes }) => {
  const { name, instructor, price, image } = classes;
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
        <p>{instructor}</p>
        <p><span>Price:</span>$ {price}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default PopularClassCard;
