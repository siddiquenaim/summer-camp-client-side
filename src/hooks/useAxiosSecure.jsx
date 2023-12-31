import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import Swal from "sweetalert2";

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const axiosSecure = axios.create({
    baseURL: "https://b7a12-summer-camp-server-side-siddiquenaim.vercel.app",
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logOut();
          Swal.fire({
            position: "center",
            icon: "error",
            title: `${error.response.data.message}`,
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;
