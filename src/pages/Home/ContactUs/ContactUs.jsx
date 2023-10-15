import { useContext, useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const ContactUs = () => {
  const { user } = useContext(AuthContext);
  const [sent, setSent] = useState(false);
  console.log(user);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_59z174o",
        "template_2a41fgh",
        form.current,
        "DQmHKD_n-mkFUg7Pu"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Email has been sent successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-[95%] md:w-[90%] mx-auto my-20">
      <h2
        className="text-5xl text-center font-bold mb-20"
        data-aos="fade-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        Contact Us
      </h2>
      <div className="lg:flex justify-center space-b-12">
        <div className="flex justify-center items-center  mx-auto">
          <div className="space-y-5">
            <div>
              <p className="text-[#81807D]">Email Address</p>
              <p>siddiquenaim26@gmail.com</p>
            </div>

            <div>
              <p className="text-[#81807D]">Our Studio</p>
              <p>Uttara, Dhaka, Bangladesh</p>
            </div>

            <div>
              <p className="text-[#81807D]">WhatsApp</p>
              <p>+880 1984 344646</p>
            </div>
          </div>
        </div>
        <div className="lg:w-[50%] mx-auto flex justify-center">
          <form ref={form} onSubmit={sendEmail} className="p-4 flex flex-col">
            <label htmlFor="" className="">
              Your Name
            </label>
            <input
              name="from_name"
              type="text"
              defaultValue={user?.displayName}
              placeholder={user?.displayName}
              className="input input-bordered input- input-md lg:w-[400px] mb-4 bg-slate-100"
              required
            />
            <label htmlFor="" className="">
              Your Email
            </label>
            <input
              name="from_email"
              type="email"
              value={user?.email}
              placeholder={user?.email}
              className="input input-bordered input- input-md lg:w-[400px] mb-4 bg-slate-100"
              required
            />
            <label htmlFor="">Your Message</label>
            <textarea
              name="message"
              placeholder="Write Your Message"
              className="textarea textarea-bordered textarea-md lg:w-[400px] bg-slate-100"
              required
            ></textarea>
            <div className="flex justify-center items-center mt-5">
              <button
                className="btn text-white bg-[#6E479E] hover:bg-[#1E0935] normal-case"
                disabled={sent ? true : false}
              >
                {sent ? "Message Sent" : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
