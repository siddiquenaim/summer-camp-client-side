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
              What are the payment methods accepted?
            </div>
            <div className="collapse-content">
              <p>
                {" "}
                We accept payments via major credit cards (Visa, MasterCard,
                American Express) and PayPal.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-slate-100">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How do I reset my password?
            </div>
            <div className="collapse-content">
              <p>
                To reset your password, go to the login page and click on the
                "Forgot Password" link. You'll receive an email with
                instructions on resetting your password.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-slate-100">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Can I switch to a different subscription plan?
            </div>
            <div className="collapse-content">
              <p>
                Yes, you can switch to a different subscription plan at any
                time. Visit your account settings and choose the plan that best
                suits your needs.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-slate-100">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              What if I'm not satisfied with the service?
            </div>
            <div className="collapse-content">
              <p>
                We offer a 30-day money-back guarantee. If you're not satisfied
                with our service, you can request a full refund within 30 days
                of your purchase. Your satisfaction is our priority.
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
