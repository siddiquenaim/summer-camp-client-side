import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useAuth();

  const handleAddAClass = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const instructorName = form.instructorName.value;
    const instructorEmail = form.instructorEmail.value;
    const price = form.price.value;
    const seats = form.availableSeats.value;
    const availableSeats = parseInt(seats);

    const classInfo = {
      name,
      image,
      instructorName,
      instructorEmail,
      price,
      availableSeats,
      status: "Pending",
      totalStudents: 0,
    };

    console.log(classInfo);

    axios
      .post(
        "https://b7a12-summer-camp-server-side-siddiquenaim.vercel.app/add-a-class",
        classInfo
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Class selected successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="mb-20 mt-10">
      <h1 className="text-5xl text-center font-bold">Add a Class</h1>
      <div className="my-5">
        <form onSubmit={handleAddAClass} className="w-[90%] mx-auto grid">
          <div className="form-control w-[90%]">
            <label className="label">
              <span className="label-text font-bold">Class Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Class Name"
              className="input input-bordered w-[90%]"
              required
            />
          </div>
          <div className="form-control w-[90%]">
            <label className="label">
              <span className="label-text font-bold">Image URL</span>
            </label>
            <input
              name="image"
              type="text"
              placeholder="Image URL"
              className="input input-bordered w-[90%]"
              required
            />
          </div>
          <div className="form-control w-[90%]">
            <label className="label">
              <span className="label-text font-bold">Instructor Name</span>
            </label>
            <input
              name="instructorName"
              type="text"
              placeholder="Instructor Name"
              value={user?.displayName}
              className="input input-bordered w-[90%]"
              readOnly
            />
          </div>
          <div className="form-control w-[90%]">
            <label className="label">
              <span className="label-text font-bold">Instructor Email</span>
            </label>
            <input
              name="instructorEmail"
              type="email"
              placeholder="Instructor Email"
              className="input input-bordered w-[90%]"
              value={user?.email}
              readOnly
            />
          </div>

          <div className="form-control w-[90%]">
            <label className="label">
              <span className="label-text font-bold">Price</span>
            </label>
            <input
              name="price"
              type="number"
              placeholder="Price"
              className="input input-bordered w-[90%]"
              required
            />
          </div>

          <div className="form-control w-[90%]">
            <label className="label">
              <span className="label-text font-bold">Available Seats</span>
            </label>
            <input
              name="availableSeats"
              type="number"
              min="0"
              max="500"
              placeholder="Available Seats"
              className="input input-bordered w-[90%]"
              required
            />
          </div>

          <div className="form-control mx-auto col-span-2">
            <input
              className="cursor-pointer btn-wide btn bg-[#6E479E] hover:bg-violet-800 border-none normal-case text-white mt-8"
              type="submit"
              value="Add a Class"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
