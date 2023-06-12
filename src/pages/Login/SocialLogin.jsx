import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        const loggedUser = res.user;
        const userInfo = {
          name: loggedUser.displayName,
          email: loggedUser.email,
          image: loggedUser.photoURL,
          role: "Student",
        };
        // console.log(loggedUser);
        axios
          .post(
            "https://b7a12-summer-camp-server-side-siddiquenaim.vercel.app/users",
            userInfo
          )
          .then((res) => {
            if (res.data.insertedId) {
              console.log(res);
            }
          });
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="divider lg:divider-horizontal"></div>
      <div className="text-center">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline border-blue-700 hover:bg-blue-700 hover:text-white hover:border-none text-blue-700 mb-3"
        >
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
