import React from "react";
import faq from "/faq.svg";

const FAQ = () => {
  return (
    <div className="w-[95%] md:w-[90%] mx-auto my-20">
      <h2
        className="text-5xl text-center font-bold mb-20"
        data-aos="fade-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col-reverse lg:flex-row justify-center gap-10">
        <div className="space-y-5 lg:w-[50%]">
          <div className="collapse collapse-plus bg-slate-100">
            <input type="radio" name="my-accordion-3" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              How many classes can I buy at once?
            </div>
            <div className="collapse-content">
              <p> You can purchase an unlimited number of classes at once.</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-slate-100">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How do I open an instructor option?
            </div>
            <div className="collapse-content">
              <p>
                To open an instructor option, please send us an email using the
                "Contact Us" section below. We'll provide you with the necessary
                information and steps to become an instructor.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-slate-100">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How do I add a class as an instructor?
            </div>
            <div className="collapse-content">
              <p>
                As an instructor, you can add a class by visiting the "Add a
                Class" section from your dashboard. Follow the provided
                instructions to create and list your class.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-slate-100">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              What are the payment methods accepted?
            </div>
            <div className="collapse-content">
              <p>
                We accept payments through Stripe, which allows you to use major
                credit cards (Visa, MasterCard, American Express) and other
                payment methods for a secure and convenient transaction process.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-[50%] flex justify-center items-center">
          <img src={faq} alt="" className="h-[300px]" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
