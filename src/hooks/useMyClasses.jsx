import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useMyClasses = () => {
  // const token = localStorage.getItem("access-token");
  const [axiosSecure] = useAxiosSecure();

  const { user } = useAuth();
  const { data: myClasses = [], refetch } = useQuery({
    queryKey: ["myClasses", user?.email],
    enabled: !!user?.email && !!localStorage.getItem("access-token"),

    queryFn: async () => {
      const response = await axiosSecure(`/my-classes?email=${user?.email}`);
      return response.data;
    },
  });

  return [myClasses, refetch];
};

export default useMyClasses;
