import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Feedback = () => {
  const [deniedClass, setDeniedClass] = useState();
  const navigate = useNavigate();

  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    axios
      .get(
        `https://b7a12-summer-camp-server-side-siddiquenaim.vercel.app/classes/${id}`
      )
      .then((res) => {
        // console.log(res.data);
        setDeniedClass(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleAddFeedBack = (event) => {
    event.preventDefault();
    const form = event.target;
    const message = form.message.value;
    // console.log(message);
    axios
      .patch(
        `https://b7a12-summer-camp-server-side-siddiquenaim.vercel.app/feedback/${id}`,
        { feedback: message }
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire(
            "Sent",
            `Your feedback has been sent to ${deniedClass.instructorName}`,
            "success"
          );
          navigate("/dashboard/manage-classes");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-10">
        Type your feedback here for: {deniedClass?.name}
      </h2>
      <form onSubmit={handleAddFeedBack} className="w-full mx-auto text-center">
        <div>
          <textarea
            name="message"
            placeholder="Write your feedback"
            className="textarea textarea-bordered textarea-lg w-full max-w-xs"
          ></textarea>
        </div>
        <div>
          <input
            className="btn btn-accent"
            type="submit"
            value="Send feedback"
          />
        </div>
      </form>
    </div>
  );
};

export default Feedback;
