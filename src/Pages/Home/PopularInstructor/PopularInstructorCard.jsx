import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const PopularInstructorCard = ({ instructor }) => {
  const { name, languageTaught, rating, image, email } = instructor;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10 h-44">
        <img src={image} alt="image" className="rounded-xl w-full" />
      </figure>
      <div className="card-body  ">
        <h2 className="card-title">
          <span className="font-bold">Name: </span> {name}
        </h2>
        <p>
          <span className="font-bold">Language Taught: </span>
          {languageTaught}
        </p>
        <p>
          <span className="font-bold"> Email: </span>
          {email}
        </p>
        {/* <p><span className="font-bold">Rating: </span>{rating}</p> */}
        <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
      </div>
    </div>
  );
};

export default PopularInstructorCard;
