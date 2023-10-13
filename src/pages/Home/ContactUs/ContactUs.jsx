import React from "react";
import { useState } from "react";

const ContactUs = () => {
  const [sent, setSent] = useState(false);

  const handleMessage = (event) => {
    event.preventDefault();
    const form = event.target;
    form.reset();
    setSent(true);
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
      <div className="lg:flex justify-center space-y-12">
        <div className="flex justify-center items-center lg:w-[75%] mx-auto">
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
          <form onSubmit={handleMessage} className="p-4 flex flex-col">
            <label htmlFor="" className="">
              Your Email
            </label>
            <input
              type="text"
              placeholder="Your Email"
              className="input input-bordered input- input-md lg:w-[400px] mb-4"
              required
            />
            <label htmlFor="">Your Message</label>
            <textarea
              placeholder="Your Message"
              className="textarea textarea-bordered textarea-md lg:w-[400px]"
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
