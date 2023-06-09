import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useSelectedClasses = () => {
  const { user } = useContext(AuthContext);
  const { data: allSelectedClass = [], refetch } = useQuery({
    queryKey: ["allSelectedClass", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5000/all-selected-classes?email=${user?.email}`
      );
      return response.json();
    },
  });

  return [allSelectedClass, refetch];
};

export default useSelectedClasses;
