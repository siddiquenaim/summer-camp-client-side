import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useSelectedClasses from "../../../hooks/useSelectedClasses";

const Payment = () => {
  const { id } = useParams();
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
  const [bookedClasses] = useSelectedClasses();
  const selectedClass = bookedClasses.find(
    (singleClass) => singleClass?._id === id
  );
  const price = parseFloat(selectedClass?.price);

  return (
    <div>
      <p>This is payment route, paying for: </p>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm
            selectedClass={selectedClass}
            price={price}
          ></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
