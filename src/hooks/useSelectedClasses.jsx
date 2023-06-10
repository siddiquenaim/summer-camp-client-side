import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useSelectedClasses = () => {
  // const token = localStorage.getItem("access-token");
  const [axiosSecure] = useAxiosSecure();

  const { user } = useAuth();
  const { data: allSelectedClass = [], refetch } = useQuery({
    queryKey: ["allSelectedClass", user?.email],
    enabled: !!user?.email && !!localStorage.getItem("access-token"),

    queryFn: async () => {
      const response = await axiosSecure(
        `/all-selected-classes?email=${user?.email}`
      );
      return response.data;
    },
  });

  return [allSelectedClass, refetch];
};

export default useSelectedClasses;
