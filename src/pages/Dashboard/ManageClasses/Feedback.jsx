import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Feedback = () => {
  const [deniedClass, setDeniedClass] = useState();

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/classes/${id}`)
      .then((res) => {
        console.log(res.data);
        setDeniedClass(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);
  return (
    <div>
      <h2>Type your feedback here for: {deniedClass?.name}</h2>
      <input type="text" />
    </div>
  );
};

export default Feedback;
