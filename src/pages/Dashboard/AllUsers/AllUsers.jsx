import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaChalkboardTeacher, FaShieldAlt, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeInstructor = (user) => {
    if (user.role === "Admin" || user.role === "Instructor") {
      return;
    }

    Swal.fire({
      title: `Do you want to make ${user.name} an instructor?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, do it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(
            `https://b7a12-summer-camp-server-side-siddiquenaim.vercel.app/users/instructor/${user._id}`
          )
          .then((res) => {
            if (res.data.modifiedCount) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: `${user.name} is an instructor now!`,
                showConfirmButton: false,
                timer: 1500,
              });
              refetch();
            }
          });
      }
    });
  };

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: `Do you want to make ${user.name} an admin?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, do it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(
            `https://b7a12-summer-camp-server-side-siddiquenaim.vercel.app/users/admin/${user._id}`
          )
          .then((res) => {
            if (res.data.modifiedCount) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: `${user.name} is an admin now!`,
                showConfirmButton: false,
                timer: 1500,
              });
              refetch();
            }
          });
      }
    });
  };

  const handleDelete = (user) => {
    Swal.fire({
      title: `Do you want to delete the user: ${user.name}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://b7a12-summer-camp-server-side-siddiquenaim.vercel.app/delete-user/${user._id}`
          )
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: `${user.name} has been deleted successfully!`,
                showConfirmButton: false,
                timer: 1500,
              });
              refetch();
            }
          });
      }
    });
  };

  return (
    <div>
      <h1>All the broskis are here! {users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table my-10">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Name</th>
              <th className="text-center">Role</th>
              <th className="text-center">Make Instructor</th>
              <th className="text-center">Make Admin</th>
              <th className="text-center">Delete User</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td className="text-center">{user.role}</td>

                <td className="text-center">
                  <p
                    onClick={() => handleMakeInstructor(user)}
                    className={`btn btn-ghost bg-green-400 text-white ${
                      user.role === "Admin" || user.role === "Instructor"
                        ? "disabled"
                        : ""
                    }`}
                    disabled={
                      user.role === "Admin" || user.role === "Instructor"
                    }
                  >
                    <FaChalkboardTeacher />
                  </p>
                </td>
                <td className="text-center">
                  <p
                    onClick={() => handleMakeAdmin(user)}
                    className={`btn btn-ghost bg-orange-400 text-white disabled ${
                      user.role === "Admin" ? "disabled" : ""
                    }`}
                    disabled={user.role === "Admin"}
                  >
                    <FaShieldAlt />
                  </p>
                </td>
                <td className="text-center">
                  <p
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost bg-red-600  text-white disabled"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
