import { useForm } from "react-hook-form";

import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
  

  const onSubmit = (data) => {
    const formData = new FormData();
        formData.append('image', data.image[0])
 

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name,  instructor, email, availableSeats, price } = data;
          const newItem = {
            name,
            image: imgURL,
            instructor,
            email,
            availableSeats, 
            price: parseFloat(price)
          };
          console.log(newItem);
          axiosSecure.post("/classes", newItem).then((data) => {
            console.log( data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Class added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>fluentrix | Add Class</title>
      </Helmet>

      <h2 className="text-center font-bold text-3xl"> Add A Class</h2>
      <div className="w-full px-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">Class Name</span>
            </label>
            <input
              type="text"
              placeholder="Class Name"
              {...register("name", { required: true, maxLength: 120 })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Class Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
          <div className="flex my-4">
          
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">Instructor Name</span>
            </label>
            <input
              type="text"
              placeholder="instructor"
              {...register("instructor", { required: true, maxLength: 120 })}
              className="input input-bordered w-full "
            />
          </div>
          </div>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">Instructor Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true, maxLength: 120 })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">Available Seat</span>
            </label>
            <input
              type="number"
              placeholder="Available Seat"
              {...register("availableSeats", { required: true, maxLength: 120 })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">Price</span>
            </label>
            <input
              type="number"
              placeholder=" $ Price"
              {...register("price", { required: true, maxLength: 120 })}
              className="input input-bordered w-full "
            />
          </div>
          
        
          
          <input className="btn btn-sm mt-4" type="submit" value="Add Class" />
        </form>
      </div>
    </div>
  );
};

export default AddClass;
