import { useQuery } from "@tanstack/react-query";
import { FaChalkboardTeacher, FaShieldAlt, FaTrashAlt } from "react-icons/fa";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleMakeInstructor = (user) => {
    console.log(user);
  };

  const handleMakeAdmin = (user) => {
    console.log(user);
  };

  const handleDelete = (user) => {
    console.log(user);
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
              <th className="text-right">Role</th>
              <th className="text-center">Make Instructor</th>
              <th className="text-center">Make Admin</th>
              <th className="text-center">Delete User</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td className="text-right">{user.role}</td>

                <td className="text-center">
                  <p
                    onClick={() => handleMakeInstructor(user)}
                    className="btn btn-ghost bg-green-400  text-white"
                  >
                    <FaChalkboardTeacher></FaChalkboardTeacher>
                  </p>
                </td>
                <td className="text-center">
                  <p
                    onClick={() => handleMakeAdmin(user)}
                    className="btn btn-ghost bg-orange-400  text-white"
                  >
                    <FaShieldAlt></FaShieldAlt>
                  </p>
                </td>
                <td className="text-center">
                  <p
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost bg-red-600  text-white"
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
