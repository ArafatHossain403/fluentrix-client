import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import useCourseCart from "../../../hooks/useCourseCart";

const SelectedClasses = () => {

    const [coursesCart, refetch] = useCourseCart();
//   const [selectedClasses, setSelectedClasses] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:5000/coursesCart")
//       .then((res) => res.json())
//       .then((data) => {
//         setSelectedClasses(data);
//       });
//   }, []);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coursesCart/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
                refetch()
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  const totalPrice = coursesCart.reduce(
    (sum, classes) => classes.price + sum,
    0
  );

  return (
    <div className="w-full mx-4">
      <Helmet>
        <title>fluentrix | Selected Classes</title>
      </Helmet>
      <div className="uppercase font-semibold h-[50px] flex justify-evenly items-center ">
        <h2>
          <span className="">Selected Classes:</span> {coursesCart.length}
        </h2>
        <h2>
          <span className="">Total Price:</span> $
          {parseFloat(totalPrice).toFixed(2)}
        </h2>
        <button className="btn btn-warning">Pay</button>
      </div>
      <div className="divider"></div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th> Course Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th> Action</th>
            </tr>
          </thead>
          <tbody>
            {coursesCart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                      {/* <div className="text-sm opacity-50"></div> */}
                    </div>
                  </div>
                </td>
                <td>
                  {item.instructor}
                  {/* <br />
                      <span className="badge badge-ghost badge-sm">
                        Desktop Support Technician
                      </span> */}
                </td>
                <td>${item.price}</td>
                <td>
                  {/* <button className="btn btn-ghost btn-xs"><MdOutlineDeleteForever></MdOutlineDeleteForever></button> */}
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-error"
                  >
                    <RiDeleteBin2Fill></RiDeleteBin2Fill>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClasses;
