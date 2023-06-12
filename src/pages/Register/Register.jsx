import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const Register = () => {
  const { signUp, updateUserProfile, logOut } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.password === data.confirmPassword) {
      signUp(data.email, data.password)
        .then((res) => {
          console.log(res);
          updateUserProfile(data.name, data.photo)
            .then(() => {
              const userInfo = {
                name: data.name,
                image: data.photo,
                email: data.email,
                phone: data.phone,
                role: data.role,
              };
              axios
                .post(
                  "https://b7a12-summer-camp-server-side-siddiquenaim.vercel.app/users",
                  userInfo
                )
                .then((res) => {
                  if (res.data.insertedId) {
                    console.log(res);
                    Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "User has been created successfully",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                    setError("");
                    reset();
                    navigate("/login");
                    logOut();
                  }
                });
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    } else {
      setError("The passwords don't match");
    }
  };

  return (
    <div className="bg-white my-20">
      <div>
        <h1 className="text-5xl font-bold text-center mb-10">Register now!</h1>
      </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <lottie-player
              src="https://assets4.lottiefiles.com/private_files/lf30_ONrIKs.json"
              background="transparent"
              speed="1"
              style={({ width: "300px" }, { height: "500px" })}
              loop
              autoplay
            ></lottie-player>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  {...register("photo", { required: true })}
                  type="text"
                  name="photo"
                  placeholder="photo url"
                  className="input input-bordered"
                />
                {errors.photo && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  className="input input-bordered"
                  placeholder="Your Email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone number</span>
                </label>
                <input
                  type="number"
                  className="input input-bordered"
                  placeholder="Your phone number"
                  {...register("phone", { required: true })}
                />
                {errors.phone && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">6 characters required</span>
                )}
                {errors.password?.type === "required" && (
                  <span className="text-red-600">
                    Password field is required
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">
                    Pass must have one upper case, one lower case, one number
                    and one special character.
                  </span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  className="input input-bordered"
                  placeholder="Confirm Password"
                  minLength={6}
                  {...register("confirmPassword", { required: true })}
                />
                {errors.confirmPassword?.type === "required" && (
                  <span className="text-red-600">This field is required</span>
                )}
                {error ? <p className="text-red-600">{error}</p> : ""}
              </div>

              <div className="form-control hidden">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  defaultValue="Student"
                  {...register("role", { required: true })}
                />
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Register"
                  className="btn text-white bg-[#6E479E] hover:bg-[#1E0935]"
                />
              </div>
            </form>
            <div className="mb-5 text-center">
              <p>
                Already has an account? <br></br>Please{" "}
                <span className="text-blue-700 font-bold">
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
