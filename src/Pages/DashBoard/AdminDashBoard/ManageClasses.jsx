import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";

const ManageClasses = () => {
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await fetch("http://localhost:5000/classes");
    return res.json();
  });

  return (
    <div className="w-full">
      <Helmet>
        <title>fluentrix | Manage Classes</title>
      </Helmet>

      <h2>All Classes {classes.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th> Course</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Available Seats</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classes, index) => (
              <tr key={classes._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={classes.image} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{classes.name}</div>
                      {/* <div className="text-sm opacity-50">
                        {classes.instructor}
                      </div> */}
                    </div>
                  </div>
                </td>
                <td>
                  {classes.instructor}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {classes.email}
                  </span>
                </td>
                <td>{classes.price}</td>
                <td className="text-center">{classes.availableSeats}</td>
                <td>
                  <div>
                    <div className="">
                      <button className="btn btn-ghost btn-xs">Approve</button>
                    </div>
                    <div className="">
                      <button className="btn btn-ghost btn-xs">Deny</button>
                    </div>
                    <div className="">
                      <button className="btn btn-ghost btn-xs">Pending</button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
