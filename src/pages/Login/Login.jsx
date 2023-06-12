import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((res) => {
        console.log(res);
        navigate(from, { replace: true });
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logged in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => console.log(error));
  };

  const handleShowPassword = () => {
    setShow(!show);
  };

  return (
    <div className="bg-white my-20">
      <div>
        <h1 className="text-5xl font-bold text-center mb-10">Login now!</h1>
      </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
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
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={`${show ? "text" : "password"}`}
                  className="input input-bordered"
                  placeholder="Your Password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-600">This field is required</span>
                )}
                <small onClick={handleShowPassword}>
                  {show ? "Hide Password" : "Show Password"}
                </small>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn text-white bg-[#6E479E] hover:bg-[#1E0935]"
                />
              </div>
            </form>
            <SocialLogin></SocialLogin>
            <div className="mb-5 text-center">
              <p>
                Already have an account? <br></br>Please{" "}
                <span className="text-blue-700 font-bold">
                  <Link to="/register">Register</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
