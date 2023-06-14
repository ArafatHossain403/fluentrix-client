import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const PopularClassCard = ({ classes }) => {
  const { name, instructor, price, image, availableSeats, _id } = classes;

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleCoursesCart = (classes) => {
    console.log(classes);
    if(user && user.email){
      const enrollClass = {classId: _id, name, instructor, image, price , availableSeats,email:user.email}
      fetch('http://localhost:5000/coursesCart', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(enrollClass)
      })
      .then(res => res.json())
      .then(data => {
          if(data.insertedId){
               
              Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Course Added Successfully',
                  showConfirmButton: false,
                  timer: 2000
                })
          }
      })
  }
  else{
      Swal.fire({
          title: 'Login to Enroll the Course',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login now!'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state: {from: location}})
          }
        })
  }
  };

  return (
    <div className="card w-96 bg-green-200 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="image" className="rounded-xl h-30 w-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>
          <span className="font-bold text-orange-700">Instructor: </span>
          {instructor}
        </p>
        <p>
          <span className="font-bold text-orange-700">Price: </span>$ {price}
        </p>
        <p>
          <span className="font-bold text-orange-700">Available Seat: </span>{" "}
          {availableSeats}
        </p>

        <div className="card-actions">
          <button
            onClick={() => handleCoursesCart(classes)}
            className="btn btn-warning"
          >
             Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularClassCard;
