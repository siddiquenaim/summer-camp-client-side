import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import { useState } from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const element = useElements();
  const [cardError, setCardError] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !element) {
      return;
    }
    const card = element.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
      console.log(error.message);
    } else {
      setCardError("");
      console.log("card er payment", paymentMethod);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="bg-violet-800" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {cardError && <p className="text-center text-red-600">{cardError}</p>}
    </>
  );
};

export default CheckoutForm;
