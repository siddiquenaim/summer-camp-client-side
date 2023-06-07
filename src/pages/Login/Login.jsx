import React from "react";

const Login = () => {
  return (
    <div className="bg-white my-20">
      <h1 className="text-5xl font-bold text-center mb-10">Login now!</h1>
      <div className="hero min-h-scree">
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
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn text-white bg-[#6E479E] hover:bg-[#1E0935]">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
